import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import {
  Leaf, LogOut, Plus, Trash2, Eye, EyeOff, Users, Inbox,
  LayoutGrid, Upload, CheckCircle, Mail, Phone, X, Clock,
  TrendingUp, Building2, RefreshCw, AlertCircle, Loader2, Image,
  ImagePlus, Briefcase,
} from 'lucide-react';
import {
  getLeads, updateLeadStatus, deleteLead,
  getProjects, createProject, deleteProject,
  type Lead, type Project,
} from '../lib/api';
import AdminCmsTab from '../components/AdminCmsTab';
import AdminJobsTab from '../components/AdminJobsTab';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const ADMIN_PASSWORD = 'GardenTime2024';
const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-00a2191f`;

const defaultNewProject: Omit<Project, 'id' | 'date'> = {
  title: '',
  category: 'Gartengestaltung',
  description: '',
  imageUrl: '',
  location: '',
};

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'leads' | 'projects' | 'jobs' | 'cms'>('dashboard');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadsError, setLeadsError] = useState('');

  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState('');

  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState(defaultNewProject);
  const [savingProject, setSavingProject] = useState(false);
  const [projectSaved, setProjectSaved] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [confirmDeleteLeadId, setConfirmDeleteLeadId] = useState<string | null>(null);
  const [deletingLeadId, setDeletingLeadId] = useState<string | null>(null);
  const [deleteLeadError, setDeleteLeadError] = useState('');

  // Bild-Upload State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem('gardentime_admin_auth');
    if (auth === 'true') setAuthenticated(true);
  }, []);

  const loadLeads = useCallback(async () => {
    setLeadsLoading(true);
    setLeadsError('');
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      console.error('Fehler beim Laden der Leads:', err);
      setLeadsError('Leads konnten nicht geladen werden. Bitte versuchen Sie es erneut.');
    } finally {
      setLeadsLoading(false);
    }
  }, []);

  const loadProjects = useCallback(async () => {
    setProjectsLoading(true);
    setProjectsError('');
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.error('Fehler beim Laden der Projekte:', err);
      setProjectsError('Projekte konnten nicht geladen werden.');
    } finally {
      setProjectsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      loadLeads();
      loadProjects();
    }
  }, [authenticated, loadLeads, loadProjects]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('gardentime_admin_auth', 'true');
      setAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Falsches Passwort. Bitte versuchen Sie es erneut.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('gardentime_admin_auth');
    setAuthenticated(false);
    setPassword('');
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.location) return;
    if (!newProject.imageUrl && !imageFile) {
      setImageUploadError('Bitte ein Bild auswählen.');
      return;
    }
    setSavingProject(true);
    try {
      let imageUrl = newProject.imageUrl;

      // Bild hochladen wenn Datei ausgewählt
      if (imageFile) {
        setImageUploading(true);
        const fd = new FormData();
        fd.append('file', imageFile);
        const res = await fetch(`${BASE_URL}/projects/upload`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${publicAnonKey}` },
          body: fd,
        });
        const data = await res.json();
        if (!res.ok || !data.url) throw new Error(data.error || 'Upload fehlgeschlagen');
        imageUrl = data.url;
        setImageUploading(false);
      }

      const project = await createProject({ ...newProject, imageUrl });
      setProjects([project, ...projects]);
      setNewProject(defaultNewProject);
      setImageFile(null);
      setImagePreview('');
      setImageUploadError('');
      setShowAddProject(false);
      setProjectSaved(true);
      setTimeout(() => setProjectSaved(false), 3000);
    } catch (err) {
      console.error('Fehler beim Speichern des Projekts:', err);
      setProjectsError('Projekt konnte nicht gespeichert werden.');
      setImageUploading(false);
    } finally {
      setSavingProject(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Projekt wirklich löschen?')) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Fehler beim Löschen des Projekts:', err);
    }
  };

  const handleUpdateLeadStatus = async (id: string, status: Lead['status']) => {
    try {
      const updated = await updateLeadStatus(id, status);
      setLeads(leads.map((l) => (l.id === id ? updated : l)));
      if (selectedLead?.id === id) setSelectedLead(updated);
    } catch (err) {
      console.error('Fehler beim Aktualisieren des Lead-Status:', err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    setDeletingLeadId(id);
    setDeleteLeadError('');
    try {
      await deleteLead(id);
      setLeads(leads.filter((l) => l.id !== id));
      if (selectedLead?.id === id) setSelectedLead(null);
      setConfirmDeleteLeadId(null);
    } catch (err) {
      console.error('Fehler beim Löschen des Leads:', err);
      setDeleteLeadError('Lead konnte nicht gelöscht werden. Bitte erneut versuchen.');
    } finally {
      setDeletingLeadId(null);
    }
  };

  const newLeadsCount = leads.filter((l) => l.status === 'neu').length;

  // ─── Login Screen ────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#f7f8f6] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#003f2e] rounded-xl flex items-center justify-center">
                <Leaf size={20} className="text-[#bcff83]" />
              </div>
              <span className="font-black text-[#003f2e] text-xl uppercase">Garden Time</span>
            </Link>
            <h1 className="text-[#003f2e] font-black text-2xl">Admin-Bereich</h1>
            <p className="text-gray-500 text-sm mt-2">Bitte melden Sie sich an</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleLogin} noValidate>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#003f2e] mb-2">
                  Passwort
                </label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setLoginError(''); }}
                    placeholder="Admin-Passwort eingeben"
                    className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-[#f7f8f6] text-[#003f2e] text-sm outline-none focus:border-[#2d746d] focus:ring-2 focus:ring-[#2d746d]/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {loginError && <p className="text-red-500 text-xs mt-1.5">{loginError}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#003f2e] text-[#bcff83] py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="text-[#2d746d] text-sm hover:text-[#003f2e] transition-colors">
              ← Zurück zur Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f7f8f6] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#003f2e] text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#bcff83] rounded-lg flex items-center justify-center">
              <Leaf size={16} className="text-[#003f2e]" />
            </div>
            <div>
              <p className="font-black text-sm uppercase">Garden Time</p>
              <p className="text-[#bcff83]/70 text-[10px]">Admin-Bereich</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
            { id: 'leads', label: `Leads${newLeadsCount > 0 ? ` (${newLeadsCount} neu)` : ''}`, icon: Inbox },
            { id: 'projects', label: 'Projekte', icon: LayoutGrid },
            { id: 'jobs', label: 'Jobs', icon: Briefcase },
            { id: 'cms', label: 'Website-Bilder', icon: Image },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
                activeTab === id
                  ? 'bg-[#bcff83] text-[#003f2e]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/60 text-xs hover:bg-white/10 hover:text-white transition-colors"
          >
            <Eye size={14} />
            Website ansehen
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-white/60 text-xs hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut size={14} />
            Abmelden
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-[#003f2e] font-bold text-lg">
              {activeTab === 'dashboard' && 'Übersicht'}
              {activeTab === 'leads' && 'Lead-Verwaltung'}
              {activeTab === 'projects' && 'Projekt-Verwaltung'}
              {activeTab === 'jobs' && 'Job-Verwaltung'}
              {activeTab === 'cms' && 'Website-Bilder (CMS)'}
            </h1>
            <p className="text-gray-400 text-xs">
              {new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {projectSaved && (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-200">
                <CheckCircle size={15} />
                Projekt gespeichert!
              </div>
            )}
            <button
              onClick={() => { loadLeads(); loadProjects(); }}
              className="flex items-center gap-2 bg-[#f7f8f6] text-[#003f2e] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-green-50 transition-colors border border-gray-200"
            >
              <RefreshCw size={13} />
              Aktualisieren
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* ── CMS ────────────────────────────────────── */}
          {activeTab === 'cms' && <AdminCmsTab />}

          {/* ── JOBS ────────────────────────────────────── */}
          {activeTab === 'jobs' && <AdminJobsTab />}

          {/* ── DASHBOARD ────────────────────────────────── */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { label: 'Neue Leads', value: newLeadsCount, icon: Inbox, color: 'bg-orange-50 text-orange-600', badge: newLeadsCount > 0 ? 'Aktion erforderlich' : 'Alles bearbeitet' },
                  { label: 'Gesamte Leads', value: leads.length, icon: Users, color: 'bg-blue-50 text-blue-600', badge: 'Gesamt' },
                  { label: 'Eigene Projekte', value: projects.length, icon: LayoutGrid, color: 'bg-green-50 text-green-600', badge: 'In Supabase' },
                  { label: 'In Bearbeitung', value: leads.filter(l => l.status === 'in-bearbeitung').length, icon: Clock, color: 'bg-yellow-50 text-yellow-600', badge: 'Aktiv' },
                ].map(({ label, value, icon: Icon, color, badge }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                      <Icon size={18} />
                    </div>
                    {leadsLoading || projectsLoading ? (
                      <div className="h-9 w-12 bg-gray-100 rounded animate-pulse mb-1" />
                    ) : (
                      <p className="text-[#003f2e] font-black text-3xl">{value}</p>
                    )}
                    <p className="text-gray-600 text-sm font-medium mt-1">{label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{badge}</p>
                  </div>
                ))}
              </div>

              {/* Supabase-Status-Badge */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-green-800 font-semibold text-sm">Supabase-Datenbank verbunden</p>
                  <p className="text-green-700 text-xs mt-0.5">Leads und Projekte werden dauerhaft in der Cloud gespeichert</p>
                </div>
              </div>

              {/* Neueste Leads */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-[#003f2e]">Neueste Leads</h2>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-[#2d746d] text-xs font-semibold hover:text-[#003f2e]"
                  >
                    Alle anzeigen →
                  </button>
                </div>
                {leadsLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 size={24} className="animate-spin text-[#2d746d]" />
                  </div>
                ) : leadsError ? (
                  <div className="text-center py-10">
                    <AlertCircle size={28} className="mx-auto mb-2 text-red-400" />
                    <p className="text-red-500 text-sm">{leadsError}</p>
                    <button onClick={loadLeads} className="mt-2 text-[#2d746d] text-xs underline">Erneut versuchen</button>
                  </div>
                ) : leads.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <Inbox size={32} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Noch keine Leads vorhanden</p>
                    <p className="text-xs mt-1">Leads aus dem Kontaktformular erscheinen hier</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-50">
                    {leads.slice(0, 5).map((lead) => (
                      <div key={lead.id} className="px-6 py-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-[#f7f8f6] rounded-xl flex items-center justify-center">
                            <Users size={16} className="text-[#2d746d]" />
                          </div>
                          <div>
                            <p className="text-[#003f2e] font-semibold text-sm">{lead.name}</p>
                            <p className="text-gray-400 text-xs">{lead.service}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            lead.status === 'neu' ? 'bg-orange-100 text-orange-700' :
                            lead.status === 'in-bearbeitung' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {lead.status === 'neu' ? 'Neu' : lead.status === 'in-bearbeitung' ? 'In Bearb.' : 'Fertig'}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {new Date(lead.date).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── LEADS ──────────────────────────────────── */}
          {activeTab === 'leads' && (
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#003f2e]">Alle Leads ({leads.length})</h2>
                  {leadsLoading && <Loader2 size={16} className="animate-spin text-[#2d746d]" />}
                </div>

                {leadsError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-start gap-2">
                    <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-700 text-xs">{leadsError}</p>
                      <button onClick={loadLeads} className="text-red-600 text-xs underline mt-1">Erneut laden</button>
                    </div>
                  </div>
                )}

                {deleteLeadError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4 flex items-center gap-2">
                    <AlertCircle size={14} className="text-red-500 shrink-0" />
                    <p className="text-red-700 text-xs flex-1">{deleteLeadError}</p>
                    <button onClick={() => setDeleteLeadError('')} className="text-red-400 hover:text-red-600"><X size={13} /></button>
                  </div>
                )}

                {leads.length === 0 && !leadsLoading ? (
                  <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                    <Inbox size={32} className="mx-auto mb-3 text-gray-300" />
                    <p className="text-gray-500 text-sm">Keine Leads vorhanden</p>
                    <p className="text-gray-400 text-xs mt-1">Kontaktformular auf der Website ausfüllen lassen</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className={`group w-full text-left bg-white rounded-xl border transition-all ${
                          confirmDeleteLeadId === lead.id
                            ? 'border-red-300 bg-red-50'
                            : selectedLead?.id === lead.id
                            ? 'border-[#2d746d] ring-1 ring-[#2d746d]/20'
                            : 'border-gray-100 hover:border-[#2d746d]'
                        }`}
                      >
                        {confirmDeleteLeadId === lead.id ? (
                          /* ── Bestätigungs-Banner ── */
                          <div className="p-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <Trash2 size={14} className="text-red-500 shrink-0" />
                              <p className="text-red-700 text-sm font-semibold">
                                „{lead.name}" wirklich löschen?
                              </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => setConfirmDeleteLeadId(null)}
                                className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200 transition-colors"
                              >
                                Abbrechen
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                disabled={deletingLeadId === lead.id}
                                className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition-colors disabled:opacity-70 flex items-center gap-1.5"
                              >
                                {deletingLeadId === lead.id ? <Loader2 size={12} className="animate-spin" /> : <Trash2 size={12} />}
                                Ja, löschen
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* ── Normaler Lead-Eintrag ── */
                          <div className="p-4 flex items-start justify-between gap-2">
                            <button
                              className="flex-1 text-left"
                              onClick={() => setSelectedLead(lead)}
                            >
                              <p className="text-[#003f2e] font-semibold text-sm">{lead.name}</p>
                              <p className="text-gray-400 text-xs">{lead.service}</p>
                              <p className="text-gray-400 text-xs mt-1">
                                {new Date(lead.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </button>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                lead.status === 'neu' ? 'bg-orange-100 text-orange-700' :
                                lead.status === 'in-bearbeitung' ? 'bg-blue-100 text-blue-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {lead.status === 'neu' ? 'Neu' : lead.status === 'in-bearbeitung' ? 'Bearb.' : '✓'}
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); setConfirmDeleteLeadId(lead.id); }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-100"
                                title="Lead löschen"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Lead Detail */}
              <div className="lg:col-span-3">
                {selectedLead ? (
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-[#003f2e] font-bold text-xl">{selectedLead.name}</h2>
                        <p className="text-gray-400 text-sm mt-1">
                          {new Date(selectedLead.date).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      <button onClick={() => setSelectedLead(null)} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: Mail, label: 'E-Mail', value: selectedLead.email, href: `mailto:${selectedLead.email}` },
                        { icon: Phone, label: 'Telefon', value: selectedLead.phone, href: `tel:${selectedLead.phone}` },
                        { icon: Building2, label: 'Leistung', value: selectedLead.service },
                      ].map(({ icon: Icon, label, value, href }) => (
                        <div key={label} className="bg-[#f7f8f6] rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon size={13} className="text-[#2d746d]" />
                            <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">{label}</p>
                          </div>
                          {href ? (
                            <a href={href} className="text-[#003f2e] font-semibold text-sm hover:text-[#2d746d] transition-colors break-all">
                              {value}
                            </a>
                          ) : (
                            <p className="text-[#003f2e] font-semibold text-sm">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedLead.message && (
                      <div className="bg-[#f7f8f6] rounded-xl p-4 mb-6">
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Nachricht</p>
                        <p className="text-[#003f2e] text-sm leading-relaxed">{selectedLead.message}</p>
                      </div>
                    )}

                    <div className="mb-5">
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-3">Status ändern</p>
                      <div className="flex gap-2 flex-wrap">
                        {(['neu', 'in-bearbeitung', 'abgeschlossen'] as Lead['status'][]).map((status) => (
                          <button
                            key={status}
                            onClick={() => handleUpdateLeadStatus(selectedLead.id, status)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                              selectedLead.status === status
                                ? 'bg-[#003f2e] text-[#bcff83]'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {status === 'neu' ? '🔴 Neu' : status === 'in-bearbeitung' ? '🟡 In Bearbeitung' : '🟢 Abgeschlossen'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:${selectedLead.email}?subject=Ihre Anfrage bei Garden Time Frankfurt`}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#003f2e] text-[#bcff83] py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                      >
                        <Mail size={14} />
                        Per E-Mail antworten
                      </a>
                      <button
                        onClick={() => setConfirmDeleteLeadId(selectedLead.id)}
                        className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={14} />
                        Löschen
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-gray-100 h-full min-h-[400px] flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Inbox size={40} className="mx-auto mb-3 opacity-30" />
                      <p className="text-sm">Lead aus der Liste auswählen</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}


          {/* ── PROJEKTE ────────────────────────────────── */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003f2e]">Projekte in Supabase ({projects.length})</h2>
                  {projectsLoading && <Loader2 size={16} className="animate-spin text-[#2d746d]" />}
                </div>
                <button
                  onClick={() => setShowAddProject(true)}
                  className="flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                >
                  <Plus size={16} />
                  Projekt hinzufügen
                </button>
              </div>

              {projectsError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2">
                  <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 text-xs">{projectsError}</p>
                </div>
              )}

              {/* Formular: Neues Projekt */}
              {showAddProject && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-[#003f2e] text-lg flex items-center gap-2">
                      <Upload size={18} />
                      Neues Projekt hinzufügen
                    </h3>
                    <button onClick={() => { setShowAddProject(false); setImageFile(null); setImagePreview(''); setImageUploadError(''); }} className="text-gray-400 hover:text-gray-600">
                      <X size={20} />
                    </button>
                  </div>
                  <form onSubmit={handleAddProject}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">Projekttitel *</label>
                        <input
                          type="text"
                          value={newProject.title}
                          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                          placeholder="z.B. Gartengestaltung Sachsenhausen"
                          required
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d] focus:ring-2 focus:ring-[#2d746d]/10"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">Kategorie *</label>
                        <select
                          value={newProject.category}
                          onChange={(e) => setNewProject({ ...newProject, category: e.target.value as Project['category'] })}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d]"
                        >
                          <option value="Gartengestaltung">Gartengestaltung</option>
                          <option value="Gartenpflege">Gartenpflege</option>
                          <option value="Facility Management">Facility Management</option>
                          <option value="Außenanlagen">Außenanlagen</option>
                          <option value="Winterdienst">Winterdienst</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">Standort *</label>
                        <input
                          type="text"
                          value={newProject.location}
                          onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                          placeholder="z.B. Frankfurt-Sachsenhausen"
                          required
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d]"
                        />
                      </div>
                    </div>

                    {/* Bild-Upload */}
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">Projektbild *</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          setImageFile(file);
                          setImageUploadError('');
                          const reader = new FileReader();
                          reader.onload = (ev) => setImagePreview(ev.target?.result as string);
                          reader.readAsDataURL(file);
                        }}
                      />
                      {imagePreview ? (
                        <div className="relative rounded-xl overflow-hidden border border-gray-200">
                          <img src={imagePreview} alt="Vorschau" className="w-full h-48 object-cover" />
                          <button
                            type="button"
                            onClick={() => { setImageFile(null); setImagePreview(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                          >
                            <X size={13} />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
                            {imageFile?.name}
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#2d746d] hover:bg-[#f7f8f6] transition-all group"
                        >
                          <div className="w-12 h-12 bg-[#003f2e]/5 rounded-xl flex items-center justify-center group-hover:bg-[#003f2e]/10 transition-colors">
                            <ImagePlus size={22} className="text-[#003f2e]/40 group-hover:text-[#003f2e]/60" />
                          </div>
                          <p className="text-sm text-gray-500 font-medium">Bild auswählen</p>
                          <p className="text-xs text-gray-400">JPG, PNG, WebP – max. 10 MB</p>
                        </button>
                      )}
                      {imageUploadError && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {imageUploadError}
                        </p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">Beschreibung</label>
                      <textarea
                        rows={3}
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        placeholder="Kurze Beschreibung des Projekts..."
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d] resize-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={savingProject || imageUploading}
                        className="flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors disabled:opacity-70"
                      >
                        {(savingProject || imageUploading) ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                        {imageUploading ? 'Bild wird hochgeladen...' : savingProject ? 'Speichern...' : 'Projekt speichern'}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowAddProject(false); setImageFile(null); setImagePreview(''); setImageUploadError(''); }}
                        className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50"
                      >
                        Abbrechen
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Projekt-Grid */}
              {projects.length === 0 && !projectsLoading ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <LayoutGrid size={40} className="mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-500 text-sm font-semibold">Noch keine eigenen Projekte</p>
                  <p className="text-gray-400 text-xs mt-1 mb-4">Fügen Sie Ihr erstes Projekt hinzu</p>
                  <button
                    onClick={() => setShowAddProject(true)}
                    className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                  >
                    <Plus size={15} />
                    Erstes Projekt hinzufügen
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x200/003f2e/bcff83?text=Kein+Bild'; }}
                        />
                        <span className="absolute top-3 left-3 bg-[#bcff83] text-[#003f2e] px-2 py-0.5 rounded-full text-xs font-bold">
                          {project.category}
                        </span>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="absolute top-3 right-3 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#003f2e] font-bold text-sm mb-0.5 line-clamp-1">{project.title}</h3>
                        <p className="text-[#2d746d] text-xs font-medium">{project.location}</p>
                        {project.description && (
                          <p className="text-gray-500 text-xs mt-2 line-clamp-2">{project.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <p className="text-blue-800 text-xs font-semibold mb-1">💡 Hinweis</p>
                <p className="text-blue-700 text-xs">
                  Hier hinzugefügte Projekte werden in Supabase gespeichert und erscheinen automatisch ganz oben auf der{' '}
                  <Link to="/projekte" target="_blank" className="underline font-semibold">
                    Projekte-Seite
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}