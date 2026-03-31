import { Link } from 'react-router';
import { Leaf, CheckCircle, ArrowRight, Scissors, Droplets, TreePine, Sun, Flower2, Sprout } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadForm from '../components/LeadForm';

const heroImg = 'https://images.unsplash.com/photo-1686466538765-3499b9711057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW4lMjBsYW5kc2NhcGluZyUyMEZyYW5rZnVydCUyMGdyZWVufGVufDF8fHx8MTc3NDQ1NDAxNnww&ixlib=rb-4.1.0&q=80&w=1080';
const gardenDesignImg = 'https://images.unsplash.com/photo-1746458258536-b9ee5db20a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBkZXNpZ24lMjBtb2Rlcm4lMjBsdXh1cnklMjBvdXRkb29yfGVufDF8fHx8MTc3NDQ1NDAxN3ww&ixlib=rb-4.1.0&q=80&w=1080';
const lawnImg = 'https://images.unsplash.com/photo-1734303023481-7508b5c9f1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMG1vd2luZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc0NDU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const hedgeImg = 'https://images.unsplash.com/photo-1670989292166-8b20b9530438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWRnZSUyMHRyaW1taW5nJTIwZ2FyZGVuJTIwcHJvZmVzc2lvbmFsJTIwd29ya2VyfGVufDF8fHx8MTc3NDQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    icon: Leaf,
    title: 'Rasenpflege & Rasenmähen',
    desc: 'Regelmäßiges Rasenmähen, Vertikutieren, Düngen und Bewässern für einen perfekten Rasen in Frankfurt. Wir kümmern uns ganzjährig um Ihren Rasen.',
    features: ['Rasenmähen (Wöchentlich/Zweiwöchentlich)', 'Vertikutieren & Aerifizieren', 'Rasen düngen & wässern', 'Randschnitt & Kantenpflege', 'Rasenreparatur & Nachsaat'],
    img: lawnImg,
  },
  {
    icon: Scissors,
    title: 'Heckenschnitt & Baumschnitt',
    desc: 'Professioneller Formschnitt für Hecken, Sträucher und Bäume. Unsere Baumsachverständigen garantieren fachmännische und pflanzenschonende Schnittmaßnahmen.',
    features: ['Hecken- & Strauchschnitt', 'Obstbaumschnitt', 'Kronenpflege & Auslichten', 'Sturmschadenbeseitigung', 'Baumfällung & Entsorgung'],
    img: hedgeImg,
  },
  {
    icon: Flower2,
    title: 'Gartengestaltung & Neuanlage',
    desc: 'Planung und Umsetzung Ihres Traumgartens. Wir erstellen individuelle Gartenkonzepte für Frankfurt und entwerfen Gärten, die zu Ihnen passen.',
    features: ['Individuelle Gartenplanung', 'Pflanzkonzepte & Beratung', 'Terrassenbau & Wege', 'Teichanlagen & Wasserspiele', '3D-Gartenvisualisierung'],
    img: gardenDesignImg,
  },
  {
    icon: Droplets,
    title: 'Bewässerungsanlagen',
    desc: 'Automatische Bewässerungssysteme für Gärten und Außenanlagen. Sparen Sie Wasser und Zeit mit einer intelligenten, bedarfsgesteuerten Bewässerung.',
    features: ['Planung & Installation', 'Hunter & Rain Bird Systeme', 'Smarte Steuerung per App', 'Winterabsicherung', 'Wartung & Reparatur'],
    img: 'https://images.unsplash.com/photo-1762365017617-5c7e59cf2a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBnYXJkZW4lMjB0ZXJyYWNlJTIwcGF0aW8lMjBzdG9uZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: TreePine,
    title: 'Bepflanzung & Staudenpflege',
    desc: 'Fachgerechte Bepflanzung mit standortgerechten Pflanzen. Wir beraten Sie bei der Auswahl und Pflanzung von Stauden, Sträuchern und Bäumen.',
    features: ['Frühjahrs- & Herbstbepflanzung', 'Stauden- & Rosen pflege', 'Beetpflege & Mulchen', 'Bodenverbesserung', 'Pflanzgarantie'],
    img: 'https://images.unsplash.com/photo-1686466538765-3499b9711057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW4lMjBsYW5kc2NhcGluZyUyMEZyYW5rZnVydCUyMGdyZWVufGVufDF8fHx8MTc3NDQ1NDAxNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sun,
    title: 'Saisonale Gartenpflege',
    desc: 'Ganzjährige Betreuung Ihres Gartens im Jahresrhythmus. Von der Frühjahrsvorbereitung bis zur Winterfestmachung – wir begleiten Ihren Garten durch alle Jahreszeiten.',
    features: ['Frühjahrsputz & Vorbereitung', 'Sommerpflege & Bewässerung', 'Herbstschnitt & Laubentfernung', 'Winterschutz für Pflanzen', 'Jahrespflegeverträge'],
    img: lawnImg,
  },
  {
    icon: Sprout,
    title: 'Grünanlagenpflege Gewerbe',
    desc: 'Professionelle Pflege von Grünanlagen für Unternehmen, Wohnkomplexe und öffentliche Einrichtungen in Frankfurt. Zuverlässig nach Leistungsverzeichnis.',
    features: ['Außenanlagen für Firmen', 'Wohnungsbaugesellschaften', 'Öffentliche Grünflächen', 'Parkplatzbegrünung', 'Dachbegrünung'],
    img: gardenDesignImg,
  },
];

const serviceAreas = [
  'Frankfurt am Main', 'Bad Homburg', 'Eschborn', 'Hofheim', 'Königstein',
  'Offenbach', 'Hanau', 'Wiesbaden', 'Darmstadt', 'Friedberg',
  'Oberursel', 'Neu-Isenburg', 'Langen', 'Dreieich', 'Kelkheim',
];

export default function Gartenpflege() {
  return (
    <>
      <SEOHead
        title="Gartenpflege Frankfurt | Gartengestaltung & Rasenpflege – Garden Time GmbH"
        description="Professionelle Gartenpflege & Gartengestaltung in Frankfurt am Main. ✓ Rasenpflege ✓ Heckenschnitt ✓ Gartengestaltung ✓ Bewässerung. Über 15 Jahre Erfahrung. Jetzt kostenloses Angebot anfordern!"
        keywords="Gartenpflege Frankfurt, Gartengestaltung Frankfurt, Rasenpflege Frankfurt, Heckenschnitt Frankfurt, Gartenbau Frankfurt am Main, Gartenservice Frankfurt, Gartenarbeit Frankfurt, Gartengestaltung Rhein-Main"
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Gartenpflege Frankfurt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003f2e]/90 via-[#003f2e]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-3">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Gartenpflege</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#bcff83]/20 border border-[#bcff83]/40 text-[#bcff83] px-3 py-1 rounded-full text-xs font-bold mb-4">
            <Leaf size={11} />
            Gartenpflege & Gartengestaltung
          </div>
          <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1 }}>
            Professionelle Gartenpflege<br />
            <span className="text-[#bcff83]">in Frankfurt & Umgebung</span>
          </h1>
          <p className="text-white/80 max-w-xl text-base leading-relaxed mb-6">
            Ihr zertifizierter Gartenpflegebetrieb im Rhein-Main-Gebiet. Wir pflegen, gestalten
            und verschönern Ihren Garten – für Privat und Gewerbe.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-colors shadow-xl"
          >
            Angebot anfordern
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: '🌿', title: 'Ganzjährige Betreuung', desc: 'Wir kümmern uns das ganze Jahr um Ihren Garten – von Frühling bis Winter.' },
              { icon: '⭐', title: 'Zertifizierter Fachbetrieb', desc: 'Alle Mitarbeiter sind ausgebildete Gärtner mit jahrelanger Erfahrung.' },
              { icon: '📋', title: 'Individuelle Angebote', desc: 'Kein Standardpaket – jedes Angebot ist auf Ihren Garten zugeschnitten.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6 bg-[#f7f8f6] rounded-2xl">
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <h3 className="text-[#003f2e] font-bold text-base mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
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
              Unsere Gartenleistungen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Wir bieten alle Leistungen rund um Ihren Garten aus einer Hand – professionell,
              termingerecht und zu fairen Preisen in Frankfurt am Main.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <service.icon size={12} />
                    Gartenpflege Frankfurt
                  </div>
                  <h3 className="text-[#003f2e] font-black text-2xl mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-[#2d746d] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
                  >
                    Jetzt anfragen
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className={`rounded-3xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.img}
                    alt={service.title + ' Frankfurt'}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#003f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#bcff83] text-xs font-bold uppercase tracking-widest">Einzugsgebiet</span>
            <h2 className="text-white mt-3 font-bold text-2xl">Unser Einzugsgebiet</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:bg-[#bcff83]/20 hover:text-[#bcff83] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Gartenpflege Frankfurt</span>
              <h2 className="text-[#003f2e] mt-3 mb-4 font-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
                Jetzt kostenloses<br />Garten-Angebot anfragen
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Egal ob Rasenpflege, Heckenschnitt oder komplette Gartengestaltung –
                wir kommen zu Ihnen, besichtigen Ihren Garten und erstellen ein
                transparentes Angebot.
              </p>
              <div className="bg-[#f7f8f6] rounded-2xl p-6 space-y-3">
                <p className="text-[#003f2e] font-bold text-sm">Warum Garden Time wählen?</p>
                {[
                  '✅ Über 15 Jahre Erfahrung im Raum Frankfurt',
                  '✅ Ausgebildete Gärtner und Landschaftspfleger',
                  '✅ Alle Arbeiten im eigenen Betrieb – keine Subunternehmer',
                  '✅ Umweltfreundliche Geräte und Methoden',
                  '✅ Haftpflichtversichert und zuverlässig',
                ].map((item) => (
                  <p key={item} className="text-gray-700 text-sm">{item}</p>
                ))}
              </div>
            </div>
            <LeadForm
              title="Gartenberatung anfragen"
              subtitle="Kostenlose Erstberatung und unverbindliches Angebot für Ihren Garten in Frankfurt."
              servicePreset="Gartenpflege & Rasenmähen"
            />
          </div>
        </div>
      </section>
    </>
  );
}
