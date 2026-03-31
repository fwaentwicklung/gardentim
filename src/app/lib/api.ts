import { projectId, publicAnonKey } from '/utils/supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-00a2191f`;

// ─── Öffentliche Anfragen (Kontaktformular, Projekte lesen, Jobs lesen) ──────
const publicHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${publicAnonKey}`,
};

// ─── Admin-Anfragen (mit Secret-Header gesichert) ────────────────────────────
const adminSecret = import.meta.env.VITE_ADMIN_API_SECRET ?? '';
const adminHeaders = {
  ...publicHeaders,
  'X-Admin-Secret': adminSecret,
};

async function request<T>(path: string, options?: RequestInit & { admin?: boolean }): Promise<T> {
  const { admin = false, ...fetchOptions } = options ?? {};
  const headers = admin ? adminHeaders : publicHeaders;
  const res = await fetch(`${BASE_URL}${path}`, {
    ...fetchOptions,
    headers: { ...headers, ...(fetchOptions?.headers || {}) },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─────────────────────────────────────────────
// Leads
// ─────────────────────────────────────────────

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  dsgvo: boolean;
  date: string;
  status: 'neu' | 'in-bearbeitung' | 'abgeschlossen';
}

// Öffentlich – Kontaktformular
export async function createLead(data: Omit<Lead, 'id' | 'date' | 'status'>): Promise<Lead> {
  const result = await request<{ lead: Lead }>('/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return result.lead;
}

// Admin
export async function getLeads(): Promise<Lead[]> {
  const result = await request<{ leads: Lead[] }>('/leads', { admin: true });
  return result.leads;
}

export async function updateLeadStatus(id: string, status: Lead['status']): Promise<Lead> {
  const result = await request<{ lead: Lead }>(`/leads/${id}`, {
    admin: true,
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
  return result.lead;
}

export async function deleteLead(id: string): Promise<void> {
  await request(`/leads/${id}`, { admin: true, method: 'DELETE' });
}

// ─────────────────────────────────────────────
// Projekte
// ─────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  category: 'Gartenpflege' | 'Gartengestaltung' | 'Facility Management' | 'Außenanlagen' | 'Winterdienst';
  description: string;
  imageUrl: string;
  location: string;
  date: string;
}

// Admin
export async function createProject(data: Omit<Project, 'id' | 'date'>): Promise<Project> {
  const result = await request<{ project: Project }>('/projects', {
    admin: true,
    method: 'POST',
    body: JSON.stringify(data),
  });
  return result.project;
}

// Öffentlich – Portfolio-Seite
export async function getProjects(): Promise<Project[]> {
  const result = await request<{ projects: Project[] }>('/projects');
  return result.projects;
}

// Admin
export async function deleteProject(id: string): Promise<void> {
  await request(`/projects/${id}`, { admin: true, method: 'DELETE' });
}

// ─────────────────────────────────────────────
// CMS
// ─────────────────────────────────────────────

// Öffentlich – Website lädt CMS-Bilder
export async function getCmsImages(): Promise<Record<string, string>> {
  const result = await request<{ cms: Record<string, string> }>('/cms');
  return result.cms || {};
}

// Admin
export async function setCmsImage(key: string, value: string): Promise<void> {
  await request('/cms', {
    admin: true,
    method: 'POST',
    body: JSON.stringify({ key, value }),
  });
}

export async function setCmsImagesBulk(updates: Record<string, string>): Promise<void> {
  await request('/cms/bulk', {
    admin: true,
    method: 'POST',
    body: JSON.stringify({ updates }),
  });
}

// ─────────────────────────────────────────────
// Jobs
// ─────────────────────────────────────────────

export interface Job {
  id: string;
  title: string;
  department: 'Garten' | 'Facility' | 'Büro' | 'Sonstiges';
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Minijob' | 'Ausbildung' | 'Praktikum';
  description: string;
  requirements: string;
  active: boolean;
  date: string;
}

// Öffentlich – Jobs-Seite
export async function getJobs(all = false): Promise<Job[]> {
  const result = await request<{ jobs: Job[] }>(`/jobs${all ? '?all=true' : ''}`, all ? { admin: true } : undefined);
  return result.jobs;
}

// Admin
export async function createJob(data: Omit<Job, 'id' | 'date' | 'active'>): Promise<Job> {
  const result = await request<{ job: Job }>('/jobs', {
    admin: true,
    method: 'POST',
    body: JSON.stringify(data),
  });
  return result.job;
}

export async function updateJob(id: string, data: Partial<Job>): Promise<Job> {
  const result = await request<{ job: Job }>(`/jobs/${id}`, {
    admin: true,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
  return result.job;
}

export async function deleteJob(id: string): Promise<void> {
  await request(`/jobs/${id}`, { admin: true, method: 'DELETE' });
}