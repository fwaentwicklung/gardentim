import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Image, Save, RefreshCw, CheckCircle, Loader2, AlertCircle,
  ChevronDown, ChevronRight, Globe, Leaf, Building2,
  Scissors, Droplets, Palette, Wrench, Sparkles, Snowflake, Trees,
  Upload, X, Layers, Shield, TreePine, LayoutGrid, Sprout, Waves, Activity, Users,
} from 'lucide-react';
import { getCmsImages, setCmsImage } from '../lib/api';
import { DEFAULT_IMAGES } from '../lib/useCmsImages';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface CmsImageField {
  key: string;
  label: string;
  description: string;
}

interface CmsSection {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  fields: CmsImageField[];
}

const CMS_SECTIONS: CmsSection[] = [
  {
    id: 'home',
    label: 'Startseite',
    icon: Globe,
    color: 'bg-purple-50 text-purple-700',
    fields: [
      { key: 'home:hero', label: 'Hero-Bild (Hauptbild)', description: 'Großes Hintergrundbild im Kopfbereich der Startseite' },
      { key: 'home:garden', label: 'Garten-Bereich Bild', description: 'Bild im „Gartenleistungen" Abschnitt der Startseite' },
      { key: 'home:facility', label: 'Facility-Bereich Bild', description: 'Bild im „Facility Management" Abschnitt der Startseite' },
    ],
  },
  // ── Garten ──────────────────────────────────────────────────────────
  { id: 'gartenpflege', label: 'Gartenpflege', icon: Leaf, color: 'bg-green-50 text-green-700',
    fields: [{ key: 'leistung:gartenpflege:hero', label: 'Hero-Bild', description: 'Hauptbild Gartenpflege-Seite' }, { key: 'leistung:gartenpflege:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'gartengestaltung', label: 'Gartengestaltung', icon: Palette, color: 'bg-emerald-50 text-emerald-700',
    fields: [{ key: 'leistung:gartengestaltung:hero', label: 'Hero-Bild', description: 'Hauptbild Gartengestaltung-Seite' }, { key: 'leistung:gartengestaltung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'rasenanlagen', label: 'Rasenanlagen', icon: Sprout, color: 'bg-lime-50 text-lime-700',
    fields: [{ key: 'leistung:rasenanlagen:hero', label: 'Hero-Bild', description: 'Hauptbild Rasenanlagen-Seite' }, { key: 'leistung:rasenanlagen:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'bepflanzungen', label: 'Bepflanzungen', icon: Leaf, color: 'bg-green-50 text-green-700',
    fields: [{ key: 'leistung:bepflanzungen:hero', label: 'Hero-Bild', description: 'Hauptbild Bepflanzungen-Seite' }, { key: 'leistung:bepflanzungen:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'baumschnitt', label: 'Baumschnitt', icon: TreePine, color: 'bg-teal-50 text-teal-700',
    fields: [{ key: 'leistung:baumschnitt:hero', label: 'Hero-Bild', description: 'Hauptbild Baumschnitt-Seite' }, { key: 'leistung:baumschnitt:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'heckenschnitt', label: 'Heckenschnitt & Baumschnitt', icon: Scissors, color: 'bg-teal-50 text-teal-700',
    fields: [{ key: 'leistung:heckenschnitt:hero', label: 'Hero-Bild', description: 'Hauptbild Heckenschnitt-Seite' }, { key: 'leistung:heckenschnitt:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'bewaesserung', label: 'Bewässerungsanlagen', icon: Droplets, color: 'bg-blue-50 text-blue-700',
    fields: [{ key: 'leistung:bewaesserung:hero', label: 'Hero-Bild', description: 'Hauptbild Bewässerungs-Seite' }, { key: 'leistung:bewaesserung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'pflasterarbeiten', label: 'Pflasterarbeiten', icon: Layers, color: 'bg-stone-50 text-stone-700',
    fields: [{ key: 'leistung:pflasterarbeiten:hero', label: 'Hero-Bild', description: 'Hauptbild Pflasterarbeiten-Seite' }, { key: 'leistung:pflasterarbeiten:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'terrassenarbeiten', label: 'Terrassenarbeiten', icon: LayoutGrid, color: 'bg-amber-50 text-amber-700',
    fields: [{ key: 'leistung:terrassenarbeiten:hero', label: 'Hero-Bild', description: 'Hauptbild Terrassenarbeiten-Seite' }, { key: 'leistung:terrassenarbeiten:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'zaunarbeiten', label: 'Zaunarbeiten', icon: Shield, color: 'bg-gray-50 text-gray-700',
    fields: [{ key: 'leistung:zaunarbeiten:hero', label: 'Hero-Bild', description: 'Hauptbild Zaunarbeiten-Seite' }, { key: 'leistung:zaunarbeiten:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'aussenanlagen', label: 'Außenanlagenpflege', icon: Trees, color: 'bg-lime-50 text-lime-700',
    fields: [{ key: 'leistung:aussenanlagen:hero', label: 'Hero-Bild', description: 'Hauptbild Außenanlagen-Seite' }, { key: 'leistung:aussenanlagen:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  // ── Facility ─────────────────────────────────────────────────────────
  { id: 'facility', label: 'Facility Management', icon: Building2, color: 'bg-slate-50 text-slate-700',
    fields: [{ key: 'leistung:facility:hero', label: 'Hero-Bild', description: 'Hauptbild Facility-Seite' }, { key: 'leistung:facility:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'glasreinigung', label: 'Glas- & Gebäudereinigung', icon: Sparkles, color: 'bg-yellow-50 text-yellow-700',
    fields: [{ key: 'leistung:glasreinigung:hero', label: 'Hero-Bild', description: 'Hauptbild Glasreinigung-Seite' }, { key: 'leistung:glasreinigung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'hausmeister', label: 'Hausmeister & -Techniker', icon: Wrench, color: 'bg-orange-50 text-orange-700',
    fields: [{ key: 'leistung:hausmeister:hero', label: 'Hero-Bild', description: 'Hauptbild Hausmeister-Seite' }, { key: 'leistung:hausmeister:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'objektbetreuung', label: 'Objektbetreuung', icon: Building2, color: 'bg-indigo-50 text-indigo-700',
    fields: [{ key: 'leistung:objektbetreuung:hero', label: 'Hero-Bild', description: 'Hauptbild Objektbetreuung-Seite' }, { key: 'leistung:objektbetreuung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'empfangsdienste', label: 'Empfangsdienste & Sicherheit', icon: Users, color: 'bg-purple-50 text-purple-700',
    fields: [{ key: 'leistung:empfangsdienste:hero', label: 'Hero-Bild', description: 'Hauptbild Empfangsdienste-Seite' }, { key: 'leistung:empfangsdienste:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'gruenpflege', label: 'Grünpflege', icon: Leaf, color: 'bg-green-50 text-green-700',
    fields: [{ key: 'leistung:gruenpflege:hero', label: 'Hero-Bild', description: 'Hauptbild Grünpflege-Seite' }, { key: 'leistung:gruenpflege:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'graupflege', label: 'Graupflege', icon: Layers, color: 'bg-stone-50 text-stone-700',
    fields: [{ key: 'leistung:graupflege:hero', label: 'Hero-Bild', description: 'Hauptbild Graupflege-Seite' }, { key: 'leistung:graupflege:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'poolreinigung', label: 'Poolreinigung', icon: Waves, color: 'bg-cyan-50 text-cyan-700',
    fields: [{ key: 'leistung:poolreinigung:hero', label: 'Hero-Bild', description: 'Hauptbild Poolreinigung-Seite' }, { key: 'leistung:poolreinigung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'poolmessung', label: 'Poolmessung', icon: Activity, color: 'bg-blue-50 text-blue-700',
    fields: [{ key: 'leistung:poolmessung:hero', label: 'Hero-Bild', description: 'Hauptbild Poolmessung-Seite' }, { key: 'leistung:poolmessung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'reinigung', label: 'Gebäudereinigung', icon: Sparkles, color: 'bg-yellow-50 text-yellow-700',
    fields: [{ key: 'leistung:reinigung:hero', label: 'Hero-Bild', description: 'Hauptbild Gebäudereinigung-Seite' }, { key: 'leistung:reinigung:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
  { id: 'winterdienst', label: 'Winterdienst', icon: Snowflake, color: 'bg-sky-50 text-sky-700',
    fields: [{ key: 'leistung:winterdienst:hero', label: 'Hero-Bild', description: 'Hauptbild Winterdienst-Seite' }, { key: 'leistung:winterdienst:secondary', label: 'Intro-Bild', description: 'Bild im Einleitungsbereich' }] },
];

interface ImageFieldProps {
  field: CmsImageField;
  currentValue: string;
  onSave: (key: string, value: string) => Promise<void>;
}

function ImageField({ field, currentValue, onSave }: ImageFieldProps) {
  const [inputValue, setInputValue] = useState(currentValue);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(currentValue);
    setPreviewError(false);
  }, [currentValue]);

  const handleSave = async () => {
    if (!inputValue.trim()) return;
    setSaving(true);
    try {
      await onSave(field.key, inputValue.trim());
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    setInputValue(DEFAULT_IMAGES[field.key] || '');
    setPreviewError(false);
  };

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setUploadError('Nur Bilddateien erlaubt (JPG, PNG, WebP, …)');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('key', field.key);

      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-00a2191f/cms/upload`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${publicAnonKey}` },
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok || !data.url) {
        setUploadError(data.error || 'Upload fehlgeschlagen');
        return;
      }
      // URL setzen und direkt speichern
      setInputValue(data.url);
      setPreviewError(false);
      await onSave(field.key, data.url);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setUploadError(`Fehler: ${err}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const hasChanged = inputValue !== currentValue;
  const displayUrl = inputValue || DEFAULT_IMAGES[field.key] || '';

  return (
    <div className="bg-[#f7f8f6] rounded-2xl p-5 border border-gray-100">
      <div className="flex gap-5">
        {/* Vorschau */}
        <div className="shrink-0 w-32 h-24 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 relative">
          {displayUrl && !previewError ? (
            <img
              src={displayUrl}
              alt={field.label}
              className="w-full h-full object-cover"
              onError={() => setPreviewError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Image size={24} className="text-gray-300" />
            </div>
          )}
          {previewError && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50">
              <AlertCircle size={16} className="text-red-400" />
            </div>
          )}
        </div>

        {/* Eingabe */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[#003f2e] font-bold text-sm">{field.label}</p>
            {saved && (
              <span className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <CheckCircle size={12} /> Gespeichert!
              </span>
            )}
            {uploading && (
              <span className="flex items-center gap-1 text-blue-600 text-xs font-semibold">
                <Loader2 size={12} className="animate-spin" /> Wird hochgeladen…
              </span>
            )}
            {hasChanged && !saved && !uploading && (
              <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-1.5 py-0.5 rounded">
                Geändert
              </span>
            )}
          </div>
          <p className="text-gray-400 text-xs mb-3">{field.description}</p>

          {/* URL-Zeile */}
          <div className="flex gap-2 mb-2">
            <input
              type="url"
              value={inputValue}
              onChange={(e) => { setInputValue(e.target.value); setPreviewError(false); }}
              placeholder="https://images.unsplash.com/..."
              className="flex-1 min-w-0 px-3 py-2 rounded-xl border border-gray-200 bg-white text-xs text-[#003f2e] outline-none focus:border-[#2d746d] focus:ring-2 focus:ring-[#2d746d]/10"
            />
            <button
              onClick={handleSave}
              disabled={saving || !inputValue.trim() || !hasChanged}
              className="shrink-0 flex items-center gap-1.5 bg-[#003f2e] text-[#bcff83] px-3 py-2 rounded-xl text-xs font-bold hover:bg-[#2d746d] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
              {saving ? 'Speichern…' : 'Speichern'}
            </button>
            <button
              onClick={handleReset}
              title="Standard-Bild wiederherstellen"
              className="shrink-0 px-2.5 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 text-xs transition-colors"
            >
              <RefreshCw size={12} />
            </button>
          </div>

          {/* Upload-Bereich */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-dashed transition-colors cursor-pointer ${
              dragOver
                ? 'border-[#2d746d] bg-[#2d746d]/5'
                : 'border-gray-200 bg-white hover:border-[#2d746d]/50 hover:bg-[#2d746d]/5'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            {uploading ? (
              <Loader2 size={13} className="text-[#2d746d] animate-spin shrink-0" />
            ) : (
              <Upload size={13} className="text-[#2d746d] shrink-0" />
            )}
            <span className="text-xs text-gray-500">
              {uploading
                ? 'Bild wird hochgeladen…'
                : 'Eigenes Bild hochladen – klicken oder hierher ziehen'}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {uploadError && (
            <div className="flex items-center gap-1.5 mt-1.5 text-red-500 text-xs">
              <X size={11} />
              {uploadError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminCmsTab() {
  const [cmsData, setCmsData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['home']));

  const loadCms = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getCmsImages();
      setCmsData(data);
    } catch (err) {
      console.error('Fehler beim Laden der CMS-Daten:', err);
      setError('CMS-Daten konnten nicht geladen werden.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCms();
  }, [loadCms]);

  const handleSave = async (key: string, value: string) => {
    await setCmsImage(key, value);
    setCmsData((prev) => ({ ...prev, [key]: value }));
    // Cache leeren damit alle Seiten sofort neu laden
    if (typeof window !== 'undefined') {
      // Trigger a custom event to notify useCmsImages to refresh
      window.dispatchEvent(new CustomEvent('cms-updated'));
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getFieldValue = (key: string) => cmsData[key] || DEFAULT_IMAGES[key] || '';

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={28} className="animate-spin text-[#2d746d]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <AlertCircle size={28} className="mx-auto mb-2 text-red-400" />
        <p className="text-red-500 text-sm">{error}</p>
        <button onClick={loadCms} className="mt-2 text-[#2d746d] text-sm underline">Erneut versuchen</button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Info-Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
        <Image size={18} className="text-blue-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-800 font-semibold text-sm">Bilder per URL oder Upload</p>
          <p className="text-blue-700 text-xs mt-0.5">
            Sie können eine Bild-URL (z.B. von Unsplash) einfügen <strong>oder</strong> direkt eine eigene Datei hochladen
            (JPG, PNG, WebP). Hochgeladene Bilder werden dauerhaft gespeichert und sofort auf der Website angezeigt.
          </p>
        </div>
      </div>

      {/* Sektionen */}
      {CMS_SECTIONS.map((section) => {
        const isOpen = openSections.has(section.id);
        return (
          <div key={section.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#f7f8f6] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${section.color}`}>
                  <section.icon size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[#003f2e] font-bold text-sm">{section.label}</p>
                  <p className="text-gray-400 text-xs">{section.fields.length} Bild{section.fields.length > 1 ? 'er' : ''} konfigurierbar</p>
                </div>
              </div>
              {isOpen ? (
                <ChevronDown size={16} className="text-gray-400" />
              ) : (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </button>

            {isOpen && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-50">
                <div className="pt-4" />
                {section.fields.map((field) => (
                  <ImageField
                    key={field.key}
                    field={field}
                    currentValue={getFieldValue(field.key)}
                    onSave={handleSave}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}