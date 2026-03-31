import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Briefcase, MapPin, Clock, ChevronRight, Loader2, Leaf,
  Building2, Users, ArrowRight, Send, CheckCircle, ChevronDown,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getJobs, type Job } from '../lib/api';
import { COMPANY } from '../lib/company';

const TYPE_COLORS: Record<string, string> = {
  Vollzeit: 'bg-green-100 text-green-800',
  Teilzeit: 'bg-blue-100 text-blue-800',
  Minijob: 'bg-purple-100 text-purple-800',
  Ausbildung: 'bg-amber-100 text-amber-800',
  Praktikum: 'bg-pink-100 text-pink-800',
};

const DEPT_ICONS: Record<string, React.ElementType> = {
  Garten: Leaf,
  Facility: Building2,
  Büro: Briefcase,
  Sonstiges: Users,
};

const DEPT_COLORS: Record<string, string> = {
  Garten: 'bg-green-50 text-green-700 border-green-100',
  Facility: 'bg-blue-50 text-blue-700 border-blue-100',
  Büro: 'bg-purple-50 text-purple-700 border-purple-100',
  Sonstiges: 'bg-gray-50 text-gray-700 border-gray-100',
};

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  const DeptIcon = DEPT_ICONS[job.department] ?? Briefcase;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${DEPT_COLORS[job.department] ?? 'bg-gray-50 text-gray-600 border-gray-100'}`}>
            <DeptIcon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#003f2e] font-bold text-base leading-tight mb-2 group-hover:text-[#2d746d] transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${TYPE_COLORS[job.type] ?? 'bg-gray-100 text-gray-700'}`}>
                {job.type}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-xs">
                <MapPin size={11} />
                {job.location}
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock size={11} />
                {new Date(job.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform mt-1 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expanded */}
      {open && (
        <div className="px-6 pb-6 border-t border-gray-50">
          {job.description && (
            <div className="pt-5 mb-4">
              <p className="text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-2">Stellenbeschreibung</p>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                {job.description}
              </div>
            </div>
          )}
          {job.requirements && (
            <div className="mb-5">
              <p className="text-xs font-bold text-[#003f2e] uppercase tracking-wider mb-2">Anforderungen</p>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                {job.requirements}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-50">
            <a
              href={`mailto:${COMPANY.emailJobs}?subject=Bewerbung: ${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
            >
              <Send size={14} />
              Jetzt bewerben
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#003f2e] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
            >
              Frage stellen
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('Alle');

  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch((err) => {
        console.error('Fehler beim Laden der Stellen:', err);
        setError('Stellenangebote konnten nicht geladen werden.');
      })
      .finally(() => setLoading(false));
  }, []);

  const departments = ['Alle', ...Array.from(new Set(jobs.map(j => j.department)))];
  const filtered = activeFilter === 'Alle' ? jobs : jobs.filter(j => j.department === activeFilter);

  return (
    <>
      <SEOHead
        title="Jobs & Karriere | Garden Time GmbH Frankfurt – Jetzt bewerben"
        description="Aktuelle Stellenangebote bei Garden Time GmbH Frankfurt. Wir suchen Gärtner, Hausmeister, Reinigungskräfte und mehr. Jetzt bewerben und Teil unseres Teams werden!"
        keywords="Jobs Frankfurt Garten, Gärtner Stelle Frankfurt, Hausmeister Job Frankfurt, Facility Management Job Frankfurt, Garden Time Karriere, Stellenangebote Gartenbau Frankfurt"
      />

      {/* Hero */}
      <section className="bg-[#003f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight size={12} />
            <span>Jobs & Karriere</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-[#bcff83]/20 border border-[#bcff83]/30 text-[#bcff83] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                {loading ? '...' : `${jobs.length} offene Stelle${jobs.length !== 1 ? 'n' : ''}`}
              </span>
              <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
                Werde Teil von<br />
                <span className="text-[#bcff83]">Garden Time</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Wir sind ein wachsendes Unternehmen in Frankfurt am Main und suchen engagierte
                Mitarbeiter:innen für Garten, Facility Management und Verwaltung.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Faire Bezahlung',
                  'Firmenfahrzeug möglich',
                  'Weiterbildung',
                  'Festanstellung',
                ].map((benefit) => (
                  <span key={benefit} className="flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                    <CheckCircle size={11} className="text-[#bcff83]" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Jahre am Markt' },
                { value: '30+', label: 'Mitarbeiter:innen' },
                { value: '800+', label: 'Stammkunden' },
                { value: '100%', label: 'Festverträge' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="text-[#bcff83] font-black text-2xl">{value}</p>
                  <p className="text-white/70 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stellenangebote */}
      <section className="py-16 bg-[#f7f8f6] min-h-[40vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-[#003f2e] font-black text-2xl">Offene Stellen</h2>
              {!loading && (
                <p className="text-gray-500 text-sm mt-1">
                  {filtered.length} {filtered.length === 1 ? 'Stelle' : 'Stellen'} gefunden
                </p>
              )}
            </div>
            {/* Filter */}
            {departments.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveFilter(dept)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeFilter === dept
                        ? 'bg-[#003f2e] text-[#bcff83]'
                        : 'bg-white text-[#003f2e] border border-gray-200 hover:border-[#2d746d]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <Loader2 size={32} className="animate-spin text-[#2d746d] mx-auto" />
              <p className="text-gray-500 text-sm mt-4">Stellen werden geladen…</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#003f2e]/5 rounded-3xl flex items-center justify-center mx-auto mb-5">
                <Briefcase size={32} className="text-[#003f2e]/25" />
              </div>
              <h3 className="text-[#003f2e] font-bold text-lg mb-2">
                {jobs.length === 0 ? 'Aktuell keine offenen Stellen' : 'Keine Stellen in diesem Bereich'}
              </h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
                {jobs.length === 0
                  ? 'Wir haben gerade keine offenen Stellen – schauen Sie bald wieder vorbei oder senden Sie uns eine Initiativbewerbung.'
                  : 'Versuchen Sie einen anderen Bereich oder senden Sie eine Initiativbewerbung.'}
              </p>
              <a
                href="mailto:bewerbung@gardentime-frankfurt.de?subject=Initiativbewerbung Garden Time GmbH"
                className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
              >
                <Send size={14} />
                Initiativbewerbung senden
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Initiativbewerbung */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#003f2e] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-white font-black text-xl mb-2">Kein passendes Angebot dabei?</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Senden Sie uns Ihre Initiativbewerbung – wir freuen uns über engagierte
                Bewerber:innen, auch wenn gerade keine passende Stelle ausgeschrieben ist.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:bewerbung@gardentime-frankfurt.de?subject=Initiativbewerbung"
                className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-colors"
              >
                <Send size={14} />
                Initiativ bewerben
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
              >
                Kontakt aufnehmen
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}