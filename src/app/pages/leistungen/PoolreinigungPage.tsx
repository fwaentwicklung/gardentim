import { Waves, Droplets, Clock, Award, Shield, CheckCircle, Sparkles, Activity } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function PoolreinigungPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Poolreinigung Frankfurt | Schwimmbad & Pool reinigen – Garden Time GmbH',
        description: 'Professionelle Poolreinigung in Frankfurt am Main ✓ Privatpool ✓ Hotelpool ✓ Wochenservic ✓ Saisonöffnung & -schließung ✓ Kostenloses Angebot. Garden Time GmbH.',
        keywords: 'Poolreinigung Frankfurt, Schwimmbadpflege Frankfurt, Pool reinigen Frankfurt, Poolservice Frankfurt, Saisonöffnung Pool Frankfurt, Poolwartung Frankfurt am Main',
      }}
      breadcrumb="Poolreinigung"
      hero={{
        badge: '✓ Poolreinigung Frankfurt',
        headline: 'Professionelle Poolreinigung in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Hygienisch reines Poolwasser, strahlend saubere Wände und Böden – für Privat-, Hotel- und Gewerbepools im Rhein-Main-Gebiet.',
        imageUrl: getImage('leistung:poolreinigung:hero'),
        checks: [
          'Wöchentliche Poolpflege & Reinigung',
          'Saisonöffnung & -schließung',
          'Bodensauger, Wände & Wasserlinienreinigung',
          'Filter- & Technikwartung',
        ],
      }}
      intro={{
        headline: 'Poolreinigung vom Profi – hygienisch, zuverlässig und regelmäßig',
        text1: 'Ein sauberer Pool ist eine Freude – ein ungepflegter eine Belastung. Garden Time übernimmt die professionelle Poolreinigung für Privathaushalte, Hotels, Wellness-Einrichtungen und Gewerbebetriebe in Frankfurt.',
        text2: 'Von der wöchentlichen Pflege über Filterwartung bis zur Saisonöffnung und -schließung – wir kümmern uns um alles und sorgen dafür, dass Sie Ihren Pool jederzeit sorgenfrei genießen können.',
        imageUrl: getImage('leistung:poolreinigung:secondary'),
        imageAlt: 'Poolreinigung Frankfurt',
      }}
      benefits={[
        { title: 'Gründliche Bodenreinigung', description: 'Automatischer und manueller Bodensauger beseitigt Schmutz, Algen und Ablagerungen vom Poolboden.', icon: Waves },
        { title: 'Wand- & Treppenreinigung', description: 'Gründliche Schrubbereinigung der Poolwände, Stufen und Wasserlinienbereich.', icon: Sparkles },
        { title: 'Filterwartung', description: 'Rückspülen des Sandfilters, Reinigung des Skimmers und Filterkorb-Kontrolle.', icon: Shield },
        { title: 'Saisonöffnung & -schließung', description: 'Frühjahrsöffnung inkl. Reinigung und Erstbefüllung sowie Winterabdeckung und Entleerung.', icon: Clock },
        { title: 'Wasserlinienreinigung', description: 'Entfernung von Fetträndern, Kalk und Ablagerungen an der Wasserlinie für einen sauberen Look.', icon: Droplets },
        { title: 'Regelmäßige Wartungsverträge', description: 'Wöchentliche oder zweiwöchentliche Pflege per Wartungsvertrag – zuverlässig und planbar.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unsere Poolreinigungsleistungen im Überblick',
        items: [
          ['Bodensaugen (manuell & automatisch)', 'Wandbürsten & Treppenreinigung', 'Wasserlinienreinigung'],
          ['Skimmer- & Filterkorbreinigung', 'Sandfilterrückspülung', 'Abdeckungsreinigung'],
          ['Saisonöffnung Frühjahr', 'Saisonschließung Herbst/Winter', 'Notfallreinigung bei Algenbefall'],
        ],
      }}
      steps={[
        { step: '01', title: 'Poolbesichtigung', description: 'Wir besichtigen Ihren Pool und Ihre Technik und erstellen ein passendes Pflegekonzept.' },
        { step: '02', title: 'Pflegevertrag & Termine', description: 'Sie wählen Ihren Pflegerhythmus – wir planen feste Termine und stimmen uns auf Ihre Nutzung ab.' },
        { step: '03', title: 'Regelmäßige Pflege', description: 'Zuverlässige Reinigung zum vereinbarten Termin – Sie kommen immer in einen sauberen Pool.' },
        { step: '04', title: 'Saisonöffnung & -schließung', description: 'Wir kümmern uns um die vollständige Saisonvorbereitung im Frühjahr und fachgerechte Winterisierung.' },
      ]}
      faqs={[
        { q: 'Wie oft sollte ein Pool gereinigt werden?', a: 'Im Sommer empfehlen wir wöchentliche Reinigung. In der Nebensaison reicht zweiwöchentliche oder monatliche Pflege.' },
        { q: 'Was kostet Poolreinigung?', a: 'Wöchentliche Poolreinigung beginnt ab ca. 80–150 € pro Einsatz je nach Poolgröße und Leistungsumfang. Saisonöffnung/-schließung werden separat berechnet.' },
        { q: 'Übernehmen Sie auch die Chemikalienversorgung?', a: 'Ja, auf Wunsch liefern wir alle benötigten Poolchemikalien (Chlor, pH-Minus, Flockmittel etc.) und dosieren sie fachgerecht.' },
        { q: 'Was tun bei Algenbefall?', a: 'Bei akutem Algenbefall führen wir eine Schockchlorung und gründliche Reinigung durch. Danach stabilisieren wir die Wasserchemie.' },
      ]}
      cta={{ headline: 'Poolreinigung in Frankfurt anfragen', subline: 'Kostenlose Erstbesichtigung & Angebot in 48 Stunden.', servicePreset: 'Poolreinigung' }}
    />
  );
}
