import { Activity, Droplets, Clock, Award, Shield, CheckCircle, BarChart2, Waves } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function PoolmessungPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Poolmessung Frankfurt | Wasseranalyse & Wasserchemie Pool – Garden Time GmbH',
        description: 'Professionelle Poolmessung & Wasseranalyse in Frankfurt ✓ pH-Wert ✓ Chlorgehalt ✓ Gesamthärte ✓ Dosierung & Beratung ✓ Kostenloses Angebot. Garden Time GmbH.',
        keywords: 'Poolmessung Frankfurt, Wasseranalyse Pool Frankfurt, Poolchemie Frankfurt, pH Wert Pool Frankfurt, Wasserchemie Schwimmbad Frankfurt, Poolwassertest Frankfurt',
      }}
      breadcrumb="Poolmessung"
      hero={{
        badge: '✓ Poolmessung Frankfurt',
        headline: 'Poolmessung & Wasseranalyse in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Perfekte Wasserchemie für kristallklares, hygienisches Poolwasser – Messung, Analyse, Dosierung und Beratung aus einer Hand.',
        imageUrl: getImage('leistung:poolmessung:hero'),
        checks: [
          'Vollständige Wasseranalyse vor Ort',
          'pH-, Chlor-, Redox- & Härtewert-Messung',
          'Professionelle Chemikaliendosierung',
          'Dokumentation & Empfehlungen',
        ],
      }}
      intro={{
        headline: 'Poolmessung & Wasserchemie – für sicheres Badevergnügen',
        text1: 'Die Wasserchemie eines Pools ist entscheidend für Hygiene, Materialschutz und Komfort. Falsche Werte reizen Augen und Haut, schädigen die Poolauskleidung und fördern Algenwachstum. Garden Time misst und optimiert Ihre Wasserchemie.',
        text2: 'Mit professionellen Messgeräten erfassen wir alle relevanten Parameter, erklären die Ergebnisse verständlich und dosieren die notwendigen Chemikalien fachgerecht – für dauerhaft gesundes Poolwasser.',
        imageUrl: getImage('leistung:poolmessung:secondary'),
        imageAlt: 'Poolmessung Frankfurt',
      }}
      benefits={[
        { title: 'Vollständige Wasseranalyse', description: 'pH, Freies & Gebundenes Chlor, Redox, Gesamthärte, Karbonathärte, Cyansäure – wir messen alles.', icon: Activity },
        { title: 'Professionelle Messgeräte', description: 'Wir nutzen kalibrierte elektronische Messgeräte für präzise Ergebnisse – weit genauer als Testtabs.', icon: BarChart2 },
        { title: 'Chemikaliendosierung', description: 'Fachgerechte Dosierung aller Poolchemikalien nach Messergebnis – kein Über- oder Unterdosieren.', icon: Droplets },
        { title: 'Verständliche Auswertung', description: 'Wir erklären Ihnen alle Messwerte und geben klare Handlungsempfehlungen.', icon: CheckCircle },
        { title: 'Dokumentation', description: 'Alle Messwerte werden protokolliert – so lässt sich die Wasserqualität langfristig verfolgen.', icon: Shield },
        { title: 'Kombiniert mit Reinigung', description: 'Messungen können mit der regulären Poolreinigung kombiniert werden – effizient und günstig.', icon: Waves },
      ]}
      leistungsumfang={{
        headline: 'Unsere Poolmessungsleistungen im Überblick',
        items: [
          ['pH-Wert Messung & Korrektur', 'Freies Chlor Messung & Dosierung', 'Redoxpotential (mV) Messung'],
          ['Gesamthärte & Karbonathärte', 'Cyansäure-Messung', 'Algizid-Kontrolle'],
          ['Schockchlorierung', 'Winterchemikalien-Dosierung', 'Wasserpflegeberatung'],
        ],
      }}
      steps={[
        { step: '01', title: 'Messungstermin', description: 'Wir kommen zu Ihrem Pool und entnehmen Wasserproben an verschiedenen Stellen für aussagekräftige Ergebnisse.' },
        { step: '02', title: 'Analyse & Ergebnis', description: 'Mit professionellen Messgeräten analysieren wir alle relevanten Parameter und erklären die Werte.' },
        { step: '03', title: 'Dosierung & Empfehlung', description: 'Wir dosieren alle benötigten Chemikalien und geben Ihnen konkrete Pflegeempfehlungen.' },
      ]}
      faqs={[
        { q: 'Wie oft sollte Poolwasser gemessen werden?', a: 'Im aktiven Betrieb mindestens einmal pro Woche, idealerweise zweimal. Bei stark genutzten Pools oder Hochsommer auch täglich.' },
        { q: 'Welche Werte sind ideal für Poolwasser?', a: 'pH 7,0–7,4, Freies Chlor 0,3–0,6 mg/l, Redox >750 mV, Gesamthärte 200–500 mg/l. Wir erklären Ihnen die Zusammenhänge.' },
        { q: 'Liefern Sie auch die benötigten Chemikalien?', a: 'Ja, wir liefern alle gängigen Poolchemikalien (Chlor, pH-Minus, pH-Plus, Flockmittel, Algizid) in professioneller Qualität.' },
        { q: 'Kann ich die Messung mit der Reinigung kombinieren?', a: 'Ja, wir empfehlen die Kombination – Messung und Reinigung beim gleichen Termin spart Zeit und Kosten.' },
      ]}
      cta={{ headline: 'Poolmessung in Frankfurt anfragen', subline: 'Kostenloses Erstgespräch & Angebot in 48 Stunden.', servicePreset: 'Poolmessung' }}
    />
  );
}
