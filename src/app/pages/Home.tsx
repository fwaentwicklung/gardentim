import { COMPANY } from '../lib/company';
import { Link } from 'react-router';
import {
  Leaf, Building2, CheckCircle, ArrowRight, Star, ChevronDown,
  Phone, Mail, Award, Users, Briefcase, Shield, MapPin,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadForm from '../components/LeadForm';
import { useState, useEffect } from 'react';
import { useCmsImages } from '../lib/useCmsImages';
import { getProjects, type Project } from '../lib/api';

const stats = [
  { value: '15+', label: 'Jahre Erfahrung', icon: Award },
  { value: '800+', label: 'Zufriedene Kunden', icon: Users },
  { value: '1.200+', label: 'Abgeschlossene Projekte', icon: Briefcase },
  { value: '100%', label: 'DSGVO-konform', icon: Shield },
];

const faqs = [
  {
    q: 'In welchen Gebieten sind Sie tätig?',
    a: 'Garden Time ist in Frankfurt am Main und dem gesamten Rhein-Main-Gebiet tätig. Dazu gehören Städte wie Bad Homburg, Eschborn, Offenbach, Hanau, Wiesbaden, Darmstadt und der gesamte Hochtaunuskreis.',
  },
  {
    q: 'Wie erhalte ich ein Angebot?',
    a: 'Nutzen Sie einfach unser Kontaktformular oder rufen Sie uns an. Wir vereinbaren einen kostenlosen Besichtigungstermin und erstellen Ihnen innerhalb von 48 Stunden ein unverbindliches Angebot.',
  },
  {
    q: 'Bieten Sie auch Pflegeverträge an?',
    a: 'Ja! Wir bieten sowohl einmalige Leistungen als auch Dauerpflegeverträge an. Besonders für Gewerbekunden und Hausverwaltungen empfehlen wir unsere Jahresverträge mit festgelegten Leistungen.',
  },
  {
    q: 'Sind Ihre Mitarbeiter versichert und qualifiziert?',
    a: 'Alle unsere Mitarbeiter sind vollständig sozialversicherungspflichtig beschäftigt, regelmäßig geschult und verfügen über die notwendigen Fachzertifizierungen. Wir sind Mitglied im Bundesverband Garten-, Landschafts- und Sportplatzbau (BGL).',
  },
  {
    q: 'Was kostet ein Gartenpflegedienst?',
    a: 'Die Kosten hängen von der Größe des Gartens, dem Umfang der Leistungen und der Häufigkeit ab. Für eine Regelpflege beginnen unsere Preise bei 89 €/Einsatz. Gerne erstellen wir Ihnen ein maßgeschneidertes Angebot nach einem Besichtigungstermin.',
  },
];

// Bild-Slot: zeigt nur das echte Bild wenn URL vorhanden – kein Flash, kein Fallback
function CmsImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (!src) return null;
  return <img src={src} alt={alt} className={className} />;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { getImage, loading: cmsLoading } = useCmsImages();
  const [projects, setProjects] = useState<Project[]>([]);

  const heroImg = getImage('home:hero');
  const gardenImg = getImage('home:garden');
  const facilityImg = getImage('home:facility');

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data.slice(0, 3)))
      .catch(() => setProjects([]));
  }, []);

  return (
    <>
      <SEOHead
        title="Garden Time Frankfurt | Gartenpflege & Facility Management – Professionell & Zuverlässig"
        description="Garden Time GmbH – Ihr führender Experte für Gartenpflege, Gartengestaltung und Facility Management in Frankfurt am Main & Rhein-Main-Gebiet. ✓ 15+ Jahre Erfahrung ✓ 800+ zufriedene Kunden ✓ Kostenloses Angebot"
        keywords="Gartenpflege Frankfurt, Gartengestaltung Frankfurt, Facility Management Frankfurt, Gartenservice Frankfurt am Main, Hausmeisterservice Frankfurt, Rasenpflege Frankfurt, Außenanlagenpflege Frankfurt"
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#003f2e]">
        <div className="absolute inset-0">
          {/* Hero-Bild: immer rendern + höchste Priorität für optimalen LCP */}
          {heroImg && (
            <img
              src={heroImg}
              alt="Professionelle Gartenpflege Frankfurt"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003f2e]/90 via-[#003f2e]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#bcff83]/20 border border-[#bcff83]/40 text-[#bcff83] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Leaf size={12} />
              Frankfurt & Rhein-Main-Gebiet
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1 }}>
              Ihr Experte für<br />
              <span className="text-[#bcff83]">Gartenpflege &</span><br />
              Facility Management
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Professionelle Gartenpflege, Gartengestaltung und umfassendes Facility Management
              für Privatkunden und Gewerbe in Frankfurt am Main. Zuverlässig, seriös und
              DSGVO-konform seit über 15 Jahren.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/kontakt"
                className="bg-[#bcff83] text-[#003f2e] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Kostenloses Angebot anfordern
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-2 bg-white text-[#003f2e] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <Phone size={16} />
                {COMPANY.phonePretty}
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {['Kostenlose Beratung', 'Schnelle Umsetzung', 'Feste Ansprechpartner'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle size={15} className="text-[#bcff83]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#003f2e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 bg-[#bcff83]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#bcff83]" />
                </div>
                <p className="text-[#bcff83] font-black" style={{ fontSize: '2rem', lineHeight: 1.1 }}>{value}</p>
                <p className="text-white/70 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#f7f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Unsere Leistungen</span>
            <h2 className="text-[#003f2e] mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2 }}>
              Ganzheitliche Lösungen für<br />Garten & Gebäude
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Von der liebevollen Gartenpflege bis zum professionellen Facility Management –
              Garden Time bietet Ihnen alles aus einer Hand in Frankfurt und Umgebung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Garden Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-[#003f2e]">
                {!cmsLoading && gardenImg && (
                  <img
                    src={gardenImg}
                    alt="Gartengestaltung und Gartenpflege Frankfurt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003f2e]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-[#bcff83] text-[#003f2e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Leaf size={12} />
                    Gartenpflege
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[#003f2e] font-bold text-2xl mb-3">Gartenpflege &<br />Gartengestaltung</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Professionelle Gartenpflege für Privathaushalte und Gewerbeobjekte in Frankfurt.
                  Von der regelmäßigen Rasenpflege bis zur kompletten Gartengestaltung.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Rasenpflege & Rasenschnitt', 'Heckenschnitt & Baumschnitt', 'Gartengestaltung & Neuanlage', 'Bewässerungsanlagen', 'Saisonale Pflege'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-[#2d746d] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/gartenpflege"
                  className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Facility Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-[#003f2e]">
                {!cmsLoading && facilityImg && (
                  <img
                    src={facilityImg}
                    alt="Facility Management Frankfurt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003f2e]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-[#003f2e] text-[#bcff83] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Building2 size={12} />
                    Facility Management
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[#003f2e] font-bold text-2xl mb-3">Facility Management &<br />Gebäudedienste</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Umfassendes Facility Management für Unternehmen und Hausverwaltungen in
                  Frankfurt. Zuverlässige Betreuung Ihrer Immobilie aus einer Hand.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Hausmeisterservice', 'Gebäudereinigung', 'Winterdienst', 'Außenanlagenpflege', 'Technisches Gebäudemanagement'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-[#2d746d] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/facility-management"
                  className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">So einfach geht's</span>
            <h2 className="text-[#003f2e] mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
              Ihr Weg zu einem gepflegten<br />Garten oder Gebäude
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Kontakt aufnehmen', desc: 'Füllen Sie unser Formular aus oder rufen Sie uns an. Wir melden uns innerhalb von 24 Stunden.', icon: Mail },
              { step: '02', title: 'Kostenlose Beratung', desc: 'Wir kommen zu Ihnen vor Ort, analysieren Ihre Situation und erstellen ein maßgeschneidertes Angebot.', icon: Users },
              { step: '03', title: 'Professionelle Umsetzung', desc: 'Unser geschultes Team setzt Ihr Projekt termingerecht, zuverlässig und mit höchster Qualität um.', icon: Award },
            ].map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 bg-[#003f2e] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Icon size={24} className="text-[#bcff83]" />
                </div>
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-3 w-8 h-8 bg-[#bcff83] rounded-full flex items-center justify-center">
                  <span className="text-[#003f2e] text-xs font-black">{step}</span>
                </div>
                <h3 className="text-[#003f2e] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktuelle Projekte – nur echte Daten aus Supabase */}
      {projects.length > 0 && (
        <section className="py-24 bg-[#f7f8f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Portfolio</span>
                <h2 className="text-[#003f2e] mt-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
                  Aktuelle Projekte
                </h2>
              </div>
              <Link
                to="/projekte"
                className="flex items-center gap-2 text-[#2d746d] font-bold text-sm hover:text-[#003f2e] transition-colors"
              >
                Alle Projekte ansehen
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className="relative h-52 overflow-hidden bg-[#003f2e]">
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3 left-3 bg-[#bcff83] text-[#003f2e] px-3 py-1 rounded-full text-xs font-bold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#003f2e] font-bold text-base mb-1">{project.title}</h3>
                    <p className="text-[#2d746d] text-xs font-medium flex items-center gap-1">
                      <MapPin size={11} />
                      {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-24 bg-[#003f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#bcff83] text-xs font-bold uppercase tracking-widest">Kundenmeinungen</span>
            <h2 className="text-white mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Thomas B.', location: 'Frankfurt-Sachsenhausen',
                text: 'Garden Time pflegt unseren Garten seit drei Jahren. Die Qualität ist herausragend und das Team immer pünktlich und zuverlässig. Absolut empfehlenswert!',
                stars: 5,
              },
              {
                name: 'Sabine M.', location: 'Hausverwaltung, Frankfurt-Westend',
                text: 'Als Hausverwaltung schätzen wir den professionellen Facility-Management-Service. Ein Ansprechpartner für alles – das spart uns enorm viel Zeit.',
                stars: 5,
              },
              {
                name: 'Markus K.', location: 'Bad Homburg',
                text: 'Unsere Gartengestaltung hat Garden Time komplett neu geplant und umgesetzt. Das Ergebnis übertrifft unsere Erwartungen. Professionell von Anfang bis Ende.',
                stars: 5,
              },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} size={14} className="text-[#bcff83] fill-[#bcff83]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#bcff83]/70 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Jetzt anfragen</span>
              <h2 className="text-[#003f2e] mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2 }}>
                Kostenloses Angebot<br />für Frankfurt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Schildern Sie uns Ihr Projekt und wir melden uns innerhalb von 24 Stunden
                mit einem unverbindlichen Angebot zurück.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Kostenlose Erstberatung', desc: 'Wir kommen zu Ihnen und beraten Sie unverbindlich.' },
                  { title: 'Schnelle Reaktionszeit', desc: 'Antwort innerhalb von 24 Stunden garantiert.' },
                  { title: 'Transparente Preise', desc: 'Klare Angebote ohne versteckte Kosten.' },
                  { title: 'Zertifizierter Fachbetrieb', desc: 'Mitglied im Bundesverband Garten- und Landschaftsbau.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#bcff83] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={13} className="text-[#003f2e]" />
                    </div>
                    <div>
                      <p className="text-[#003f2e] font-semibold text-sm">{title}</p>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm
              title="Ihre Anfrage"
              subtitle="Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f7f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-[#003f2e] mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
              Häufig gestellte Fragen
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#003f2e] font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#2d746d] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#003f2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Bereit für einen gepflegten<br />
            <span className="text-[#bcff83]">Garten oder Gebäude?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Kontaktieren Sie uns jetzt und erhalten Sie Ihr kostenloses Angebot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontakt"
              className="bg-[#bcff83] text-[#003f2e] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-all shadow-xl hover:-translate-y-0.5"
            >
              Jetzt Angebot anfordern
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 bg-white/15 text-white border border-white/30 px-6 py-4 rounded-xl font-semibold text-sm hover:bg-white/25 transition-all"
            >
              <Phone size={16} />
              {COMPANY.phonePretty}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}