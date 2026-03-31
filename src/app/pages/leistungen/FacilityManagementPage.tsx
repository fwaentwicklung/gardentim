import { Building2, Shield, Clock, Users, FileCheck, Wrench, TrendingDown, Phone } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function FacilityManagementPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Facility Management Frankfurt | Gebäudemanagement & Außenanlagen – Garden Time GmbH',
        description: 'Professionelles Facility Management in Frankfurt ✓ Technisches & infrastrukturelles Gebäudemanagement ✓ Außenanlagenpflege ✓ Hausmeisterservice ✓ DSGVO-konform. Garden Time GmbH.',
        keywords: 'Facility Management Frankfurt, Gebäudemanagement Frankfurt, Außenanlagenpflege Frankfurt, Property Management Frankfurt, Facility Services Frankfurt, TFM IFM Frankfurt',
        canonical: 'https://www.gardentime-frankfurt.de/leistungen/facility-management',
      }}
      breadcrumb="Facility Management"
      hero={{
        badge: '✓ Facility Management Frankfurt',
        headline: 'Professionelles Facility Management',
        headlineHighlight: 'für Frankfurt & Rhein-Main',
        subline: 'Ganzheitliches Gebäude- und Liegenschaftsmanagement aus einer Hand – für Bürokomplexe, Wohnanlagen, Hotels und Gewerbeparks in Frankfurt.',
        imageUrl: getImage('leistung:facility:hero'),
        checks: [
          'Infrastrukturelles & technisches FM',
          'Außenanlagenpflege & Grünflächenmanagement',
          'Jahresverträge mit festen Leistungsstandards',
          'Eigenes Notfall-Team 24/7 erreichbar',
        ],
      }}
      intro={{
        headline: 'Ihr Immobilienmanagement – professionell und aus einer Hand',
        text1: 'Facility Management bedeutet weit mehr als Hausmeisterservice. Garden Time GmbH bietet in Frankfurt und dem Rhein-Main-Gebiet ein umfassendes infrastrukturelles Facility Management für gewerbliche und private Liegenschaften – von der täglichen Reinigung bis zur ganzjährigen Außenanlagenpflege, vom Winterdienst bis zur technischen Betriebsführung.',
        text2: 'Als erfahrener FM-Dienstleister in Frankfurt kennen wir die besonderen Anforderungen der Stadtlage: Dichte Bebauung, hohe Besucherfrequenz, strenge Auflagen. Wir entwickeln für jede Liegenschaft ein maßgeschneidertes Servicekonzept, das die Betriebskosten senkt, die Anlagenqualität erhält und Ihre Mieter und Nutzer dauerhaft zufriedenstellt.',
        imageUrl: getImage('leistung:facility:secondary'),
        imageAlt: 'Facility Management Frankfurt Gebäude',
      }}
      benefits={[
        { title: 'Alles aus einer Hand', description: 'Ein Ansprechpartner für alle Gewerke – Reinigung, Grünpflege, Hausmeister, Winterdienst und technische Services.', icon: Building2 },
        { title: 'Haftpflicht & Versicherung', description: 'Vollständig versicherter Betrieb – kein Risiko für Sie als Eigentümer oder Hausverwaltung.', icon: Shield },
        { title: '24/7 Notfallservice', description: 'Rund-um-die-Uhr erreichbarer Notfalldienst für dringende Einsätze auf Ihrer Liegenschaft.', icon: Clock },
        { title: 'Festpreisverträge', description: 'Planungssicherheit durch Jahresverträge mit klar definierten Leistungen und festen Preisen.', icon: FileCheck },
        { title: 'Erfahrenes FM-Team', description: 'Fachkräfte mit FM-Ausbildung, regelmäßigen Schulungen und nachgewiesener Erfahrung in Frankfurt.', icon: Users },
        { title: 'Kostenoptimierung', description: 'Durch gebündelte Leistungen und optimierte Einsatzplanung senken wir Ihre Bewirtschaftungskosten.', icon: TrendingDown },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Facility Management Angebot',
        items: [
          ['Gebäudereinigung & Unterhaltsreinigung', 'Glasreinigung & Fassadenpflege', 'Tiefgaragenreinigung', 'Sanitärreinigung & Hygiene', 'Treppenhaus- & Eingangsbereichspflege'],
          ['Grünflächenpflege & Rasenpflege', 'Heckenschnitt & Baumpflege', 'Blumenkübel & Bepflanzung', 'Winterdienst & Streudienst', 'Außenanlageninspektion'],
          ['Hausmeisterdienste & Kleinreparaturen', 'Leuchtmittelwechsel & Instandhaltung', 'Schlüssel- & Zugangsverwaltung', 'Müllbereichspflege & Entsorgung', 'Dokumentation & Berichtswesen'],
        ],
      }}
      steps={[
        { step: '1', title: 'Objektanalyse', description: 'Kostenlose Begehung Ihrer Liegenschaft in Frankfurt – wir erfassen alle relevanten Flächen und Anforderungen.' },
        { step: '2', title: 'Servicekonzept', description: 'Maßgeschneidertes FM-Konzept mit Leistungsverzeichnis, Qualitätsstandards und Festpreisangebot.' },
        { step: '3', title: 'Vertragsstart', description: 'Nahtloser Start des Betriebs – Einarbeitung im laufenden Betrieb, keine Unterbrechungen für Nutzer.' },
        { step: '4', title: 'Laufende Betreuung', description: 'Ihr fester Ansprechpartner, regelmäßige Qualitätsberichte und flexible Anpassung bei Bedarf.' },
      ]}
      faqs={[
        { q: 'Für welche Objekte bieten Sie FM in Frankfurt an?', a: 'Wir betreuen Bürokomplexe, Wohnanlagen (WEG und Mietobjekte), Einkaufszentren, Hotels, Logistikzentren und öffentliche Einrichtungen in Frankfurt und dem gesamten Rhein-Main-Gebiet.' },
        { q: 'Was kostet Facility Management in Frankfurt?', a: 'Die Kosten hängen von der Objektgröße, den Leistungen und der Häufigkeit ab. Wir bieten individuelle Jahresfestpreise – in der Regel ab 500 €/Monat für kleinere Objekte. Gerne erstellen wir Ihnen ein Angebot nach Objektbegehung.' },
        { q: 'Übernehmen Sie auch laufende Hausverwaltungsaufgaben?', a: 'Wir übernehmen die operative Durchführung aller Facility-Leistungen. Administrative WEG-Verwaltung ist nicht unser Kerngeschäft, jedoch kooperieren wir eng mit Hausverwaltungen in Frankfurt.' },
        { q: 'Wie schnell können Sie einen FM-Vertrag starten?', a: 'In der Regel können wir innerhalb von 2–4 Wochen nach Vertragsunterzeichnung mit dem Betrieb beginnen. Bei dringendem Bedarf auch früher – sprechen Sie uns an.' },
      ]}
      cta={{
        headline: 'Professionelles Facility Management für Ihr Objekt in Frankfurt',
        subline: 'Kontaktieren Sie uns für eine kostenlose Objektbegehung. Wir entwickeln Ihr individuelles FM-Konzept und Festpreisangebot.',
        servicePreset: 'Facility Management',
      }}
    />
  );
}
