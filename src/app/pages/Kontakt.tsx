import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadForm from '../components/LeadForm';
import { COMPANY } from '../lib/company';

export default function Kontakt() {
  return (
    <>
      <SEOHead
        title="Kontakt | Gardentime Facility Service GmbH Frankfurt"
        description={`Kontaktieren Sie Gardentime Facility Service GmbH Frankfurt. ✓ Kostenlose Beratung ✓ Schnelle Rückmeldung ✓ Gartenpflege & Facility Management. Tel: ${COMPANY.phonePretty}`}
        keywords="Gardentime Kontakt Frankfurt, Gartenpflege Anfrage Frankfurt, Facility Management Anfrage Frankfurt, Garden Time Kontakt"
      />

      {/* Hero */}
      <section className="bg-[#003f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Kontakt</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
              Kontaktieren Sie uns –<br />
              <span className="text-[#bcff83]">Wir sind für Sie da</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Ob Gartenpflege, Gartengestaltung oder Facility Management – wir beraten Sie
              kostenlos und unverbindlich. Fordern Sie jetzt Ihr persönliches Angebot an.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                title: 'Telefon',
                value: COMPANY.phonePretty,
                sub: 'Mo–Fr 07:00–18:00 Uhr',
                href: COMPANY.phoneTel,
              },
              {
                icon: Phone,
                title: 'Mobil',
                value: COMPANY.mobilePretty,
                sub: 'Auch Sa 08:00–14:00 Uhr',
                href: COMPANY.mobileTel,
              },
              {
                icon: Mail,
                title: 'E-Mail',
                value: COMPANY.email,
                sub: 'Antwort innerhalb 24h',
                href: `mailto:${COMPANY.email}`,
              },
              {
                icon: MapPin,
                title: 'Adresse',
                value: COMPANY.street,
                sub: `${COMPANY.zip} ${COMPANY.city}`,
                href: 'https://maps.google.com/?q=Melchiorstra%C3%9Fe+3-5+65929+Frankfurt',
              },
              {
                icon: Clock,
                title: 'Öffnungszeiten',
                value: 'Mo–Fr: 07:00–18:00',
                sub: 'Sa: 08:00–14:00 Uhr',
              },
            ].map(({ icon: Icon, title, value, sub, href }) => (
              <div key={title} className="bg-[#f7f8f6] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#003f2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-[#bcff83]" />
                </div>
                <p className="text-[#2d746d] text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
                {href ? (
                  <a href={href} className="text-[#003f2e] font-bold text-sm hover:text-[#2d746d] transition-colors break-all">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#003f2e] font-bold text-sm">{value}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-[#f7f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-6">
                <span className="text-[#2d746d] text-xs font-bold uppercase tracking-widest">Kontaktformular</span>
                <h2 className="text-[#003f2e] font-black text-2xl mt-2">
                  Senden Sie uns eine Nachricht
                </h2>
              </div>
              <LeadForm
                subtitle="Alle Felder mit * sind Pflichtfelder. Wir antworten innerhalb von 24 Stunden."
              />
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-[#003f2e] rounded-3xl overflow-hidden h-64 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <MapPin size={40} className="text-[#bcff83] mb-3" />
                  <p className="text-white font-bold text-lg mb-1">{COMPANY.name}</p>
                  <p className="text-white/70 text-sm">{COMPANY.street}, {COMPANY.zip} {COMPANY.city}</p>
                  <a
                    href={`https://maps.google.com/?q=Melchiorstra%C3%9Fe+3-5+65929+Frankfurt`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#bcff83] text-[#003f2e] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-colors"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#bcff83] rounded-xl flex items-center justify-center">
                    <MessageSquare size={18} className="text-[#003f2e]" />
                  </div>
                  <div>
                    <p className="text-[#003f2e] font-bold text-base">Sofortige Beratung</p>
                    <p className="text-gray-500 text-xs">Mo–Fr 07:00–18:00 Uhr</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Für dringende Anfragen erreichen Sie uns direkt telefonisch. Wir beraten
                  Sie kostenlos und erstellen Ihnen ein Angebot noch am gleichen Tag.
                </p>
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center justify-center gap-2 bg-[#003f2e] text-[#bcff83] py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors w-full"
                >
                  <Phone size={16} />
                  {COMPANY.phonePretty} anrufen
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <p className="text-[#003f2e] font-bold text-base mb-4">Unser Einzugsgebiet</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Frankfurt am Main', 'Bad Homburg', 'Eschborn', 'Offenbach',
                    'Hanau', 'Wiesbaden', 'Darmstadt', 'Königstein',
                    'Hofheim', 'Oberursel', 'Langen', 'Neu-Isenburg',
                  ].map((area) => (
                    <span
                      key={area}
                      className="bg-[#f7f8f6] text-[#2d746d] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DSGVO Note */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
            <span className="text-2xl shrink-0">🔒</span>
            <div>
              <p className="text-blue-900 font-semibold text-sm mb-1">Datenschutz-Hinweis</p>
              <p className="text-blue-700 text-xs leading-relaxed">
                Ihre personenbezogenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet
                und nicht an Dritte weitergegeben. Die Verarbeitung erfolgt gemäß DSGVO auf Basis von
                Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Weitere Informationen finden Sie in
                unserer{' '}
                <Link to="/datenschutz" className="underline font-semibold hover:no-underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}