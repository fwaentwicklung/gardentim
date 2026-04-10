import { LayoutGrid, Hammer, Clock, Award, Ruler, Wrench, CheckCircle, Layers } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function TerrassenarbeitenPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Terrassenarbeiten Frankfurt | Terrassenbau & Terrassenplatten – Garden Time GmbH',
        description: 'Professioneller Terrassenbau in Frankfurt am Main ✓ Naturstein ✓ WPC-Dielen ✓ Betonplatten ✓ Holzterrassen ✓ Kostenloses Angebot. Garden Time GmbH – Ihr Terrassenbauer.',
        keywords: 'Terrassenbau Frankfurt, Terrasse pflastern Frankfurt, Terrassenplatten Frankfurt, WPC-Terrasse Frankfurt, Holzterrasse Frankfurt, Terrassenarbeiten Frankfurt am Main',
      }}
      breadcrumb="Terrassenarbeiten"
      hero={{
        badge: '✓ Terrassenarbeiten Frankfurt',
        headline: 'Terrassenbau & Terrassengestaltung in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Ihre Traumterrasse – aus Naturstein, WPC, Holz oder Betonplatten. Wir planen, bauen und übergeben termingerecht.',
        imageUrl: getImage('leistung:terrassenarbeiten:hero'),
        checks: [
          'Naturstein, WPC, Holz & Betonplatten',
          'Unterkonstruktion & Drainage',
          'Überdachungen & Pergolen',
          'Komplettlösung aus einer Hand',
        ],
      }}
      intro={{
        headline: 'Terrassenbau mit System – von der Planung bis zur Fertigstellung',
        text1: 'Eine gut geplante Terrasse wertet Ihr Zuhause erheblich auf und schafft hochwertigen Wohnraum im Freien. Garden Time baut Terrassen für Privathaushalte und Gewerbeobjekte in Frankfurt.',
        text2: 'Egal ob Naturstein, WPC-Dielen, Holzbohlen oder großformatige Betonplatten – wir bauen Ihre Terrasse mit fachgerechter Unterkonstruktion, optimaler Drainage und sauberem Abschluss.',
        imageUrl: getImage('leistung:terrassenarbeiten:secondary'),
        imageAlt: 'Terrassenarbeiten Frankfurt',
      }}
      benefits={[
        { title: 'Alle Terrassenmaterialien', description: 'Naturstein, WPC, Holz (Bangkirai, Douglasie), Porzellan, Beton – wir beraten zur richtigen Wahl.', icon: Layers },
        { title: 'Fachgerechte Unterkonstruktion', description: 'Solide Fundamentierung und optimale Drainage verhindern Absacken und Wasserprobleme.', icon: Hammer },
        { title: 'Maßplanung', description: 'Wir planen Ihre Terrasse individuell nach Ihren Wünschen, Maßen und Budget.', icon: Ruler },
        { title: 'Überdachungen & Pergolen', description: 'Optional planen und bauen wir Terrassenüberdachungen, Pergolen und Sichtschutzlösungen.', icon: LayoutGrid },
        { title: 'Schnelle Umsetzung', description: 'Klare Abläufe und erfahrenes Team sorgen für eine zügige und pünktliche Fertigstellung.', icon: Clock },
        { title: 'Wartung & Pflege', description: 'Wir beraten zur richtigen Terrassenpflege und übernehmen auch die regelmäßige Instandhaltung.', icon: CheckCircle },
      ]}
      leistungsumfang={{
        headline: 'Unsere Terrassenleistungen im Überblick',
        items: [
          ['Naturstein-Terrassen', 'WPC-Terrassendielen', 'Holzterrassen (Bangkirai, Douglasie)'],
          ['Porzellanplatten & Großformate', 'Betonplatten & Betonsteinplatten', 'Unterkonstruktion & Drainage'],
          ['Terrassenüberdachungen', 'Pergolen & Sonnensegel', 'Beleuchtung & Steckdosen'],
        ],
      }}
      steps={[
        { step: '01', title: 'Beratung & Planung', description: 'Wir besichtigen die Fläche, beraten zur Materialwahl und erstellen einen Gestaltungsplan.' },
        { step: '02', title: 'Angebot & Freigabe', description: 'Sie erhalten ein detailliertes Angebot und wir legen gemeinsam den Ausführungstermin fest.' },
        { step: '03', title: 'Bau & Übergabe', description: 'Unser Team baut Ihre Terrasse fachgerecht und sauber – pünktlich zum vereinbarten Termin.' },
        { step: '04', title: 'Abnahme & Pflegehinweise', description: 'Gemeinsame Abnahme Ihrer neuen Terrasse und individuelle Hinweise zur richtigen Pflege des Materials.' },
      ]}
      faqs={[
        { q: 'Welches Terrassenmaterial empfehlen Sie?', a: 'Das hängt von Nutzung, Budget und Optik ab. Naturstein ist langlebig und hochwertig, WPC wartungsarm, Holz natürlich schön. Wir beraten Sie gerne.' },
        { q: 'Wie lange dauert der Bau einer Terrasse?', a: 'Eine typische Terrasse (30–60 m²) ist in 2–5 Arbeitstagen fertig. Der genaue Zeitrahmen steht im Angebot.' },
        { q: 'Bauen Sie auch Überdachungen?', a: 'Ja, wir planen und bauen Terrassenüberdachungen aus Aluminium, Holz oder Stahl sowie Pergolen und freistehende Pavillons.' },
        { q: 'Was kostet eine Terrasse?', a: 'Die Kosten hängen von Material, Größe und Untergrund ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot.' },
      ]}
      cta={{ headline: 'Terrassenbau in Frankfurt anfragen', subline: 'Kostenloses Angebot in 48 Stunden.', servicePreset: 'Terrassenarbeiten' }}
    />
  );
}
