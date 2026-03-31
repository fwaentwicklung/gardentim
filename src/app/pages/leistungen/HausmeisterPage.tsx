import { Wrench, Shield, Clock, Phone, CheckCircle, Building2, Lightbulb, Key } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function HausmeisterPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Hausmeisterservice Frankfurt | Zuverlässiger Hausmeister – Garden Time GmbH',
        description: 'Professioneller Hausmeisterservice in Frankfurt ✓ Instandhaltung ✓ Kleinreparaturen ✓ Gebäudebetreuung ✓ für WEG, Vermieter & Unternehmen. Garden Time GmbH Frankfurt.',
        keywords: 'Hausmeisterservice Frankfurt, Hausmeister Frankfurt, Gebäudebetreuung Frankfurt, Instandhaltung Gebäude Frankfurt, Hausmeister mieten Frankfurt, Hausbetreuung Frankfurt',
      }}
      breadcrumb="Hausmeisterservice"
      hero={{
        badge: '✓ Hausmeisterservice Frankfurt',
        headline: 'Zuverlässiger Hausmeisterservice',
        headlineHighlight: 'in Frankfurt & Umgebung',
        subline: 'Ihr professioneller Hausmeister für Wohnanlagen, Bürogebäude und Gewerbeobjekte in Frankfurt – reaktionsschnell, zuverlässig und zu fairen Festpreisen.',
        imageUrl: getImage('leistung:hausmeister:hero'),
        checks: [
          'Technische & infrastrukturelle Betreuung',
          'Schnelle Reaktionszeiten bei Störungen',
          'Regelmäßige Objektbegehungen',
          'Zuverlässige Dokumentation aller Tätigkeiten',
        ],
      }}
      intro={{
        headline: 'Ihr verlässlicher Hausmeister – wenn Sie ihn brauchen',
        text1: 'Ein professioneller Hausmeister ist das Rückgrat jeder gut betreuten Immobilie. Garden Time GmbH bietet in Frankfurt und dem Rhein-Main-Gebiet umfassende Hausmeisterleistungen für Wohnanlagen (WEG und Mietobjekte), Bürogebäude, Hotels und Gewerbeparks an – auf Abruf oder im Rahmen eines festen Betreuungsvertrags.',
        text2: 'Unser Hausmeisterteam kennt die spezifischen Anforderungen Frankfurter Immobilien: von Altbauten in Sachsenhausen bis zu modernen Bürotürmen im Westend. Wir reagieren schnell, dokumentieren alle Tätigkeiten lückenlos und koordinieren auf Wunsch auch externe Handwerker und Dienstleister.',
        imageUrl: getImage('leistung:hausmeister:secondary'),
        imageAlt: 'Hausmeisterservice Frankfurt',
      }}
      benefits={[
        { title: 'Schnelle Reaktion', description: 'Störungsmeldungen werden innerhalb von 2 Stunden bearbeitet – im Notfall auch nachts und am Wochenende.', icon: Clock },
        { title: 'Vollversicherung', description: 'Alle unsere Hausmeister arbeiten mit Betriebshaftpflicht – kein Risiko für Sie als Eigentümer.', icon: Shield },
        { title: 'Technische Kompetenz', description: 'Kleinreparaturen an Heizung, Elektrik, Sanitär und Türen – direkt und ohne Wartezeit auf Handwerker.', icon: Wrench },
        { title: 'Erreichbarkeit', description: 'Fester Ansprechpartner für Mieter und Hausverwaltung – mit direkter Rufnummer und schnellem Rückruf.', icon: Phone },
        { title: 'Objektbegehungen', description: 'Regelmäßige Kontrollen aller Gemeinschaftsbereiche, Technikräume und Außenanlagen mit Protokoll.', icon: Building2 },
        { title: 'Schlüsselverwaltung', description: 'Sicheres Schlüsselmanagement, Zugangskontrolle und Schlüsselübergabe an Handwerker und Mieter.', icon: Key },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Hausmeisterservice-Angebot',
        items: [
          ['Regelmäßige Objektbegehungen', 'Prüfung Haustechnik & Anlagen', 'Kleinreparaturen (Schlösser, Türen, etc.)', 'Leuchtmittelwechsel allgemein', 'Störungsmeldung & -beseitigung'],
          ['Treppenhaus- & Allgemeinflächen-Pflege', 'Keller- & Tiefgaragenkontrolle', 'Müllbereich & Containerplatz', 'Briefkasten- & Namenschildpflege', 'Winterdienst (Streudienst)'],
          ['Handwerkerkoordination', 'Protokollierung & Dokumentation', 'Notfalldienst 24/7 (auf Anfrage)', 'Mietermeldungen entgegennehmen', 'Kommunikation mit Hausverwaltung'],
        ],
      }}
      steps={[
        { step: '1', title: 'Objektbegehung', description: 'Kostenlose Begehung Ihres Objekts in Frankfurt – wir erfassen alle relevanten Bereiche und Anforderungen.' },
        { step: '2', title: 'Angebotsstellung', description: 'Individuelles Angebot mit klar definiertem Leistungsumfang, Reaktionszeiten und Festpreis.' },
        { step: '3', title: 'Vertragsstart', description: 'Nahtloser Einstieg – wir stellen uns Ihren Mietern und der Hausverwaltung persönlich vor.' },
        { step: '4', title: 'Laufende Betreuung', description: 'Zuverlässige Betreuung mit monatlichem Tätigkeitsbericht und direktem Ansprechpartner.' },
      ]}
      faqs={[
        { q: 'Was unterscheidet einen guten Hausmeisterservice in Frankfurt?', a: 'Schnelle Erreichbarkeit, technische Kompetenz, lückenlose Dokumentation und ein vertrauensvoller Umgang mit Mietern. Garden Time bietet all das – mit festem Ansprechpartner und reaktionsschnellem Team.' },
        { q: 'Was kostet ein Hausmeisterservice in Frankfurt?', a: 'Monatliche Betreuungsverträge beginnen ab 250 €/Monat für kleine Objekte. Der Preis hängt von der Objektgröße, dem Umfang und den gewünschten Reaktionszeiten ab. Gerne erstellen wir ein kostenloses Angebot.' },
        { q: 'Übernehmen Sie auch Notfalleinsätze?', a: 'Ja, unser Notfalldienst ist 24/7 erreichbar. Notfalleinsätze (z.B. Rohrbruch, Einbruch, Heizungsausfall) werden sofort koordiniert und bearbeitet.' },
        { q: 'Arbeiten Sie mit Hausverwaltungen zusammen?', a: 'Ja, wir kooperieren eng mit Hausverwaltungen und WEG-Verwaltern in Frankfurt. Wir übernehmen die operative Hausmeistertätigkeit und kommunizieren direkt mit der Verwaltung.' },
      ]}
      cta={{
        headline: 'Ihren neuen Hausmeister in Frankfurt jetzt anfragen',
        subline: 'Kostenlose Objektbegehung und individuelles Angebot innerhalb von 48 Stunden. Verlässlicher Hausmeisterservice für Ihr Objekt in Frankfurt.',
        servicePreset: 'Hausmeisterservice',
      }}
    />
  );
}
