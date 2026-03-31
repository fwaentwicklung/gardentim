import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../lib/company';

export default function Impressum() {
  return (
    <>
      <SEOHead
        title={`Impressum | ${COMPANY.name}`}
        description={`Impressum der ${COMPANY.name} – Melchiorstraße 3-5, 65929 Frankfurt am Main. Angaben gemäß § 5 TMG.`}
        keywords="Impressum Gardentime Facility Service GmbH Frankfurt, Garden Time Impressum"
      />

      <section className="bg-[#003f2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Impressum</span>
          </div>
          <h1 className="text-white font-black text-3xl">Impressum</h1>
          <p className="text-white/70 mt-3 text-sm">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            {/* Unternehmensangaben */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6">
                <p className="font-bold text-[#003f2e] text-base mb-3">{COMPANY.name}</p>
                <div className="space-y-1 text-gray-700">
                  <p>{COMPANY.street}</p>
                  <p>{COMPANY.zip} {COMPANY.city}</p>
                  <p>{COMPANY.country}</p>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Kontakt</h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6 space-y-2">
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a href={COMPANY.phoneTel} className="text-[#2d746d] hover:underline">
                    {COMPANY.phonePretty}
                  </a>
                </p>
                <p>
                  <strong>Mobil:</strong>{' '}
                  <a href={COMPANY.mobileTel} className="text-[#2d746d] hover:underline">
                    {COMPANY.mobilePretty}
                  </a>
                </p>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-[#2d746d] hover:underline">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  <strong>Webseite:</strong>{' '}
                  <a href={`https://${COMPANY.website1}`} target="_blank" rel="noopener noreferrer" className="text-[#2d746d] hover:underline">
                    {COMPANY.website1}
                  </a>{' '}
                  &{' '}
                  <a href={`https://${COMPANY.website2}`} target="_blank" rel="noopener noreferrer" className="text-[#2d746d] hover:underline">
                    {COMPANY.website2}
                  </a>
                </p>
              </div>
            </section>

            {/* Geschäftsführung */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Vertreten durch</h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6">
                <p><strong>Geschäftsführer:</strong> {COMPANY.geschaeftsfuehrer}</p>
              </div>
            </section>

            {/* Handelsregister */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Handelsregister</h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6 space-y-2">
                <p><strong>Registergericht:</strong> {COMPANY.registergericht}</p>
                <p><strong>Registernummer:</strong> {COMPANY.registernummer}</p>
              </div>
            </section>

            {/* Umsatzsteuer & Steuernummer */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Umsatzsteuer-ID & Steuernummer</h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6 space-y-2">
                <p>
                  <strong>Umsatzsteuer-Identifikationsnummer</strong> gemäß § 27a Umsatzsteuergesetz:{' '}
                  <span className="font-mono font-semibold">{COMPANY.ustIdNr}</span>
                </p>
                <p>
                  <strong>Steuernummer:</strong>{' '}
                  <span className="font-mono font-semibold">{COMPANY.steuernummer}</span>
                </p>
              </div>
            </section>

            {/* Verantwortlich */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 MStV
              </h2>
              <div className="bg-[#f7f8f6] rounded-2xl p-6 space-y-1">
                <p className="font-semibold">{COMPANY.geschaeftsfuehrer}</p>
                <p>{COMPANY.name}</p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zip} {COMPANY.city}</p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Haftungsausschluss</h2>

              <h3 className="font-bold text-[#2d746d] mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="font-bold text-[#2d746d] mb-2 mt-5">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>

              <h3 className="font-bold text-[#2d746d] mb-2 mt-5">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-4">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-[#2d746d] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Unsere E-Mail-Adresse:{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-[#2d746d] underline">
                  {COMPANY.email}
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <div className="bg-[#f7f8f6] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <Link to="/datenschutz" className="text-[#2d746d] underline hover:no-underline text-sm">
                → Zur Datenschutzerklärung
              </Link>
              <Link to="/" className="text-[#2d746d] text-sm font-semibold hover:text-[#003f2e]">
                ← Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
