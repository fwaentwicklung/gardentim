import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.ts";
import { createClient } from "npm:@supabase/supabase-js";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ─────────────────────────────────────────────
// Supabase Storage – Bucket initialisieren
// ─────────────────────────────────────────────
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const CMS_BUCKET = "make-00a2191f-cms-images";

(async () => {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some((b: { name: string }) => b.name === CMS_BUCKET);
    if (!exists) {
      await supabase.storage.createBucket(CMS_BUCKET, { public: true });
      console.log(`Bucket "${CMS_BUCKET}" erstellt.`);
    }
  } catch (err) {
    console.log(`Fehler beim Initialisieren des Buckets: ${err}`);
  }
})();

// Health check
app.get("/make-server-00a2191f/health", (c) => {
  return c.json({ status: "ok" });
});

// ─────────────────────────────────────────────
// LEADS
// ─────────────────────────────────────────────

// POST /leads – Neuen Lead speichern (öffentlich, vom Kontaktformular)
app.post("/make-server-00a2191f/leads", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, service, message, dsgvo } = body;

    if (!name || !email || !phone || !service) {
      return c.json({ error: "Pflichtfelder fehlen: name, email, phone, service" }, 400);
    }

    const id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const lead = {
      id,
      name,
      email,
      phone,
      service,
      message: message || "",
      dsgvo: !!dsgvo,
      date: new Date().toISOString(),
      status: "neu",
    };

    await kv.set(`lead:${id}`, JSON.stringify(lead));
    console.log(`Lead gespeichert: ${id}`);

    // E-Mail über Resend senden
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    // Für die Test- bzw. Free-Phase nutzt Resend die registrierte Mail als Empfänger.
    // Bitte setze in den Supabase Secrets unbedingt die ADMIN_EMAIL auf die Mailadresse, 
    // mit der du den Resend-Account angelegt hast.
    const adminEmail = Deno.env.get("ADMIN_EMAIL");
    
    if (resendApiKey && adminEmail) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            // Standard-Absender von Resend für einfache Tests
            from: "Garden Time Anfragen <onboarding@resend.dev>", 
            to: adminEmail,
            subject: `Neue Anfrage von ${name} - ${service}`,
            html: `
              <h2>Neue Kontaktanfrage</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Telefon:</strong> ${phone}</p>
              <p><strong>E-Mail:</strong> ${email}</p>
              <p><strong>Gewünschte Leistung:</strong> ${service}</p>
              <p><strong>Nachricht:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : 'Keine Nachricht'}</p>
              <hr/>
              <p><small>DSGVO zugestimmt: ${dsgvo ? 'Ja' : 'Nein'} | ID: ${id}</small></p>
            `
          })
        });
        
        if (!emailRes.ok) {
          const errorText = await emailRes.text();
          console.error(`E-Mail Versand fehlgeschlagen: ${errorText}`);
        } else {
          console.log(`E-Mail erfolgreich versendet an ${adminEmail}.`);
        }
      } catch (err) {
        console.error(`Fehler beim Senden der E-Mail über Resend: ${err}`);
      }
    } else {
      console.log('RESEND_API_KEY oder ADMIN_EMAIL fehlt in den Environment Variablen, oder beides. E-Mail wird nicht gesendet.');
    }

    return c.json({ success: true, lead }, 201);
  } catch (err) {
    console.log(`Fehler beim Speichern des Leads: ${err}`);
    return c.json({ error: `Fehler beim Speichern: ${err}` }, 500);
  }
});

// GET /leads – Alle Leads abrufen (Admin)
app.get("/make-server-00a2191f/leads", async (c) => {
  try {
    const entries = await kv.getByPrefix("lead:");
    const leads = entries
      .map((entry: string) => {
        try { return typeof entry === 'string' ? JSON.parse(entry) : entry; } catch { return null; }
      })
      .filter(Boolean)
      .sort((a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    return c.json({ leads });
  } catch (err) {
    console.log(`Fehler beim Abrufen der Leads: ${err}`);
    return c.json({ error: `Fehler beim Abrufen: ${err}` }, 500);
  }
});

// PATCH /leads/:id – Lead-Status aktualisieren (Admin)
app.patch("/make-server-00a2191f/leads/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { status } = body;

    const raw = await kv.get(`lead:${id}`);
    if (!raw) {
      return c.json({ error: "Lead nicht gefunden" }, 404);
    }

    const lead = typeof raw === 'string' ? JSON.parse(raw) : raw;
    lead.status = status;
    await kv.set(`lead:${id}`, JSON.stringify(lead));
    return c.json({ success: true, lead });
  } catch (err) {
    console.log(`Fehler beim Aktualisieren des Leads: ${err}`);
    return c.json({ error: `Fehler beim Aktualisieren: ${err}` }, 500);
  }
});

// DELETE /leads/:id – Lead löschen (Admin)
app.delete("/make-server-00a2191f/leads/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`lead:${id}`);
    return c.json({ success: true });
  } catch (err) {
    console.log(`Fehler beim Löschen des Leads: ${err}`);
    return c.json({ error: `Fehler beim Löschen: ${err}` }, 500);
  }
});

// ─────────────────────────────────────────────
// PROJEKTE
// ─────────────────────────────────────────────

// POST /projects – Neues Projekt speichern (Admin)
app.post("/make-server-00a2191f/projects", async (c) => {
  try {
    const body = await c.req.json();
    const { title, category, description, imageUrl, location } = body;

    if (!title || !imageUrl || !location) {
      return c.json({ error: "Pflichtfelder fehlen: title, imageUrl, location" }, 400);
    }

    const id = `proj_${Date.now()}`;
    const project = {
      id,
      title,
      category: category || "Gartengestaltung",
      description: description || "",
      imageUrl,
      location,
      date: new Date().toISOString().slice(0, 7),
    };

    await kv.set(`project:${id}`, JSON.stringify(project));
    console.log(`Projekt gespeichert: ${id}`);
    return c.json({ success: true, project }, 201);
  } catch (err) {
    console.log(`Fehler beim Speichern des Projekts: ${err}`);
    return c.json({ error: `Fehler beim Speichern: ${err}` }, 500);
  }
});

// GET /projects – Alle Projekte abrufen (öffentlich)
app.get("/make-server-00a2191f/projects", async (c) => {
  try {
    const entries = await kv.getByPrefix("project:");
    const projects = entries
      .map((entry: string) => {
        try { return typeof entry === 'string' ? JSON.parse(entry) : entry; } catch { return null; }
      })
      .filter(Boolean)
      .sort((a: { date: string }, b: { date: string }) =>
        b.date.localeCompare(a.date)
      );
    return c.json({ projects });
  } catch (err) {
    console.log(`Fehler beim Abrufen der Projekte: ${err}`);
    return c.json({ error: `Fehler beim Abrufen: ${err}` }, 500);
  }
});

// DELETE /projects/:id – Projekt löschen (Admin)
app.delete("/make-server-00a2191f/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`project:${id}`);
    return c.json({ success: true });
  } catch (err) {
    console.log(`Fehler beim Löschen des Projekts: ${err}`);
    return c.json({ error: `Fehler beim Löschen: ${err}` }, 500);
  }
});

// POST /projects/upload – Projektbild hochladen
app.post("/make-server-00a2191f/projects/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return c.json({ error: "Keine Datei übermittelt" }, 400);
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `projects/proj_${Date.now()}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const { error: uploadError } = await supabase.storage
      .from(CMS_BUCKET)
      .upload(fileName, arrayBuffer, {
        contentType: file.type || "image/jpeg",
        upsert: true,
      });

    if (uploadError) {
      console.log(`Storage-Upload-Fehler: ${uploadError.message}`);
      return c.json({ error: `Upload fehlgeschlagen: ${uploadError.message}` }, 500);
    }

    const { data } = supabase.storage.from(CMS_BUCKET).getPublicUrl(fileName);
    console.log(`Projektbild hochgeladen: ${data.publicUrl}`);
    return c.json({ success: true, url: data.publicUrl });
  } catch (err) {
    console.log(`Fehler beim Projektbild-Upload: ${err}`);
    return c.json({ error: `Fehler beim Upload: ${err}` }, 500);
  }
});

// ─────────────────────────────────────────────
// CMS – Bildverwaltung
// ─────────────────────────────────────────────

// GET /cms – Alle CMS-Werte laden
app.get("/make-server-00a2191f/cms", async (c) => {
  try {
    const raw = await kv.get("cms:config");
    let cms: Record<string, string> = {};
    if (raw) {
      cms = typeof raw === 'string' ? JSON.parse(raw) : raw;
    }
    return c.json({ cms });
  } catch (err) {
    console.log(`Fehler beim Laden der CMS-Daten: ${err}`);
    return c.json({ error: `Fehler: ${err}` }, 500);
  }
});

// POST /cms – Einen CMS-Wert speichern
app.post("/make-server-00a2191f/cms", async (c) => {
  try {
    const body = await c.req.json();
    const { key, value } = body;
    if (!key || !value) {
      return c.json({ error: "key und value erforderlich" }, 400);
    }
    const raw = await kv.get("cms:config");
    const cms: Record<string, string> = raw
      ? (typeof raw === 'string' ? JSON.parse(raw) : raw)
      : {};
    cms[key] = value;
    await kv.set("cms:config", JSON.stringify(cms));
    return c.json({ success: true, key, value });
  } catch (err) {
    console.log(`Fehler beim Speichern des CMS-Werts: ${err}`);
    return c.json({ error: `Fehler: ${err}` }, 500);
  }
});

// POST /cms/bulk – Mehrere CMS-Werte auf einmal
app.post("/make-server-00a2191f/cms/bulk", async (c) => {
  try {
    const body = await c.req.json();
    const { updates } = body as { updates: Record<string, string> };
    if (!updates || typeof updates !== "object") {
      return c.json({ error: "updates-Objekt erforderlich" }, 400);
    }
    const raw = await kv.get("cms:config");
    const cms: Record<string, string> = raw
      ? (typeof raw === 'string' ? JSON.parse(raw) : raw)
      : {};
    Object.assign(cms, updates);
    await kv.set("cms:config", JSON.stringify(cms));
    return c.json({ success: true, count: Object.keys(updates).length });
  } catch (err) {
    console.log(`Fehler beim Bulk-Speichern: ${err}`);
    return c.json({ error: `Fehler: ${err}` }, 500);
  }
});

// POST /cms/upload – Bild hochladen und öffentliche URL zurückgeben
app.post("/make-server-00a2191f/cms/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("file") as File | null;
    const cmsKey = (formData.get("key") as string) || "generic";

    if (!file) {
      return c.json({ error: "Keine Datei übermittelt" }, 400);
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const safeName = cmsKey.replace(/[^a-z0-9]/gi, "_");
    const fileName = `cms/${safeName}_${Date.now()}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const { error: uploadError } = await supabase.storage
      .from(CMS_BUCKET)
      .upload(fileName, arrayBuffer, {
        contentType: file.type || "image/jpeg",
        upsert: true,
      });

    if (uploadError) {
      console.log(`Storage-Upload-Fehler: ${uploadError.message}`);
      return c.json({ error: `Upload fehlgeschlagen: ${uploadError.message}` }, 500);
    }

    const { data } = supabase.storage.from(CMS_BUCKET).getPublicUrl(fileName);
    console.log(`Bild hochgeladen: ${data.publicUrl}`);
    return c.json({ success: true, url: data.publicUrl });
  } catch (err) {
    console.log(`Fehler beim Bild-Upload: ${err}`);
    return c.json({ error: `Fehler beim Upload: ${err}` }, 500);
  }
});

// ─────────────────────────────────────────────
// JOBS – Stellenangebote
// ─────────────────────────────────────────────

// GET /jobs – Aktive Jobs abrufen (öffentlich)
app.get("/make-server-00a2191f/jobs", async (c) => {
  try {
    const showAll = c.req.query("all") === "true";
    const entries = await kv.getByPrefix("job:");
    const jobs = entries
      .map((entry: string) => {
        try { return typeof entry === 'string' ? JSON.parse(entry) : entry; } catch { return null; }
      })
      .filter(Boolean)
      .filter((j: { active: boolean }) => showAll ? true : j.active)
      .sort((a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    return c.json({ jobs });
  } catch (err) {
    console.log(`Fehler beim Abrufen der Jobs: ${err}`);
    return c.json({ error: `Fehler beim Abrufen: ${err}` }, 500);
  }
});

// POST /jobs – Neuen Job erstellen (Admin)
app.post("/make-server-00a2191f/jobs", async (c) => {
  try {
    const body = await c.req.json();
    const { title, department, location, type, description, requirements } = body;

    if (!title || !department || !location || !type) {
      return c.json({ error: "Pflichtfelder fehlen: title, department, location, type" }, 400);
    }

    const id = `job_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const job = {
      id,
      title,
      department,
      location: location || "Frankfurt am Main",
      type,
      description: description || "",
      requirements: requirements || "",
      active: true,
      date: new Date().toISOString(),
    };

    await kv.set(`job:${id}`, JSON.stringify(job));
    console.log(`Job gespeichert: ${id}`);
    return c.json({ success: true, job }, 201);
  } catch (err) {
    console.log(`Fehler beim Speichern des Jobs: ${err}`);
    return c.json({ error: `Fehler beim Speichern: ${err}` }, 500);
  }
});

// PATCH /jobs/:id – Job aktualisieren (Admin)
app.patch("/make-server-00a2191f/jobs/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const raw = await kv.get(`job:${id}`);
    if (!raw) return c.json({ error: "Job nicht gefunden" }, 404);

    const job = typeof raw === 'string' ? JSON.parse(raw) : raw;
    Object.assign(job, body);
    await kv.set(`job:${id}`, JSON.stringify(job));
    return c.json({ success: true, job });
  } catch (err) {
    console.log(`Fehler beim Aktualisieren des Jobs: ${err}`);
    return c.json({ error: `Fehler beim Aktualisieren: ${err}` }, 500);
  }
});

// DELETE /jobs/:id – Job löschen (Admin)
app.delete("/make-server-00a2191f/jobs/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`job:${id}`);
    return c.json({ success: true });
  } catch (err) {
    console.log(`Fehler beim Löschen des Jobs: ${err}`);
    return c.json({ error: `Fehler beim Löschen: ${err}` }, 500);
  }
});

Deno.serve(app.fetch);