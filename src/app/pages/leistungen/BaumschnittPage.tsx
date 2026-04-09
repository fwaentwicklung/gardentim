import { TreePine, Shield, Clock, Award, Scissors, Leaf, CheckCircle, AlertTriangle } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function BaumschnittPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Baumschnitt Frankfurt | Baumpflege & Baumfällung – Garden Time GmbH',
        description: 'Professioneller Baumschnitt in Frankfurt am Main ✓ Kronenpflege ✓ Totholzentfernung ✓ Fachgerechte Baumpflege ✓ Kostenloses Angebot. Garden Time GmbH – Ihr Baumfachbetrieb.',
        keywords: 'Baumschnitt Frankfurt, Baumpflege Frankfurt, Kronenschnitt Frankfurt, Baumfällung Frankfurt, Baumpfleger Frankfurt am Main, Obstbaumschnitt Frankfurt',
      }}
      breadcrumb="Baumschnitt"
      hero={{
        badge: '✓ Baumschnitt Frankfurt',
        headline: 'Fachgerechter Baumschnitt in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Professionelle Baumpflege für gesunde, sichere und schöne Bäume – nach ZTV Baumpflege und mit zertifizierten Fachkräften.',
        imageUrl: getImage('leistung:baumschnitt:hero'),
        checks: [
          'Kronenpflege & Kronenschnitt',
          'Totholzentfernung & Sicherungsschnitt',
          'Obstbaumschnitt & Formschnitt',
          'Fachbetrieb nach ZTV Baumpflege',
        ],
      }}
      intro={{
        headline: 'Baumpflege vom Experten – sicher und fachgerecht',
        text1: 'Bäume brauchen regelmäßige Pflege, um gesund zu bleiben und keine Gefahr für Personen oder Gebäude darzustellen. Garden Time führt Baumschnittarbeiten aller Art sicher und fachgerecht durch.',
        text2: 'Unsere ausgebildeten Baumkletterer und Forstwirte arbeiten nach den anerkannten Regeln der Technik (ZTV Baumpflege) und sorgen für nachhaltige Baumpflege im Rhein-Main-Gebiet.',
        imageUrl: getImage('leistung:baumschnitt:secondary'),
        imageAlt: 'Baumschnitt Frankfurt',
      }}
      benefits={[
        { title: 'Kronenpflege & -schnitt', description: 'Formgebender Schnitt, Auslichten und Einkürzung der Baumkrone für gesundes Wachstum.', icon: TreePine },
        { title: 'Totholzentfernung', description: 'Sichere Entfernung abgestorbener Äste zur Unfallverhütung und Erhaltung der Baumgesundheit.', icon: AlertTriangle },
        { title: 'Obstbaumschnitt', description: 'Ertragsorientierter Erziehungs- und Erhaltungsschnitt für Obstbäume aller Art.', icon: Leaf },
        { title: 'Seilklettertechnik', description: 'Sicheres Arbeiten in der Baumkrone mit moderner Seilklettertechnik ohne Hebebühne.', icon: Shield },
        { title: 'Zertifizierte Fachkräfte', description: 'Ausgebildete Forstwirte und Baumkletterer mit ISA-Zertifizierung arbeiten an Ihren Bäumen.', icon: Award },
        { title: 'Entsorgung & Häckseln', description: 'Wir entsorgen alles Schnittgut fachgerecht oder häckseln es zu Mulch für Ihren Garten.', icon: CheckCircle },
      ]}
      leistungsumfang={{
        headline: 'Unsere Baumschnittleistungen im Überblick',
        items: [
          ['Kronenpflege & Auslichten', 'Totholzentfernung', 'Kronensicherung'],
          ['Obstbaumschnitt', 'Jungbaumerziehungsschnitt', 'Einkürzungsschnitt'],
          ['Baumfällung', 'Stubbenentfernung', 'Schnittgutentsorgung & Häckseln'],
        ],
      }}
      steps={[
        { step: '01', title: 'Besichtigung vor Ort', description: 'Wir besichtigen Ihre Bäume, beurteilen den Pflegebedarf und erstellen ein passendes Angebot.' },
        { step: '02', title: 'Angebot & Terminplanung', description: 'Sie erhalten ein transparentes Angebot mit optimalem Schnittzeitraum für Ihre Bäume.' },
        { step: '03', title: 'Fachgerechte Durchführung', description: 'Unsere Baumkletterer führen alle Arbeiten sicher und sauber durch – inkl. Schnittgutentsorgung.' },
        { step: '04', title: 'Dokumentation & Folgebetreuung', description: 'Sie erhalten eine Schnittdokumentation und wir empfehlen den nächsten Pflegetermin für gesunde Bäume.' },
      ]}
      faqs={[
        { q: 'Wann ist der beste Zeitpunkt für Baumschnitt?', a: 'Leichte Pflegeschnitte sind ganzjährig möglich. Stärkere Schnitte sollten in der Vegetationsruhe (Oktober bis Februar) erfolgen. Wir beraten Sie zum optimalen Zeitpunkt.' },
        { q: 'Brauche ich eine Genehmigung für Baumschnitt?', a: 'In Frankfurt gibt es eine Baumschutzsatzung. Wir prüfen die Genehmigungspflicht für Sie und beantragen ggf. erforderliche Genehmigungen.' },
        { q: 'Entsorgen Sie das Schnittgut?', a: 'Ja, wir entsorgen alles fachgerecht. Auf Wunsch häckseln wir das Material zu Mulch, den Sie im Garten weiter nutzen können.' },
        { q: 'Arbeiten Sie auch bei großen Bäumen?', a: 'Ja, wir arbeiten mit Seilklettertechnik und Hubarbeitsbühne auch an großen Bäumen – sicher und mit dem nötigen Gerät.' },
      ]}
      cta={{ headline: 'Baumschnitt in Frankfurt anfragen', subline: 'Kostenlose Besichtigung & Angebot innerhalb von 48 Stunden.', servicePreset: 'Baumschnitt' }}
    />
  );
}
