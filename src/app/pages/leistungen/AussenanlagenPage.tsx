import { Trees, Building2, Leaf, Shield, Ruler, Sprout, Award, Clock } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function AussenanlagenPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Außenanlagenpflege Frankfurt | Gewerbliche Grünflächen & Außenanlagen – Garden Time',
        description: 'Professionelle Außenanlagenpflege in Frankfurt ✓ Gewerbe & Wohnanlagen ✓ Rasenpflege ✓ Baum- & Heckenpflege ✓ Eingangsbepflanzung ✓ Jahresverträge. Garden Time GmbH.',
        keywords: 'Außenanlagenpflege Frankfurt, Grünflächenpflege Frankfurt, Gewerbliche Außenanlagen Frankfurt, Außenanlage Gewerbe Frankfurt, Liegenschaftspflege Frankfurt',
      }}
      breadcrumb="Außenanlagenpflege"
      hero={{
        badge: '✓ Außenanlagenpflege Frankfurt',
        headline: 'Professionelle Außenanlagen-',
        headlineHighlight: 'pflege für Frankfurt',
        subline: 'Gepflegte Grünanlagen steigern den Wert jeder Liegenschaft. Garden Time übernimmt die komplette Außenanlagenpflege für Gewerbeobjekte, Wohnanlagen und öffentliche Liegenschaften.',
        imageUrl: getImage('leistung:aussenanlagen:hero'),
        checks: [
          'Ganzjährige Grünflächenpflege',
          'Professionelle Bepflanzungskonzepte',
          'Eingangsbereiche & Repräsentationsflächen',
          'Jahresverträge mit SLA-Standards',
        ],
      }}
      intro={{
        headline: 'Außenanlagen als Visitenkarte Ihrer Immobilie',
        text1: 'Die Außenanlagen einer Liegenschaft sind das erste, was Kunden, Besucher und Mieter sehen. Gepflegte Grünflächen, blühende Eingangsbepflanzungen und saubere Wegebereiche strahlen Professionalität aus und erhöhen messbar den Wert der Immobilie. Garden Time GmbH übernimmt in Frankfurt und dem Rhein-Main-Gebiet die vollständige Außenanlagenpflege für Gewerbe und Wohnanlagen.',
        text2: 'Unser Team aus qualifizierten Gärtnern und Grünflächenpflegern kennt die spezifischen Anforderungen gewerblicher Liegenschaften: zuverlässige Einhaltung von Servicefenstern, saubere Arbeit ohne Behinderung des Betriebs, schnelle Reaktion auf Sonderwünsche und lückenlose Dokumentation aller Tätigkeiten. Wir bieten Jahresverträge mit klar definierten Leistungsstandards.',
        imageUrl: getImage('leistung:aussenanlagen:secondary'),
        imageAlt: 'Außenanlagenpflege Frankfurt Gewerbe',
      }}
      benefits={[
        { title: 'Ganzjährige Betreuung', description: 'Lückenlose Pflege in allen vier Jahreszeiten – von der Frühjahrsbepflanzung bis zur Wintervorbereitung.', icon: Leaf },
        { title: 'Repräsentative Qualität', description: 'Höchste Pflegestandards für Eingangsbereiche, Repräsentationsflächen und Kundenparkplätze.', icon: Building2 },
        { title: 'Fachorientierte Teams', description: 'Qualifizierte Gärtner mit Erfahrung in der gewerblichen Grünflächenpflege – diskret und zuverlässig.', icon: Award },
        { title: 'Feste Pflegetermine', description: 'Verbindliche Terminpläne, angepasst an Ihre Betriebszeiten und jahreszeitlichen Anforderungen.', icon: Clock },
        { title: 'Werterhaltung', description: 'Regelmäßige Pflege erhält den Wert Ihrer Liegenschaft und reduziert teure Sanierungs- und Neugestaltungsmaßnahmen.', icon: Shield },
        { title: 'Individuelle Konzepte', description: 'Bepflanzungskonzepte, die zu Ihrer Corporate Identity passen – farblich, stilistisch und jahreszeitlich.', icon: Sprout },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Außenanlagenpflege-Angebot',
        items: [
          ['Rasenpflege & Mahd gewerblich', 'Heckenpflege & Formschnitt', 'Baumpflege & Baumkontrolle', 'Strauchpflege & Auslichtung', 'Laubentsorgung & Reinigung'],
          ['Eingangsbepflanzung & Kübelpflanzen', 'Blumenbeete & Wechselbepflanzung', 'Sommerflorbepflanzung', 'Staudenpflege & Dauerbepflanzung', 'Begrünungskonzepte'],
          ['Wegebau & Belagspflege', 'Parkplatzsauberkeit & Reinigung', 'Parkplatzmarkierungen & Pflege', 'Außenbeleuchtungspflege', 'Dokumentation & Qualitätsberichte'],
        ],
      }}
      steps={[
        { step: '1', title: 'Flächenaufnahme', description: 'Kostenlose Begehung und digitale Flächenerfassung Ihrer Liegenschaft in Frankfurt.' },
        { step: '2', title: 'Pflegekonzept', description: 'Ganzjähriger Pflegeplan mit Leistungsübersicht, Häufigkeiten und Festpreisangebot.' },
        { step: '3', title: 'Betriebsstart', description: 'Nahtloser Einstieg mit festem Team – Einweisung und Erstkontrolle aller Flächen.' },
        { step: '4', title: 'Jahresbetreuung', description: 'Zuverlässige Pflege nach Plan mit monatlichen Berichten und direktem Ansprechpartner.' },
      ]}
      faqs={[
        { q: 'Was umfasst die Außenanlagenpflege für Gewerbe in Frankfurt?', a: 'Unsere gewerbliche Außenanlagenpflege umfasst: Rasenpflege, Hecken- und Baumpflege, Beete und Bepflanzungen, Wege- und Parkplatzreinigung, Kübelpflanzenpflege sowie Laubentsorgung. Wir erstellen einen Jahreseinsatzplan mit allen Leistungen.' },
        { q: 'Wie häufig werden Außenanlagen gepflegt?', a: 'Das hängt von der Liegenschaft ab. Für repräsentative Gewerbeimmobilien empfehlen wir in der Hauptsaison wöchentliche, in der Nebensaison 2-wöchentliche Einsätze. Wir passen die Frequenz an Ihre Anforderungen an.' },
        { q: 'Können Sie kurzfristig bei Sonderanlässen helfen?', a: 'Ja, für Veranstaltungen, Messen oder besondere Anlässe können wir kurzfristig Sonderpflegeeinsätze durchführen, damit Ihre Außenanlagen immer top aussehen.' },
        { q: 'Arbeiten Sie auch für Wohnungseigentümergemeinschaften (WEG)?', a: 'Ja, WEG und Hausverwaltungen sind wichtige Kunden von Garden Time. Wir kennen die Besonderheiten der WEG-Strukturen und bieten jahresvertragliche Pflegeleistungen mit klarer Abrechnung.' },
      ]}
      cta={{
        headline: 'Außenanlagenpflege für Ihre Liegenschaft in Frankfurt',
        subline: 'Fordern Sie jetzt Ihr individuelles Pflegekonzept an. Kostenlose Flächenbegehung und verbindliches Jahresangebot innerhalb von 48 Stunden.',
        servicePreset: 'Außenanlagenpflege',
      }}
    />
  );
}
