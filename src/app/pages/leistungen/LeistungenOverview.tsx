import { Link } from 'react-router';
import {
  Leaf, Palette, Scissors, Droplets, Building2, Wrench, Sparkles, Snowflake, Trees,
  Layers, Shield, TreePine, LayoutGrid, Sprout, Waves, Activity, Users, ArrowRight, ChevronRight,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const gartenServices = [
  { icon: Leaf, title: 'Gartenpflege & Rasenmähen', description: 'Regelmäßige Rasenpflege, Unkrautbekämpfung und Grünschnitt.', path: '/leistungen/gartenpflege', badge: 'Beliebt', color: 'bg-green-50 text-green-700' },
  { icon: Palette, title: 'Gartengestaltung', description: 'Von der Planung bis zur Fertigstellung – individuelle Gartengestaltung und Neuanlagen.', path: '/leistungen/gartengestaltung', badge: '', color: 'bg-emerald-50 text-emerald-700' },
  { icon: Sprout, title: 'Rasenanlagen', description: 'Rollrasen, Rasensaat, Rasenrenovierung – professionelle Neuanlage und Sanierung.', path: '/leistungen/rasenanlagen', badge: '', color: 'bg-lime-50 text-lime-700' },
  { icon: Leaf, title: 'Bepflanzungen', description: 'Beet- und Staudenpflanzungen, Gehölze, saisonale Wechselbepflanzung.', path: '/leistungen/bepflanzungen', badge: '', color: 'bg-green-50 text-green-700' },
  { icon: TreePine, title: 'Baumschnitt', description: 'Kronenpflege, Totholzentfernung, Obstbaumschnitt – fachgerecht nach ZTV.', path: '/leistungen/baumschnitt', badge: '', color: 'bg-teal-50 text-teal-700' },
  { icon: Scissors, title: 'Heckenschnitt & Baumschnitt', description: 'Präziser Formschnitt aller Heckenarten und fachgerechter Baumschnitt.', path: '/leistungen/heckenschnitt-baumschnitt', badge: '', color: 'bg-teal-50 text-teal-700' },
  { icon: Droplets, title: 'Bewässerungsanlagen', description: 'Automatische Bewässerungssysteme – Planung, Installation und Smart-Home-Integration.', path: '/leistungen/bewaesserungsanlagen', badge: 'Neu', color: 'bg-blue-50 text-blue-700' },
  { icon: Layers, title: 'Pflasterarbeiten', description: 'Einfahrten, Wege, Terrassen – Naturstein- und Betonsteinpflaster fachgerecht verlegt.', path: '/leistungen/pflasterarbeiten', badge: '', color: 'bg-stone-50 text-stone-700' },
  { icon: LayoutGrid, title: 'Terrassenarbeiten', description: 'Terrassenbau aus Naturstein, WPC, Holz oder Betonplatten – komplett aus einer Hand.', path: '/leistungen/terrassenarbeiten', badge: '', color: 'bg-amber-50 text-amber-700' },
  { icon: Shield, title: 'Zaunarbeiten', description: 'Zaunbau und -montage – Holz, Metall, WPC, Doppelstabmatte und Einfahrtstore.', path: '/leistungen/zaunarbeiten', badge: '', color: 'bg-gray-50 text-gray-700' },
  { icon: Trees, title: 'Außenanlagenpflege', description: 'Ganzjährige Pflege von Grünflächen und Außenanlagen für Gewerbe & Wohnanlagen.', path: '/leistungen/aussenanlagen', badge: '', color: 'bg-lime-50 text-lime-700' },
];

const facilityServices = [
  { icon: Building2, title: 'Facility Management', description: 'Ganzheitliches infrastrukturelles Facility Management für Gewerbeobjekte.', path: '/leistungen/facility-management', badge: '', color: 'bg-slate-50 text-slate-700' },
  { icon: Sparkles, title: 'Glas- & Gebäudereinigung', description: 'Streifenfreie Glasreinigung, Fassaden- und Unterhaltsreinigung für alle Objektarten.', path: '/leistungen/glasreinigung', badge: 'Neu', color: 'bg-yellow-50 text-yellow-700' },
  { icon: Wrench, title: 'Hausmeister & -Techniker', description: 'Zuverlässiger Hausmeisterservice für Wohnanlagen und Bürogebäude – mit Notfalldienst.', path: '/leistungen/hausmeisterservice', badge: '', color: 'bg-orange-50 text-orange-700' },
  { icon: Building2, title: 'Objektbetreuung', description: 'Ganzheitliche Immobilienbetreuung – Begehungen, Mängelmanagement, Dienstleisterkoordination.', path: '/leistungen/objektbetreuung', badge: 'Neu', color: 'bg-indigo-50 text-indigo-700' },
  { icon: Users, title: 'Empfangsdienste & Sicherheit', description: 'Professioneller Empfangs- und Sicherheitsdienst für Büros, Hotels und Gewerbeobjekte.', path: '/leistungen/empfangsdienste', badge: 'Neu', color: 'bg-purple-50 text-purple-700' },
  { icon: Leaf, title: 'Grünpflege', description: 'Ganzjährige Pflege von Grünanlagen für Gewerbe- und Wohnimmobilien per Jahresvertrag.', path: '/leistungen/gruenpflege', badge: 'Neu', color: 'bg-green-50 text-green-700' },
  { icon: Layers, title: 'Graupflege', description: 'Reinigung und Pflege von Hartflächen – Pflasterwege, Parkplätze und Höfe.', path: '/leistungen/graupflege', badge: 'Neu', color: 'bg-stone-50 text-stone-700' },
  { icon: Waves, title: 'Poolreinigung', description: 'Wöchentliche Poolpflege, Saisonöffnung/-schließung und Notfallreinigung bei Algenbefall.', path: '/leistungen/poolreinigung', badge: 'Neu', color: 'bg-cyan-50 text-cyan-700' },
  { icon: Activity, title: 'Poolmessung', description: 'Professionelle Wasseranalyse, pH-Messung und Chemikaliendosierung für optimale Wasserchemie.', path: '/leistungen/poolmessung', badge: 'Neu', color: 'bg-blue-50 text-blue-700' },
  { icon: Sparkles, title: 'Gebäudereinigung', description: 'Unterhaltsreinigung, Büroreinigung, Glasreinigung und Sonderreinigungen – hygienisch & diskret.', path: '/leistungen/gebaeudereinigung', badge: '', color: 'bg-yellow-50 text-yellow-700' },
  { icon: Snowflake, title: 'Winterdienst', description: 'Schneeräumung und Streudienst mit GPS-Dokumentation – rechtssichere Verkehrssicherungspflicht.', path: '/leistungen/winterdienst', badge: '', color: 'bg-sky-50 text-sky-700' },
];

function ServiceCard({ service }: { service: typeof gartenServices[0] }) {
  return (
    <Link
      to={service.path}
      className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.color}`}>
          <service.icon size={20} />
        </div>
        {service.badge && (
          <span className="bg-[#bcff83] text-[#003f2e] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            {service.badge}
          </span>
        )}
      </div>
      <h3 className="text-[#003f2e] font-bold text-base mb-2 leading-tight">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
      <div className="flex items-center gap-1.5 text-[#2d746d] font-semibold text-xs mt-4 group-hover:gap-2.5 transition-all">
        Mehr erfahren
        <ArrowRight size={13} />
      </div>
    </Link>
  );
}

export default function LeistungenOverview() {
  return (
    <>
      <SEOHead
        title="Alle Leistungen | Gartenpflege & Facility Management Frankfurt – Garden Time GmbH"
        description="Alle Leistungen von Garden Time GmbH Frankfurt: Gartenpflege, Gartengestaltung, Baumschnitt, Pflasterarbeiten, Terrassenarbeiten, Zaunarbeiten, Rasenanlagen, Facility Management, Glasreinigung, Poolreinigung & mehr."
        keywords="Gartenservice Frankfurt Leistungen, Facility Management Frankfurt, Gartenpflege Übersicht Frankfurt, Garden Time Leistungen, Pflasterarbeiten Frankfurt, Poolreinigung Frankfurt"
      />

      <div className="bg-[#f7f8f6] border-b border-gray-200 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#2d746d] transition-colors font-medium">Startseite</Link>
            <ChevronRight size={12} />
            <span className="text-[#003f2e] font-semibold">Leistungen</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#003f2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#bcff83]/20 border border-[#bcff83]/30 text-[#bcff83] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            22 Leistungen
          </span>
          <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
            Alle unsere Leistungen<br />
            <span className="text-[#bcff83]">auf einen Blick</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            Von der Gartenpflege bis zum Poolservice – Garden Time bietet Ihnen ein vollständiges
            Leistungsportfolio für Privatkunden und Gewerbe im Rhein-Main-Gebiet.
          </p>
        </div>
      </section>

      {/* Garten-Leistungen */}
      <section className="py-16 bg-[#f7f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#003f2e] rounded-lg flex items-center justify-center">
                <Leaf size={16} className="text-[#bcff83]" />
              </div>
              <span className="text-xs font-black text-[#003f2e] uppercase tracking-widest">Garten & Außenanlagen</span>
            </div>
            <h2 className="text-[#003f2e] font-black text-2xl">Gartenleistungen</h2>
            <p className="text-gray-500 text-sm mt-1">{gartenServices.length} Leistungen</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {gartenServices.map((service) => (
              <ServiceCard key={service.path} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Facility-Leistungen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#003f2e] rounded-lg flex items-center justify-center">
                <Building2 size={16} className="text-[#bcff83]" />
              </div>
              <span className="text-xs font-black text-[#003f2e] uppercase tracking-widest">Facility Management</span>
            </div>
            <h2 className="text-[#003f2e] font-black text-2xl">Facility-Leistungen</h2>
            <p className="text-gray-500 text-sm mt-1">{facilityServices.length} Leistungen</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {facilityServices.map((service) => (
              <ServiceCard key={service.path} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003f2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-2xl mb-3">
            Nicht sicher, welche Leistung Sie brauchen?
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Kontaktieren Sie uns – wir beraten Sie kostenlos und erstellen ein maßgeschneidertes Angebot.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-all"
          >
            Kostenlos beraten lassen
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
