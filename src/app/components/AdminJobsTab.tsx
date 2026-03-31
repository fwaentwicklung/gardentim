import { useState, useEffect, useCallback } from 'react';
import {
  Plus, Trash2, X, Loader2, AlertCircle, CheckCircle,
  Briefcase, MapPin, Clock, Eye, EyeOff, Pencil, Save,
} from 'lucide-react';
import { getJobs, createJob, updateJob, deleteJob, type Job } from '../lib/api';

const DEPARTMENTS: Job['department'][] = ['Garten', 'Facility', 'Büro', 'Sonstiges'];
const TYPES: Job['type'][] = ['Vollzeit', 'Teilzeit', 'Minijob', 'Ausbildung', 'Praktikum'];

const TYPE_COLORS: Record<string, string> = {
  Vollzeit: 'bg-green-100 text-green-800',
  Teilzeit: 'bg-blue-100 text-blue-800',
  Minijob: 'bg-purple-100 text-purple-800',
  Ausbildung: 'bg-amber-100 text-amber-800',
  Praktikum: 'bg-pink-100 text-pink-800',
};

const emptyJob: Omit<Job, 'id' | 'date' | 'active'> = {
  title: '',
  department: 'Garten',
  location: 'Frankfurt am Main',
  type: 'Vollzeit',
  description: '',
  requirements: '',
};

interface EditFormProps {
  initial: Omit<Job, 'id' | 'date' | 'active'>;
  onSave: (data: Omit<Job, 'id' | 'date' | 'active'>) => Promise<void>;
  onCancel: () => void;
  saving: boolean;
  title: string;
}

function JobForm({ initial, onSave, onCancel, saving, title }: EditFormProps) {
  const [form, setForm] = useState(initial);

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-[#003f2e] text-lg flex items-center gap-2">
          <Briefcase size={18} />
          {title}
        </h3>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Stellentitel */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Stellenbezeichnung *
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            placeholder="z.B. Gärtner (m/w/d) für Gartenpflege"
            required
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d] focus:ring-2 focus:ring-[#2d746d]/10"
          />
        </div>

        {/* Bereich */}
        <div>
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Bereich *
          </label>
          <select
            value={form.department}
            onChange={(e) => set('department', e.target.value as Job['department'])}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d]"
          >
            {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {/* Anstellungsart */}
        <div>
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Anstellungsart *
          </label>
          <select
            value={form.type}
            onChange={(e) => set('type', e.target.value as Job['type'])}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d]"
          >
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Einsatzort */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Einsatzort
          </label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => set('location', e.target.value)}
            placeholder="z.B. Frankfurt am Main & Umgebung"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d]"
          />
        </div>

        {/* Beschreibung */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Stellenbeschreibung
          </label>
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder="Was erwartet den Bewerber? Aufgaben, Tätigkeitsfeld, Arbeitszeiten, Vorteile…"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d] resize-none"
          />
        </div>

        {/* Anforderungen */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-1.5">
            Anforderungen / Was wir erwarten
          </label>
          <textarea
            rows={4}
            value={form.requirements}
            onChange={(e) => set('requirements', e.target.value)}
            placeholder="Kenntnisse, Ausbildung, Erfahrung, Führerschein…"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#f7f8f6] text-sm text-[#003f2e] outline-none focus:border-[#2d746d] resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onSave(form)}
          disabled={saving || !form.title.trim()}
          className="flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors disabled:opacity-60"
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {saving ? 'Speichern…' : 'Stelle speichern'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}

export default function AdminJobsTab() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedId, setSavedId] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editSaving, setEditSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getJobs(true); // all=true für Admin
      setJobs(data);
    } catch (err) {
      console.error('Fehler beim Laden der Jobs:', err);
      setError('Jobs konnten nicht geladen werden.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleCreate = async (data: Omit<Job, 'id' | 'date' | 'active'>) => {
    setSaving(true);
    try {
      const job = await createJob(data);
      setJobs([job, ...jobs]);
      setShowAddForm(false);
      setSavedId(job.id);
      setTimeout(() => setSavedId(''), 3000);
    } catch (err) {
      console.error('Fehler beim Erstellen:', err);
      setError('Stelle konnte nicht gespeichert werden.');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async (id: string, data: Omit<Job, 'id' | 'date' | 'active'>) => {
    setEditSaving(true);
    try {
      const updated = await updateJob(id, data);
      setJobs(jobs.map((j) => j.id === id ? updated : j));
      setEditingId(null);
      setSavedId(id);
      setTimeout(() => setSavedId(''), 3000);
    } catch (err) {
      console.error('Fehler beim Aktualisieren:', err);
    } finally {
      setEditSaving(false);
    }
  };

  const handleToggleActive = async (job: Job) => {
    try {
      const updated = await updateJob(job.id, { active: !job.active });
      setJobs(jobs.map((j) => j.id === job.id ? updated : j));
    } catch (err) {
      console.error('Fehler beim Umschalten:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Stelle wirklich löschen?')) return;
    try {
      await deleteJob(id);
      setJobs(jobs.filter((j) => j.id !== id));
    } catch (err) {
      console.error('Fehler beim Löschen:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={28} className="animate-spin text-[#2d746d]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-[#003f2e]">
            Stellenangebote ({jobs.length})
          </h2>
          <span className="text-xs text-gray-400">
            {jobs.filter(j => j.active).length} aktiv · {jobs.filter(j => !j.active).length} deaktiviert
          </span>
        </div>
        <div className="flex gap-2">
          {savedId && (
            <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-xl border border-green-200">
              <CheckCircle size={14} />
              Gespeichert!
            </div>
          )}
          <button
            onClick={() => { setShowAddForm(true); setEditingId(null); }}
            className="flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
          >
            <Plus size={16} />
            Stelle hinzufügen
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2">
          <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-xs">{error}</p>
        </div>
      )}

      {/* Formular: Neue Stelle */}
      {showAddForm && (
        <JobForm
          initial={emptyJob}
          onSave={handleCreate}
          onCancel={() => setShowAddForm(false)}
          saving={saving}
          title="Neue Stelle anlegen"
        />
      )}

      {/* Stellenliste */}
      {jobs.length === 0 && !showAddForm ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-14 text-center">
          <div className="w-16 h-16 bg-[#003f2e]/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Briefcase size={28} className="text-[#003f2e]/25" />
          </div>
          <p className="text-gray-500 font-semibold text-sm mb-1">Noch keine Stellen angelegt</p>
          <p className="text-gray-400 text-xs mb-5">Fügen Sie Ihre erste Stelle hinzu – sie erscheint sofort auf der Jobs-Seite.</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
          >
            <Plus size={15} />
            Erste Stelle anlegen
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => (
            <div key={job.id}>
              {editingId === job.id ? (
                <JobForm
                  initial={{
                    title: job.title,
                    department: job.department,
                    location: job.location,
                    type: job.type,
                    description: job.description,
                    requirements: job.requirements,
                  }}
                  onSave={(data) => handleUpdate(job.id, data)}
                  onCancel={() => setEditingId(null)}
                  saving={editSaving}
                  title="Stelle bearbeiten"
                />
              ) : (
                <div className={`bg-white rounded-2xl border overflow-hidden transition-all ${
                  job.active ? 'border-gray-100' : 'border-dashed border-gray-200 opacity-60'
                } ${savedId === job.id ? 'ring-2 ring-green-400/50' : ''}`}>
                  <div className="px-5 py-4 flex items-center gap-4">
                    {/* Status-Dot */}
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${job.active ? 'bg-green-500' : 'bg-gray-300'}`} />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[#003f2e] font-bold text-sm">{job.title}</span>
                        {!job.active && (
                          <span className="text-[10px] bg-gray-100 text-gray-500 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            Deaktiviert
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${TYPE_COLORS[job.type] ?? 'bg-gray-100 text-gray-600'}`}>
                          {job.type}
                        </span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Briefcase size={10} />
                          {job.department}
                        </span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <MapPin size={10} />
                          {job.location}
                        </span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Clock size={10} />
                          {new Date(job.date).toLocaleDateString('de-DE')}
                        </span>
                      </div>
                    </div>

                    {/* Aktionen */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Aktiv/Inaktiv toggeln */}
                      <button
                        onClick={() => handleToggleActive(job)}
                        title={job.active ? 'Deaktivieren' : 'Aktivieren'}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-xs ${
                          job.active
                            ? 'bg-green-50 text-green-600 hover:bg-green-100'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {job.active ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>

                      {/* Bearbeiten */}
                      <button
                        onClick={() => { setEditingId(job.id); setShowAddForm(false); }}
                        title="Bearbeiten"
                        className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <Pencil size={14} />
                      </button>

                      {/* Löschen */}
                      <button
                        onClick={() => handleDelete(job.id)}
                        title="Löschen"
                        className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Beschreibungs-Preview */}
                  {job.description && (
                    <div className="px-5 pb-4 pt-0">
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Info-Box */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <p className="text-blue-800 text-xs font-semibold mb-1">💡 Hinweis zur Jobs-Seite</p>
        <p className="text-blue-700 text-xs leading-relaxed">
          Aktive Stellen erscheinen sofort unter{' '}
          <a href="/jobs" target="_blank" className="underline font-semibold hover:text-blue-900">/jobs</a>.
          Deaktivierte Stellen sind nur im Admin-Bereich sichtbar.
          Bewerber:innen können sich direkt per E-Mail auf die Stelle bewerben.
        </p>
      </div>
    </div>
  );
}