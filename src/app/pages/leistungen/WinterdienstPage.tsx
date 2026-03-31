import { Snowflake, Clock, Shield, AlertTriangle, Truck, FileCheck, Phone, Award } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function WinterdienstPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Winterdienst Frankfurt | Räumdienst & Streudienst – Garden Time GmbH',
        description: 'Zuverlässiger Winterdienst in Frankfurt ✓ Schneeräumung ✓ Streudienst ✓ Glättebekämpfung ✓ für Gewerbe & Wohnanlagen. Rechtssichere Verkehrssicherungspflicht. Garden Time.',
        keywords: 'Winterdienst Frankfurt, Schneeräumung Frankfurt, Streudienst Frankfurt, Räumdienst Frankfurt, Winterservice Frankfurt, Verkehrssicherungspflicht Frankfurt',
      }}
      breadcrumb="Winterdienst"
      hero={{
        badge: '✓ Winterdienst Frankfurt',
        headline: 'Zuverlässiger Winterdienst',
        headlineHighlight: 'in Frankfurt & Rhein-Main',
        subline: 'Schneeräumung, Streudienst und Glättebekämpfung für Gewerbe, Wohnanlagen und öffentliche Liegenschaften in Frankfurt – rechtssicher und wetterabhängig.',
        imageUrl: getImage('leistung:winterdienst:hero'),
        checks: [
          'Räumung ab 2 cm Schneefall automatisch',
          'Streudienst mit Salz & Granulat',
          'Lückenlose GPS-Dokumentation',
          'Übernahme der Verkehrssicherungspflicht',
        ],
      }}
      intro={{
        headline: 'Sicher durch den Winter – ohne eigenes Haftungsrisiko',
        text1: 'Als Grundstücks- oder Immobilieneigentümer tragen Sie in Frankfurt und ganz Deutschland die Verkehrssicherungspflicht: Sie sind verantwortlich für das Räumen und Streuen Ihrer Gehwege, Zufahrten und Parkplätze. Bei Verletzungen durch Glätte drohen empfindliche Schadensersatzforderungen. Garden Time GmbH übernimmt diese Pflicht für Sie – rechtssicher, zuverlässig und nachweisbar.',
        text2: 'Unser Winterdienst-Team ist bereits vor der morgendlichen Hauptverkehrszeit im Einsatz. Wir dokumentieren jeden Einsatz per GPS mit Zeitstempel – lückenlos und beweiskräftig. So sind Sie auf der sicheren Seite, wenn es im Winter glatt wird. Wir betreuen Wohnanlagen, Bürokomplexe, Logistikzentren, Hotels und Gewerbeparks in Frankfurt und Umgebung.',
        imageUrl: getImage('leistung:winterdienst:secondary'),
        imageAlt: 'Winterdienst Frankfurt Schneeräumung',
      }}
      benefits={[
        { title: 'Früheinsatz garantiert', description: 'Unsere Teams sind ab 5:00 Uhr morgens im Einsatz – Wege und Zufahrten sind pünktlich geräumt.', icon: Clock },
        { title: 'Haftungsübernahme', description: 'Durch unseren Winterdienstvertrag übernehmen wir die Verkehrssicherungspflicht – keine Haftungsrisiken für Sie.', icon: Shield },
        { title: 'GPS-Dokumentation', description: 'Jeder Einsatz wird per GPS mit Uhrzeit und Fotodokumentation belegt – im Streitfall beweiskräftig.', icon: FileCheck },
        { title: 'Automatischer Einsatz', description: 'Kein Anruf nötig – bei Schneefall oder Glättemeldung fahren wir automatisch gemäß Wetterreport.', icon: Truck },
        { title: 'Notfalldienst', description: '24/7 erreichbarer Notfalldienst bei plötzlichem Schneefall oder Glättemeldungen außerhalb der Regelzeiten.', icon: Phone },
        { title: 'Umweltverträglich', description: 'Einsatz von abstumpfenden Streumitteln (Splitt, Sand, Granulat) und Sole-Systemen – minimal salzbelastet.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Winterdienstangebot',
        items: [
          ['Schneeräumung Gehwege & Zufahrten', 'Schneeräumung Parkplätze & Zufahrten', 'Dachschneelast-Überwachung', 'Freihaltung von Fluchtwegen', 'Schneeschieben mit Maschine (große Flächen)'],
          ['Streudienst mit Salz (Tausalz)', 'Abstumpfen mit Splitt & Granulat', 'Sole-Besprühung präventiv', 'Streudienst Eingangstreppe & Rampen', 'Nachstreuen bei anhaltendem Frost'],
          ['GPS-gestützte Einsatzdokumentation', 'Fotodokumentation vor & nach Einsatz', 'Monatliche Abrechnungsübersichten', 'Notfalldienst 24/7', 'Jahresvertrag mit Festpreis'],
        ],
      }}
      steps={[
        { step: '1', title: 'Objektbegehung', description: 'Kostenlose Begehung und Flächenerfassung Ihrer Liegenschaft in Frankfurt – Zufahrten, Wege, Parkplätze.' },
        { step: '2', title: 'Winterdienstplan', description: 'Individueller Plan mit Räumfolgen, Einsatzzeiten, Streumitteln und verbindlichem Festpreis.' },
        { step: '3', title: 'Saisonstart', description: 'Vertragsstart vor Beginn der Wintersaison (Oktober/November) – Sie müssen sich um nichts kümmern.' },
        { step: '4', title: 'Zuverlässiger Betrieb', description: 'Automatischer Einsatz bei Bedarf, monatliche Dokumentationsberichte und direkter Ansprechpartner.' },
      ]}
      faqs={[
        { q: 'Bin ich als Vermieter für Schneeräumung verantwortlich?', a: 'Ja. In Frankfurt gilt die Verkehrssicherungspflicht für alle Grundstücks- und Immobilieneigentümer. Sie sind verpflichtet, Gehwege, Zugänge und Parkplätze bei Schnee und Eis zu räumen und zu streuen – in der Regel werktags bis 7:00, sonn- und feiertags bis 9:00 Uhr.' },
        { q: 'Was kostet Winterdienst in Frankfurt?', a: 'Jahresverträge beginnen ab 350 €/Saison für kleine Objekte. Bei größeren Flächen rechnen wir nach m². Die Kosten hängen von Fläche, Lage und gewünschtem Serviceumfang ab. Wir erstellen kostenfrei ein Angebot.' },
        { q: 'Was passiert, wenn es nachts schneit?', a: 'Unser Bereitschaftsdienst überwacht Wetterdaten automatisch. Bei Schneefall werden Räumkolonnen sofort mobilisiert – ab 2 cm Neuschnee sind wir im Einsatz, damit morgens alles frei ist.' },
        { q: 'Welche Streumittel verwenden Sie?', a: 'Wir setzen auf ein Kombisystem: Abstumpfende Mittel (Splitt, Sand) für schonende Streuwirkung, Salz nur bei Bedarf. Auf Wunsch arbeiten wir vollständig salzmittelarm – zum Schutz von Bäumen, Rasen und Belägen.' },
      ]}
      cta={{
        headline: 'Winterdienst in Frankfurt – jetzt für die Saison anmelden',
        subline: 'Sichern Sie sich jetzt Ihren Winterdienstplatz für die kommende Saison. Kostenlose Objektbegehung und Festpreisangebot innerhalb von 48 Stunden.',
        servicePreset: 'Winterdienst',
      }}
    />
  );
}
