import { Leaf, Droplets, Clock, Award, Sun, Sprout, CheckCircle, Layers } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function RasenanlagenPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Rasenanlagen Frankfurt | Rasen anlegen & Rollrasen – Garden Time GmbH',
        description: 'Professionelle Rasenanlagen in Frankfurt am Main ✓ Neuanlage ✓ Rollrasen ✓ Rasenrenovierung ✓ Sportrasen ✓ Kostenloses Angebot. Garden Time GmbH – Ihr Rasenspezialist.',
        keywords: 'Rasenanlagen Frankfurt, Rasen anlegen Frankfurt, Rollrasen Frankfurt, Rasenrenovierung Frankfurt, Neuanlage Rasen Frankfurt, Rasensaat Frankfurt',
      }}
      breadcrumb="Rasenanlagen"
      hero={{
        badge: '✓ Rasenanlagen Frankfurt',
        headline: 'Rasenanlage & Rollrasen in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Von der Bodenvorbereitung über Rasensaat bis zum Rollrasen – wir legen Ihren Rasen fachgerecht an und Sie können ihn sofort genießen.',
        imageUrl: getImage('leistung:rasenanlagen:hero'),
        checks: [
          'Neuanlage & Rasenrenovierung',
          'Rollrasen �� sofort nutzbar',
          'Bodenvorbereitung & Düngung',
          'Sport-, Spiel- & Zierrasen',
        ],
      }}
      intro={{
        headline: 'Rasenanlagen für jeden Anspruch – von privat bis gewerblich',
        text1: 'Ein satter grüner Rasen ist das Herzstück eines schönen Gartens. Garden Time legt Rasenflächen jeder Größe fachgerecht an – von kleinen Privatgärten bis zu großen Gewerbeflächen und Sportanlagen im Rhein-Main-Gebiet.',
        text2: 'Wir kümmern uns um alles: Bodenaushub, Planierung, Verbesserung des Bodens, Rollrasen oder Ansaat sowie die erste Pflege bis zur vollständigen Etablierung.',
        imageUrl: getImage('leistung:rasenanlagen:secondary'),
        imageAlt: 'Rasenanlagen Frankfurt',
      }}
      benefits={[
        { title: 'Rollrasen', description: 'Sofort nutzbarer, fertig gewachsener Rasen – ideal wenn Sie schnell ein grünes Ergebnis möchten.', icon: Leaf },
        { title: 'Ansaatverfahren', description: 'Kostengünstige Neuanlage per Saat mit der richtigen Rasenmischung für Ihren Standort.', icon: Sprout },
        { title: 'Bodenvorbereitung', description: 'Fachgerechter Aushub, Planierung, Bodenverbesserung und Düngung als Grundlage für gesunden Rasen.', icon: Layers },
        { title: 'Bewässerungssysteme', description: 'Automatische Bewässerung von Anfang an – damit Ihr Rasen optimal mit Wasser versorgt wird.', icon: Droplets },
        { title: 'Rasenrenovierung', description: 'Vertikutieren, Nachsäen, Nachschneiden – wir retten auch stark beschädigte Rasenflächen.', icon: CheckCircle },
        { title: 'Dauerhafte Pflege', description: 'Auf Wunsch übernehmen wir die regelmäßige Rasenpflege per Jahresvertrag.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unsere Rasenanlagenleistungen im Überblick',
        items: [
          ['Rollrasen legen', 'Rasenneuanlage per Saat', 'Zierrasen & Gebrauchsrasen'],
          ['Sport- & Spielrasen', 'Rasenrenovierung', 'Vertikutieren & Nachsäen'],
          ['Bodenvorbereitung & Planierung', 'Drainage & Bewässerung', 'Düngeberatung & Erstpflege'],
        ],
      }}
      steps={[
        { step: '01', title: 'Besichtigung & Bodenanalyse', description: 'Wir analysieren Ihren Boden, planen die Fläche aus und wählen die passende Rasensorte.' },
        { step: '02', title: 'Bodenvorbereitung', description: 'Aushub, Planierung, Bodenverbesserung und Vordüngung schaffen die optimale Grundlage.' },
        { step: '03', title: 'Anlage & Erstpflege', description: 'Rollrasen oder Ansaat werden fachmännisch eingebracht – inkl. Anwässern und Erstpflege.' },
        { step: '04', title: 'Einweisung & Nachbetreuung', description: 'Wir erklären Ihnen die optimale Rasenpflege und stehen bei Fragen auch nach der Anlage für Sie bereit.' },
      ]}
      faqs={[
        { q: 'Rollrasen oder Ansaat – was empfehlen Sie?', a: 'Rollrasen ist sofort nutzbar und hat ein sofortiges Ergebnis, ist aber teurer. Rasensaat ist günstiger, benötigt aber 6–10 Wochen bis zur vollen Nutzbarkeit. Wir beraten Sie.' },
        { q: 'Wann ist die beste Zeit für Rasenanlage?', a: 'Rasen lässt sich von April bis Oktober anlegen. Ideale Zeiten sind Frühjahr (April/Mai) und Frühherbst (August/September).' },
        { q: 'Wie groß muss der Garten mindestens sein?', a: 'Wir legen Rasenflächen ab ca. 30 m² an. Für kleinste Flächen oder komplexe Formen lohnt sich oft Rollrasen.' },
        { q: 'Was kostet eine Rasenanlage?', a: 'Die Kosten richten sich nach Fläche, Methode (Rollrasen oder Ansaat) und Bodenaufwand. Wir erstellen Ihnen nach einer Besichtigung ein kostenloses und transparentes Angebot.' },
      ]}
      cta={{ headline: 'Rasenanlagen in Frankfurt anfragen', subline: 'Kostenlose Beratung & Angebot innerhalb von 48 Stunden.', servicePreset: 'Rasenanlagen' }}
    />
  );
}
