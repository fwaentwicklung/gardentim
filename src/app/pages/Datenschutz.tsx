import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../lib/company';

export default function Datenschutz() {
  return (
    <>
      <SEOHead
        title={`Datenschutzerklärung | ${COMPANY.name}`}
        description={`Datenschutzerklärung der ${COMPANY.name}, Frankfurt am Main. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.`}
        keywords="Datenschutz Gardentime Facility Service GmbH Frankfurt, DSGVO, Datenschutzerklärung"
      />

      <section className="bg-[#003f2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#bcff83] text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span>Datenschutzerklärung</span>
          </div>
          <h1 className="text-white font-black text-3xl">Datenschutzerklärung</h1>
          <p className="text-white/70 mt-3 text-sm">
            Stand: März 2026 | {COMPANY.name}, {COMPANY.city}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <p className="font-bold text-blue-900 mb-2">🔒 Datenschutz auf einen Blick</p>
              <p className="text-blue-700 text-sm">
                Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung
                personenbezogener Daten auf unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO),
                des Bundesdatenschutzgesetzes (BDSG) sowie des Telekommunikation-Telemedien-Datenschutz-Gesetzes (TTDSG).
              </p>
            </div>

            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">1. Verantwortlicher</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-[#f7f8f6] rounded-xl p-5 mt-3 space-y-1">
                <p><strong>{COMPANY.name}</strong></p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zip} {COMPANY.city}</p>
                <p>
                  Telefon:{' '}
                  <a href={COMPANY.phoneTel} className="text-[#2d746d] hover:underline">
                    {COMPANY.phonePretty}
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-[#2d746d] hover:underline">
                    {COMPANY.email}
                  </a>
                </p>
                <p>Geschäftsführer: {COMPANY.geschaeftsfuehrer}</p>
              </div>
            </section>

            {/* 2. Datenerhebung */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>

              <h3 className="font-bold text-[#2d746d] mb-2">a) Beim Besuch unserer Website</h3>
              <p>
                Beim Aufrufen unserer Website werden durch den Browser automatisch Informationen an den Server
                übermittelt. Dies sind: IP-Adresse (pseudonymisiert), Datum und Uhrzeit des Abrufs, Browsertyp,
                Betriebssystem, Referrer-URL. Diese Daten werden ausschließlich für statistische Zwecke
                und zur Gewährleistung der Systemsicherheit benötigt. Eine Zusammenführung mit anderen
                Datenquellen wird nicht vorgenommen.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                der sicheren und fehlerfreien Bereitstellung der Website).
              </p>

              <h3 className="font-bold text-[#2d746d] mb-2 mt-5">b) Bei Nutzung des Kontaktformulars</h3>
              <p>
                Wenn Sie über unser Kontaktformular eine Anfrage übermitteln, werden folgende Daten
                gespeichert: Name, E-Mail-Adresse, Telefonnummer, gewünschte Leistung, Nachricht und
                Zeitpunkt der Anfrage. Diese Daten werden ausschließlich zur Bearbeitung Ihrer
                Anfrage und für eine eventuelle Anschlussfragen gespeichert. Eine Weitergabe an
                Dritte findet nicht statt.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                sowie Ihre ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className="mt-2">
                <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die
                Erreichung des Zwecks nicht mehr benötigt werden, spätestens nach 3 Jahren.
                Sie können jederzeit die Löschung Ihrer Daten verlangen.
              </p>

              <h3 className="font-bold text-[#2d746d] mb-2 mt-5">c) Bewerbungsformular / Jobs</h3>
              <p>
                Wenn Sie sich über unsere Website bewerben, werden Ihre Bewerbungsdaten (Name, E-Mail,
                Qualifikationen) zur Bearbeitung Ihrer Bewerbung verarbeitet. Daten abgelehnter
                Bewerber werden nach 6 Monaten gelöscht, sofern kein berechtigtes Interesse an einer
                längeren Speicherung besteht.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG.
              </p>
            </section>

            {/* 3. Cookies */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">3. Cookies & Cookie-Einwilligung</h2>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden und die Ihr Browser beim nächsten Besuch wieder übermittelt. Wir unterscheiden:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-3">
                <li>
                  <strong>Essentielle Cookies (technisch notwendig):</strong> Notwendig für den Betrieb
                  der Website, z.B. Speicherung Ihrer Cookie-Einwilligung im Local Storage.
                  Keine vorherige Einwilligung erforderlich. Speicherdauer: bis zu 12 Monate.
                  <br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG.
                </li>
                <li>
                  <strong>Analyse-Cookies (optional):</strong> Helfen uns, die Nutzung unserer Website
                  zu verstehen. Daten werden anonymisiert erhoben. Nur nach Ihrer ausdrücklichen Einwilligung.
                  <br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG.
                </li>
                <li>
                  <strong>Marketing-Cookies (optional):</strong> Ermöglichen personalisierte Inhalte und
                  Remarketing. Nur nach Ihrer ausdrücklichen Einwilligung.
                  <br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG.
                </li>
              </ul>
              <p className="mt-3">
                Sie können Ihre Cookie-Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Einstellungen
                entsprechend konfigurieren oder den Cookie-Banner erneut aufrufen (Cookies löschen und Seite neu laden).
                Bitte beachten Sie, dass dies die Funktionalität der Website einschränken kann.
              </p>
            </section>

            {/* 4. Hosting & Technik */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">4. Hosting & technische Dienstleister</h2>
              <p>
                Diese Website wird über <strong>Supabase</strong> (Supabase Inc., San Francisco, USA)
                gehostet. Supabase verarbeitet technische Server-Logs und speichert Formulardaten in
                einer PostgreSQL-Datenbank. Die Datenübertragung erfolgt verschlüsselt (TLS/SSL).
                Supabase ist gemäß dem EU-U.S. Data Privacy Framework zertifiziert.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an der technischen Bereitstellung des Dienstes). Ein Auftragsverarbeitungsvertrag (AVV)
                wurde geschlossen.
              </p>
              <h3 className="font-bold text-[#2d746d] mb-2 mt-5">E-Mail-Versand (Resend)</h3>
              <p>
                Zur Zustellung von Benachrichtigungen bei eingehenden Kontaktanfragen nutzen wir den
                Dienst <strong>Resend</strong> (Resend Inc., San Francisco, USA). Wenn Sie unser
                Kontaktformular absenden, werden Ihre übermittelten Daten (Name, E-Mail, Telefon,
                gewünschte Leistung, Nachricht) in einer automatischen E-Mail-Benachrichtigung verarbeitet,
                die ausschließlich an uns als Betreiber zugestellt wird. Resend verarbeitet diese Daten
                ausschließlich zur Zustellung dieser Benachrichtigung und speichert sie nicht dauerhaft.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der zeitnahen Bearbeitung von Anfragen).
                Ein Auftragsverarbeitungsvertrag (AVV) mit Resend wurde geschlossen.
              </p>
            </section>

            {/* 5. Weitergabe */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">5. Weitergabe von Daten</h2>
              <p>
                Ihre personenbezogenen Daten werden nicht an Dritte verkauft oder ohne Ihre ausdrückliche
                Einwilligung weitergegeben, es sei denn:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Es besteht eine gesetzliche Verpflichtung zur Weitergabe (z.B. behördliche Anfragen)</li>
                <li>Die Weitergabe ist zur Vertragserfüllung zwingend erforderlich</li>
                <li>Auftragsverarbeiter (z.B. Hosting-Anbieter), die DSGVO-konform handeln und einen AVV unterzeichnet haben</li>
              </ul>
            </section>

            {/* 6. Betroffenenrechte */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">6. Ihre Rechte als betroffene Person</h2>
              <p>Sie haben folgende Rechte gemäß DSGVO bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Recht auf Auskunft über gespeicherte Daten</li>
                <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Recht auf Korrektur unrichtiger Daten</li>
                <li><strong>Löschungsrecht</strong> (Art. 17 DSGVO): „Recht auf Vergessenwerden"</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen</li>
                <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Jederzeit möglich, ohne Angabe von Gründen, mit Wirkung für die Zukunft</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich per E-Mail an:{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-[#2d746d] hover:underline">
                  {COMPANY.email}
                </a>
              </p>
              <div className="bg-[#f7f8f6] rounded-xl p-4 mt-3">
                <p className="font-semibold text-[#003f2e] text-xs uppercase tracking-wider mb-1">
                  Zuständige Aufsichtsbehörde
                </p>
                <p>
                  <strong>Hessischer Beauftragter für Datenschutz und Informationsfreiheit</strong>
                </p>
                <p>Postfach 3163, 65021 Wiesbaden</p>
                <p>
                  <a href="mailto:poststelle@datenschutz.hessen.de" className="text-[#2d746d] hover:underline">
                    poststelle@datenschutz.hessen.de
                  </a>
                </p>
              </div>
            </section>

            {/* 7. Datensicherheit */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">7. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor
                unbefugtem Zugriff, Verlust, Veränderung oder Verbreitung zu schützen. Unsere Website
                verwendet SSL/TLS-Verschlüsselung für sämtliche Datenübertragungen (erkennbar am
                „https://" in der Adresszeile Ihres Browsers).
              </p>
            </section>

            {/* 8. Änderungen */}
            <section>
              <h2 className="text-[#003f2e] font-black text-xl mb-3">8. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage,
                technische Gegebenheiten oder unser Datenangebot ändert. Die jeweils aktuelle Fassung
                ist stets auf dieser Seite abrufbar. Bitte prüfen Sie diese Seite regelmäßig.
              </p>
              <p className="mt-2 text-xs text-gray-500">Stand: März 2026</p>
            </section>

            {/* Kontakt-Box */}
            <div className="bg-[#f7f8f6] rounded-2xl p-6">
              <p className="font-bold text-[#003f2e] mb-3">Kontakt für Datenschutzfragen</p>
              <div className="space-y-1 text-sm">
                <p><strong>{COMPANY.name}</strong></p>
                <p>{COMPANY.street}, {COMPANY.zip} {COMPANY.city}</p>
                <p>
                  Telefon:{' '}
                  <a href={COMPANY.phoneTel} className="text-[#2d746d] hover:underline">
                    {COMPANY.phonePretty}
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-[#2d746d] hover:underline">
                    {COMPANY.email}
                  </a>
                </p>
              </div>
              <p className="mt-4">
                <Link to="/impressum" className="text-[#2d746d] underline hover:no-underline text-sm">
                  → Zum Impressum
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
