import { Palette, Sprout, Ruler, Trees, Droplets, Award, Shield, Lightbulb } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GartengestaltungPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Gartengestaltung Frankfurt | Neuanlage & Umgestaltung – Garden Time GmbH',
        description: 'Professionelle Gartengestaltung in Frankfurt am Main ✓ Gartenplanung ✓ Neuanlage ✓ Naturgarten ✓ Terrassengestaltung. Individuelle Planung & Umsetzung. Jetzt kostenloses Angebot!',
        keywords: 'Gartengestaltung Frankfurt, Gartenplanung Frankfurt, Neuanlage Garten Frankfurt, Gartenlandschaftsbau Frankfurt, Terrassengestaltung Frankfurt, Naturgarten Frankfurt',
      }}
      breadcrumb="Gartengestaltung"
      hero={{
        badge: '✓ Gartengestaltung Frankfurt',
        headline: 'Gartengestaltung &',
        headlineHighlight: 'Neuanlage in Frankfurt',
        subline: 'Von der Planung bis zur Fertigstellung – wir gestalten Ihren Traumgarten in Frankfurt und dem Rhein-Main-Gebiet. Individuell, nachhaltig und langlebig.',
        imageUrl: getImage('leistung:gartengestaltung:hero'),
        checks: [
          '3D-Gartenplanung & professionelle Beratung',
          'Natursteinarbeiten & Wegebau',
          'Teich- & Wasseranlagen',
          'Bepflanzungskonzepte für Frankfurt',
        ],
      }}
      intro={{
        headline: 'Ihr Garten als grüner Lebensraum – individuell geplant',
        text1: 'Ein neu gestalteter Garten ist eine Investition, die jahrzehntelang Freude bereitet. Garden Time GmbH plant und realisiert in Frankfurt und dem Rhein-Main-Gebiet individuelle Gartengestaltungen – von modernen Designgärten bis hin zu naturnahen Wildgärten oder klassischen Repräsentationsgärten für Unternehmen.',
        text2: 'Unser Gartengestaltungs-Team aus Landschaftsgärtnern, Architekten und Pflanzexperten entwickelt für Sie ein maßgeschneidertes Konzept. Wir berücksichtigen Ihre Wünsche, den vorhandenen Boden, das Klima in Frankfurt und Ihren langfristigen Pflegeaufwand – damit Ihr neuer Garten nicht nur schön ist, sondern auch leicht gepflegt werden kann.',
        imageUrl: getImage('leistung:gartengestaltung:secondary'),
        imageAlt: 'Gartengestaltung Frankfurt Referenz',
      }}
      benefits={[
        { title: 'Individuelle Planung', description: 'Jeder Garten ist einzigartig. Wir entwickeln ein Gestaltungskonzept, das perfekt zu Ihrem Grundstück und Lebensstil passt.', icon: Palette },
        { title: 'Regionale Bepflanzung', description: 'Pflanzenauswahl für das Frankfurter Klima: robust, blütenreich und pflegeleicht – mit heimischen und exotischen Arten.', icon: Sprout },
        { title: 'Präzise Ausführung', description: 'Exakte Maße, hochwertige Materialien und saubere Ausführung – von der Pflasterung bis zur Bepflanzung.', icon: Ruler },
        { title: 'Naturnahe Konzepte', description: 'Biodiversitätsfördernde Gärten mit Insektenhotels, Wildblumenwiesen und naturnaher Bepflanzung auf Wunsch.', icon: Trees },
        { title: 'Bewässerungsintegration', description: 'Auf Wunsch planen wir von Anfang an eine automatische Bewässerungsanlage in Ihr Gartenkonzept ein.', icon: Droplets },
        { title: 'Festpreisgarantie', description: 'Kein böses Erwachen: Wir arbeiten mit verbindlichen Festpreisangeboten ohne versteckte Zusatzkosten.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Gartengestaltungs-Angebot',
        items: [
          ['Gartenplanung & 3D-Visualisierung', 'Bodenvorbereitung & Drainage', 'Rasen-Neuanlage & Fertigrasen', 'Bepflanzungskonzept & Ausführung', 'Baumpflanzung & Gehölze'],
          ['Natursteinmauern & -pflasterung', 'Terrassenbau (Stein, Holz, WPC)', 'Wegebau & Belagsflächen', 'Sichtschutzanlagen', 'Pergolen & Holzbauten'],
          ['Teich- & Biotopgestaltung', 'Fontänen & Wasserläufe', 'Hochbeete & Nutzgarten', 'Beleuchtungsplanung outdoor', 'Elektro- & Wasserinstallation'],
        ],
      }}
      steps={[
        { step: '1', title: 'Erstberatung vor Ort', description: 'Kostenlose Besichtigung in Frankfurt – wir besprechen Ihre Wünsche, Möglichkeiten und das Budget.' },
        { step: '2', title: 'Planung & Konzept', description: 'Professionelle Gartenplanung mit Bepflanzungsplan, Materialauswahl und Kostenaufstellung.' },
        { step: '3', title: 'Umsetzung', description: 'Fachgerechte Ausführung durch unser Team – termingerecht und auf Wunsch auch in Ihrem Beisein.' },
        { step: '4', title: 'Übergabe & Pflege', description: 'Gartenübergabe mit Pflegeanleitung und optionalem Dauerpflegevertrag für die neuen Flächen.' },
      ]}
      faqs={[
        { q: 'Wie lange dauert eine Gartengestaltung?', a: 'Das hängt vom Umfang ab. Ein einfaches Umgestaltungsprojekt dauert 2–5 Tage, ein kompletter Neugarten je nach Größe 1–4 Wochen. Wir geben Ihnen bei der Planung einen konkreten Zeitplan.' },
        { q: 'Was kostet Gartengestaltung in Frankfurt?', a: 'Kleine Umgestaltungen beginnen ab ca. 1.500 €. Ein kompletter Neugarten liegt je nach Größe und Materialwahl zwischen 5.000 € und 50.000 €. Wir arbeiten mit verbindlichen Festpreisangeboten.' },
        { q: 'Übernehmen Sie auch die Genehmigungen für Teiche oder Bauten?', a: 'Für kleinere Gartenbaumaßnahmen sind in Frankfurt meist keine Genehmigungen erforderlich. Bei größeren Anlagen oder Bebauungsplänen beraten wir Sie und übernehmen bei Bedarf die Genehmigungseinholung.' },
        { q: 'Welche Pflanzen eignen sich für Frankfurts Klima?', a: 'Frankfurt hat ein vergleichsweise mildes Stadtklima. Geeignet sind mediterrane Kräuter, heimische Stauden, Ziergräser und viele Rosenarten. Wir erstellen Ihnen ein Bepflanzungskonzept, das zu Ihrem Garten und Ihrem Pflegeaufwand passt.' },
      ]}
      cta={{
        headline: 'Lassen Sie Ihren Traumgarten in Frankfurt Wirklichkeit werden',
        subline: 'Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir kommen zu Ihnen, besprechen Ihre Ideen und erstellen ein unverbindliches Konzept.',
        servicePreset: 'Gartengestaltung & Neuanlage',
      }}
    />
  );
}
