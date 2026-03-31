import { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import { createLead } from '../lib/api';
import { COMPANY } from '../lib/company';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  servicePreset?: string;
  variant?: 'light' | 'dark';
}

const services = [
  // Garten
  'Gartenpflege & Rasenmähen',
  'Gartengestaltung & Neuanlage',
  'Rasenanlagen',
  'Bepflanzungen',
  'Baumschnitt',
  'Heckenschnitt & Baumschnitt',
  'Bewässerungsanlagen',
  'Pflasterarbeiten',
  'Terrassenarbeiten',
  'Zaunarbeiten',
  'Außenanlagenpflege',
  // Facility
  'Facility Management',
  'Glas- & Gebäudereinigung',
  'Hausmeister & -Techniker',
  'Objektbetreuung',
  'Empfangsdienste & Sicherheit',
  'Grünpflege',
  'Graupflege',
  'Poolreinigung',
  'Poolmessung',
  'Gebäudereinigung',
  'Winterdienst',
  'Sonstiges',
];

export default function LeadForm({ title, subtitle, servicePreset, variant = 'light' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: servicePreset || '',
    message: '',
    dsgvo: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const isDark = variant === 'dark';

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name ist erforderlich';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Gültige E-Mail-Adresse erforderlich';
    if (!formData.phone.trim()) e.phone = 'Telefonnummer ist erforderlich';
    if (!formData.service) e.service = 'Bitte wählen Sie eine Leistung';
    if (!formData.dsgvo) e.dsgvo = 'Zustimmung zur Datenschutzerklärung erforderlich';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await createLead(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Fehler beim Senden der Anfrage:', err);
      setServerError('Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:ring-red-200'
        : isDark
        ? 'border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[#bcff83] focus:ring-[#bcff83]/20'
        : 'border-gray-200 bg-white text-[#003f2e] placeholder-gray-400 focus:border-[#2d746d] focus:ring-[#2d746d]/10'
    }`;

  const labelClass = `block text-xs font-bold uppercase tracking-wider mb-2 ${
    isDark ? 'text-[#bcff83]' : 'text-[#003f2e]'
  }`;

  if (submitted) {
    return (
      <div className={`rounded-2xl p-10 text-center ${isDark ? 'bg-white/10' : 'bg-white shadow-lg border border-gray-100'}`}>
        <div className="w-16 h-16 bg-[#bcff83] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#003f2e]" />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#003f2e]'}`}>
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-[#98c4be]' : 'text-gray-600'}`}>
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
          Sie können uns auch direkt unter{' '}
          <a href={COMPANY.phoneTel} className="text-[#2d746d] font-semibold">{COMPANY.phonePretty}</a> erreichen.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: '', message: '', dsgvo: false });
            setErrors({});
          }}
          className="bg-[#bcff83] text-[#003f2e] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#a8f060] transition-colors"
        >
          Neue Anfrage
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-8 ${isDark ? '' : 'bg-white shadow-lg border border-gray-100'}`}>
      {title && (
        <div className="mb-6">
          <h2 className={`font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-[#003f2e]'}`}>{title}</h2>
          {subtitle && <p className={`text-sm leading-relaxed ${isDark ? 'text-[#98c4be]' : 'text-gray-600'}`}>{subtitle}</p>}
        </div>
      )}

      {serverError && (
        <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className={labelClass}>Ihr Name *</label>
            <input
              type="text"
              placeholder="Max Mustermann"
              value={formData.name}
              onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
              className={inputClass('name')}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
          </div>
          <div>
            <label className={labelClass}>E-Mail *</label>
            <input
              type="email"
              placeholder="ihre@email.de"
              value={formData.email}
              onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
              className={inputClass('email')}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
          </div>
          <div>
            <label className={labelClass}>Telefon *</label>
            <input
              type="tel"
              placeholder="+49 69 ..."
              value={formData.phone}
              onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
              className={inputClass('phone')}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
          </div>
          <div>
            <label className={labelClass}>Gewünschte Leistung *</label>
            <select
              value={formData.service}
              onChange={(e) => { setFormData({ ...formData, service: e.target.value }); setErrors({ ...errors, service: '' }); }}
              className={inputClass('service')}
            >
              <option value="">Bitte wählen...</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
          </div>
        </div>

        <div className="mb-5">
          <label className={labelClass}>Ihre Nachricht</label>
          <textarea
            rows={4}
            placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Frage..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass('message')} resize-none`}
          />
        </div>

        <div className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.dsgvo}
              onChange={(e) => { setFormData({ ...formData, dsgvo: e.target.checked }); setErrors({ ...errors, dsgvo: '' }); }}
              className="mt-0.5 w-4 h-4 accent-[#003f2e] shrink-0"
            />
            <span className={`text-xs leading-relaxed ${isDark ? 'text-[#98c4be]' : 'text-gray-600'}`}>
              Ich habe die{' '}
              <Link to="/datenschutz" className="text-[#2d746d] underline hover:no-underline font-medium">
                Datenschutzerklärung
              </Link>{' '}
              gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zur Bearbeitung
              meiner Anfrage zu. *
            </span>
          </label>
          {errors.dsgvo && <p className="text-red-500 text-xs mt-1 ml-7 flex items-center gap-1"><AlertCircle size={12} />{errors.dsgvo}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#003f2e] text-[#bcff83] py-3.5 rounded-lg font-bold text-sm hover:bg-[#2d746d] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wird gesendet...
            </span>
          ) : (
            <>
              <Send size={16} />
              Kostenlose Anfrage senden
            </>
          )}
        </button>

        <p className={`text-center text-xs mt-3 ${isDark ? 'text-[#98c4be]' : 'text-gray-400'}`}>
          * Pflichtfelder. Wir antworten innerhalb von 24 Stunden.
        </p>
      </form>
    </div>
  );
}