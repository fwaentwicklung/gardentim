# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev                                    # Start Vite dev server
npm run build                                  # Production build (output: dist/)
node node_modules/vite/bin/vite.js build       # Fallback if npm run build fails (permission issue on this machine)
```

There are no tests. Deployment happens automatically via GitHub push to `main` → Vercel (repo: `fwaentwicklung/gardentim`).

## Architecture

**Stack:** React 18 + React Router v7 + Tailwind CSS v4 + Vite. No SSR — SPA with a catch-all rewrite in `vercel.json` pointing everything to `index.html`.

**Routing:** All routes are defined in `src/app/routes.ts` using `createBrowserRouter`. The root layout (`Root.tsx`) wraps every page with Navigation, Footer, WhatsAppButton, sticky mobile phone bar, and CookieBanner. The `/admin` route sits outside the root layout.

**Service pages (23 total):** Every leistungen page in `src/app/pages/leistungen/` is built entirely with `ServicePageTemplate` — a single large component (`src/app/components/ServicePageTemplate.tsx`) that accepts a typed props object. Adding or modifying a service page means only editing that page's props, not the template itself. All service pages must include exactly 4 `steps[]` entries. The template renders two LeadForms: one directly below the hero (`#anfrage` anchor) and one at the bottom CTA section.

**Navigation:** `Navigation.tsx` has two separate arrays — `gartenLinks`/`facilityLinks` (all pages, used in mobile menu) and `gartenMenuLinks`/`facilityMenuLinks` (filtered subset for the desktop dropdown). Adding a new service page requires updating **both** the full array and the filtered array.

**Central company data:** All contact info, addresses, phone numbers, and legal details live in `src/app/lib/company.ts` as the `COMPANY` object. Always use this — never hardcode contact details elsewhere.

**Backend:** A Supabase Edge Function (`make-server-00a2191f`) handles all data. The client in `src/app/lib/api.ts` calls it for leads, projects, and jobs. Admin routes require `VITE_ADMIN_API_SECRET` env var + an `X-Admin-Secret` header.

**SEO:** Each page uses `SEOHead` (`src/app/components/SEOHead.tsx`) which sets `<title>`, meta tags, Open Graph, and FAQ schema via `document` manipulation (no `<head>` in JSX). Canonical URLs must be set explicitly per page.

**Google Ads + DSGVO (Consent Mode v2):**
- `index.html` sets all consent signals to `denied` by default before the gtag script loads.
- `CookieBanner.tsx` calls `updateGtagConsent()` after user choice; consent is stored in `localStorage` under `gardentime_cookie_consent`.
- `Root.tsx` restores saved consent on load for returning users.
- Any conversion event (form submission, WhatsApp click) must check `consent?.marketing` before calling `window.gtag('event', 'conversion', ...)`.
- Google Ads ID: `AW-17024588965`
- Lead conversion: `AW-17024588965/c3b7CNv6wb8aEKW5-rU_` (fires on `/danke` mount)
- WhatsApp conversion: `AW-17024588965/1xW7CLLE2pocEKW5-rU_` (fires on WhatsApp link click)

**WhatsApp button:** `WhatsAppButton.tsx` is rendered globally in `Root.tsx`. Tooltip auto-shows after 4s, hides after 12s, suppressed for the session via `sessionStorage('wa_tooltip_dismissed')`. Conversion tracked on link click (marketing consent required).

**Sticky mobile phone bar:** Rendered in `Root.tsx` — a fixed bottom bar visible only on mobile (`sm:hidden`). Hidden on `/danke` and `/admin`. Uses `env(safe-area-inset-bottom)` for iPhone notch support.

**LeadForm:** `LeadForm.tsx` navigates to `/danke` on success via `useNavigate`. Has `servicePreset` prop to pre-select the relevant service. Grid is responsive at `min-[480px]:grid-cols-2`. Padding is `p-4 sm:p-6`. The message field was intentionally removed to reduce friction.

**Homepage hero:** Split layout — form card on the right (order-1 on mobile, so it appears first), headline on the left (order-2 on mobile). The form is visible without scrolling on all screen sizes.

**Redirects:** Old URLs `/gartenpflege` and `/facility-management` redirect 301 → `/leistungen/...` via `vercel.json`. Do not add compatibility client-side routes — the server redirect handles it.

**`/danke` page:** After any form submission (`LeadForm` navigates here via `useNavigate`). Fires the Google Ads lead conversion on mount if marketing consent is granted. Excluded from sitemap and blocked in `robots.txt`.

**No price mentions on the website** — the client explicitly does not want any price information displayed to visitors.

## Adding a new service page

1. Create `src/app/pages/leistungen/MyPage.tsx` using `ServicePageTemplate` with exactly 4 `steps[]`
2. Add import + route in `src/app/routes.ts`
3. Add to both `facilityLinks`/`gartenLinks` AND `facilityMenuLinks`/`gartenMenuLinks` in `Navigation.tsx`
4. Add URL to `public/sitemap.xml`
