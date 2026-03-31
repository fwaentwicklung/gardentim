import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Filter, Loader2, FolderOpen, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getProjects, type Project } from '../lib/api';

const categories = ['Alle', 'Gartengestaltung', 'Gartenpflege', 'Facility Management', 'Außenanlagen', 'Winterdienst'];

const categoryColors: Record<string, string> = {
  Gartengestaltung: 'bg-emerald-100 text-emerald-800',
  Gartenpflege: 'bg-green-100 text-green-800',
  'Facility Management': 'bg-blue-100 text-blue-800',
  Außenanlagen: 'bg-teal-100 text-teal-800',
  Winterdienst: 'bg-sky-100 text-sky-800',
};

export default function Projekte() {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) => {
        console.error('Fehler beim Laden der Projekte:', err);
        setError('Projekte konnten nicht geladen werden.');
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeFilter === 'Alle' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <SEOHead
        title="Projekte & Referenzen | Gartenpflege & Facility Management Frankfurt – Garden Time"
        description="Sehen Sie unsere abgeschlossenen Projekte in Frankfurt am Main und Rhein-Main-Gebiet. Gartengestaltung, Gartenpflege, Facility Management und mehr. Garden Time GmbH Frankfurt."
        keywords="Gartengestaltung Referenzen Frankfurt, Gartenpflege Projekte Frankfurt, Facility Management Referenzen, Garden Time Portfolio Frankfurt"
      />

      {/* Hero */}
      <section className="bg-[#003f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Projekte</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
                Unsere Projekte &<br />
                <span className="text-[#bcff83]">Referenzen</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed">
                Über 1.200 abgeschlossene Projekte in Frankfurt am Main und dem gesamten
                Rhein-Main-Gebiet. Entdecken Sie unsere Arbeit – von privaten Gärten
                bis zu großen Gewerbeimmobilien.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1.200+', label: 'Abgeschlossene Projekte' },
                { value: '800+', label: 'Zufriedene Kunden' },
                { value: '15+', label: 'Jahre Erfahrung' },
                { value: '100%', label: 'Empfehlungsrate' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 rounded-2xl p-4 text-center">
                  <p className="text-[#bcff83] font-black text-2xl">{value}</p>
                  <p className="text-white/70 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#f7f8f6] min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading ? (
            <div className="text-center py-24">
              <Loader2 size={36} className="animate-spin text-[#2d746d] mx-auto" />
              <p className="text-gray-500 text-sm mt-4">Projekte werden geladen...</p>
            </div>
          ) : error ? (
            <div className="text-center py-24">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          ) : projects.length === 0 ? (
            /* Leerer Zustand – noch keine Projekte im Dashboard angelegt */
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-[#003f2e]/5 rounded-3xl flex items-center justify-center mx-auto mb-5">
                <FolderOpen size={36} className="text-[#003f2e]/30" />
              </div>
              <h2 className="text-[#003f2e] font-bold text-xl mb-2">Noch keine Projekte vorhanden</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Projekte werden im Admin-Dashboard angelegt und erscheinen dann automatisch hier.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
              >
                Jetzt Angebot anfordern
                <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <>
              {/* Filter */}
              <div className="flex items-center gap-3 mb-10 flex-wrap">
                <Filter size={16} className="text-[#2d746d]" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeFilter === cat
                        ? 'bg-[#003f2e] text-[#bcff83]'
                        : 'bg-white text-[#003f2e] border border-gray-200 hover:border-[#2d746d]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-sm">Keine Projekte in dieser Kategorie.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((project) => (
                    <div
                      key={project.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                    >
                      <div className="relative h-52 overflow-hidden bg-[#003f2e]">
                        {project.imageUrl && (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute top-3 left-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-[#003f2e] font-bold text-sm mb-1 line-clamp-2">{project.title}</h3>
                        <p className="text-[#2d746d] text-xs font-medium mb-2 flex items-center gap-1">
                          <MapPin size={11} />
                          {project.location}
                        </p>
                        {project.description && (
                          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                        )}
                        <p className="text-gray-400 text-xs mt-3">
                          {new Date(project.date + '-01').toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#003f2e] font-black text-2xl mb-3">
            Ihr Projekt könnte das nächste sein
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Fordern Sie jetzt Ihr kostenloses Angebot an und lassen Sie uns gemeinsam
            Ihr Garten- oder Facility-Projekt in Frankfurt umsetzen.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
          >
            Jetzt Angebot anfordern
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
