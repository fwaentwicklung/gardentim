import { COMPANY } from '../lib/company';
import { Link } from 'react-router';
import {
  Building2, CheckCircle, ArrowRight, Wrench, Snowflake,
  Shield, Zap, ClipboardList, Users,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadForm from '../components/LeadForm';

const heroImg = 'https://images.unsplash.com/photo-1769788161278-8dc624a2d537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1hbmFnZW1lbnQlMjBidWlsZGluZyUyMG1haW50ZW5hbmNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDQ1NDAxNnww&ixlib=rb-4.1.0&q=80&w=1080';
const buildingImg = 'https://images.unsplash.com/photo-1681366099753-f904192f17bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMHByb3BlcnR5JTIwbWFuYWdlbWVudCUyMHNlY3VyaXR5fGVufDF8fHx8MTc3NDQ1NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080';
const cleaningImg = 'https://images.unsplash.com/photo-1762008310482-ac087b26c1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvciUyMGNsZWFuaW5nJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc0NDU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const winterImg = 'https://images.unsplash.com/photo-1774412988775-32c6ad4773e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzZXJ2aWNlJTIwc25vdyUyMHJlbW92YWwlMjBwYXJraW5nJTIwbG90fGVufDF8fHx8MTc3NDQ1NDAyMnww&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    icon: Wrench,
    title: 'Hausmeisterservice Frankfurt',
    desc: 'Professioneller Hausmeisterservice für Wohnungen, Bürogebäude und Gewerbeobjekte in Frankfurt. Wir übernehmen alle anfallenden Aufgaben rund um Ihre Immobilie.',
    features: [
      'Kleinreparaturen & Instandhaltung',
      'Überwachung der Gebäudetechnik',
      'Mülltonnenpflege & Entsorgung',
      'Schlüsseldienst & Zugangskontrolle',
      'Protokollierung & Dokumentation',
      'Notfalldienst 24/7 verfügbar',
    ],
    img: buildingImg,
    badge: 'Hausmeisterservice',
  },
  {
    icon: Building2,
    title: 'Gebäudereinigung Frankfurt',
    desc: 'Professionelle Gebäudereinigung für Büros, Treppenhäuser, Tiefgaragen und Außenanlagen. Zuverlässig, gründlich und nach höchsten Hygienestandards.',
    features: [
      'Unterhaltsreinigung & Grundreinigung',
      'Treppenhausreinigung',
      'Fenster- & Glasreinigung',
      'Tiefgaragenreinigung',
      'Sonderreinigungen',
      'Zertifizierte Reinigungsmittel',
    ],
    img: cleaningImg,
    badge: 'Gebäudereinigung',
  },
  {
    icon: Snowflake,
    title: 'Winterdienst Frankfurt',
    desc: 'Zuverlässiger Winterdienst für Gehwege, Parkplätze und Zufahrten in Frankfurt. Wir stellen Ihre Verkehrssicherungspflicht sicher – rund um die Uhr.',
    features: [
      'Räum- & Streudienst nach Plan',
      'Salzlager & eigene Streugeräte',
      'Reaktionszeit unter 60 Minuten',
      'Dokumentation aller Einsätze',
      'Haftungsübernahme',
      'Saison- & Jahresverträge',
    ],
    img: winterImg,
    badge: 'Winterdienst',
  },
  {
    icon: Shield,
    title: 'Außenanlagenpflege Gewerbe',
    desc: 'Professionelle Pflege der Außenanlagen Ihrer Gewerbeimmobilie. Wir sorgen für ein gepflegtes Erscheinungsbild Ihres Unternehmensstandorts in Frankfurt.',
    features: [
      'Grünflächenpflege & Rasenmähen',
      'Heckenschnitt & Baumschnitt',
      'Parkplatz- & Gehwegreinigung',
      'Saisonale Bepflanzung',
      'Blumenkübel & Terrassen',
      'Laubentfernung & Entsorgung',
    ],
    img: heroImg,
    badge: 'Außenanlagen',
  },
  {
    icon: Zap,
    title: 'Technisches Gebäudemanagement',
    desc: 'Systematische Betreuung der technischen Anlagen Ihres Gebäudes. Wartung, Inspektion und Instandsetzung nach gesetzlichen Vorgaben.',
    features: [
      'Heizungsanlage & Klimatechnik',
      'Aufzugswartung (Koordination)',
      'Elektroanlagen-Prüfung',
      'Brandschutzprüfungen',
      'Verbrauchserfassung',
      'Digitale Dokumentation',
    ],
    img: buildingImg,
    badge: 'TGM',
  },
  {
    icon: ClipboardList,
    title: 'Infrastrukturelles Facility Management',
    desc: 'Umfassendes infrastrukturelles Gebäudemanagement – alles aus einer Hand. Ein Ansprechpartner für alle Leistungen rund um Ihre Immobilie.',
    features: [
      'Empfangs- & Sicherheitsdienste',
      'Catering-Koordination',
      'Poststelle & Logistik',
      'Parkraummanagement',
      'Umzugsmanagement',
      'Reporting & Controlling',
    ],
    img: cleaningImg,
    badge: 'IFM',
  },
];

const clientTypes = [
  { icon: Building2, label: 'Bürogebäude & Gewerbe' },
  { icon: Users, label: 'Wohnungsbaugesellschaften' },
  { icon: Shield, label: 'Einkaufszentren & Retail' },
  { icon: Zap, label: 'Industrie & Logistik' },
  { icon: ClipboardList, label: 'Kliniken & Bildung' },
  { icon: Wrench, label: 'Hotels & Gastronomie' },
];

export default function FacilityManagement() {
  return (
    <>
      <SEOHead
        title="Facility Management Frankfurt | Hausmeisterservice & Gebäudereinigung – Garden Time"
        description="Professionelles Facility Management in Frankfurt am Main. ✓ Hausmeisterservice ✓ Gebäudereinigung ✓ Winterdienst ✓ Außenanlagenpflege ✓ Technisches Gebäudemanagement. Jetzt Angebot anfordern!"
        keywords="Facility Management Frankfurt, Hausmeisterservice Frankfurt, Gebäudereinigung Frankfurt, Winterdienst Frankfurt, Außenanlagenpflege Frankfurt, Gebäudemanagement Frankfurt am Main, Facility Service Rhein-Main"
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Facility Management Frankfurt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003f2e]/90 via-[#003f2e]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-3">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Facility Management</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#bcff83]/20 border border-[#bcff83]/40 text-[#bcff83] px-3 py-1 rounded-full text-xs font-bold mb-4">
            <Building2 size={11} />
            Facility Management Frankfurt
          </div>
          <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1 }}>
            Facility Management &<br />
            <span className="text-[#bcff83]">Gebäudeservices Frankfurt</span>
          </h1>
          <p className="text-white/80 max-w-xl text-base leading-relaxed mb-6">
            Professionelles, ganzheitliches Facility Management für Gewerbe- und
            Wohnimmobilien in Frankfurt am Main und dem Rhein-Main-Gebiet.
            Alles aus einer Hand – ein Ansprechpartner für alles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-colors shadow-xl"
            >
              Angebot anfordern
              <ArrowRight size={15} />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/25 transition-all"
            >
              Direktberatung: {COMPANY.phonePretty}
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏢', title: '150+ Objekte', desc: 'Betreute Immobilien in Frankfurt' },
              { icon: '⚡', title: '24/7 Notfall', desc: 'Rund-um-die-Uhr-Service' },
              { icon: '📋', title: 'Ein Ansprechpartner', desc: 'Alles aus einer Hand' },
              { icon: '✅', title: 'ISO zertifiziert', desc: 'Qualitätsmanagement nach Norm' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-5 bg-[#f7f8f6] rounded-2xl">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-[#003f2e] font-bold text-sm">{title}</p>
                <p className="text-gray-500 text-xs mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#f7f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Leistungsübersicht</span>
            <h2 className="text-[#003f2e] mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
              Unsere Facility-Management-Leistungen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Wir übernehmen alle Aufgaben rund um Ihre Immobilie in Frankfurt –
              von der täglichen Reinigung bis zur technischen Gebäudeverwaltung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003f2e]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#bcff83] text-[#003f2e] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <service.icon size={11} />
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#003f2e] font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle size={12} className="text-[#2d746d] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-1 text-[#2d746d] font-bold text-sm hover:text-[#003f2e] transition-colors"
                  >
                    Mehr erfahren <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-[#003f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#bcff83] text-xs font-bold uppercase tracking-widest">Unsere Kunden</span>
            <h2 className="text-white font-bold text-2xl mt-2">Für wen wir arbeiten</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientTypes.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-[#bcff83]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-[#bcff83]" />
                </div>
                <p className="text-white text-xs font-semibold leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Warum Garden Time</span>
              <h2 className="text-[#003f2e] mt-3 mb-6 font-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
                Ihr verlässlicher Facility-<br />Partner in Frankfurt
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Ganzheitlicher Ansatz',
                    desc: 'Ein Vertrag, ein Ansprechpartner, alle Leistungen. Wir koordinieren alle Gewerke und sorgen für einen reibungslosen Betrieb.',
                  },
                  {
                    title: 'Lokalerfahrung im Rhein-Main-Gebiet',
                    desc: 'Seit über 15 Jahren kennen wir Frankfurt und die Anforderungen lokaler Immobilienmärkte – von der Innenstadt bis zum Rhein-Main-Gebiet.',
                  },
                  {
                    title: 'Digitale Dokumentation',
                    desc: 'Alle Leistungen werden digital erfasst und Sie erhalten monatliche Berichte über alle erbrachten Tätigkeiten.',
                  },
                  {
                    title: 'Haftpflichtversichert',
                    desc: 'Unsere Betriebshaftpflichtversicherung schützt Sie als Auftraggeber vor unerwarteten Kosten.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#bcff83] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-[#003f2e]" />
                    </div>
                    <div>
                      <p className="text-[#003f2e] font-bold text-sm mb-1">{title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={buildingImg}
                alt="Facility Management Frankfurt professionell"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Facility Management Frankfurt</span>
              <h2 className="text-[#003f2e] mt-3 mb-4 font-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
                Jetzt Facility-Management-<br />Angebot anfordern
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Teilen Sie uns Ihre Anforderungen mit und wir erstellen Ihnen ein
                maßgeschneidertes Konzept für Ihr Objekt in Frankfurt.
              </p>
              <div className="space-y-3">
                {[
                  '📊 Kostenlose Erstanalyse Ihres Objekts',
                  '📝 Individuelles Leistungsverzeichnis',
                  '💰 Transparente, leistungsgerechte Preise',
                  '🤝 Langfristige Partnerschaft auf Augenhöhe',
                ].map((item) => (
                  <p key={item} className="text-gray-700 text-sm flex items-start gap-2">{item}</p>
                ))}
              </div>
            </div>
            <LeadForm
              title="Facility-Anfrage"
              subtitle="Beschreiben Sie Ihr Objekt und Ihre Anforderungen."
              servicePreset="Facility Management"
            />
          </div>
        </div>
      </section>
    </>
  );
}