import { Layers, Shield, Clock, Award, Ruler, Hammer, CheckCircle, Wrench } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function PflasterarbeitenPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Pflasterarbeiten Frankfurt | Hofpflasterung & Wegebau – Garden Time GmbH',
        description: 'Professionelle Pflasterarbeiten in Frankfurt am Main ✓ Einfahrten ✓ Terrassen ✓ Wege & Plätze ✓ Naturstein & Betonstein ✓ Kostenloses Angebot. Garden Time GmbH – Ihr Pflasterbauer in Frankfurt.',
        keywords: 'Pflasterarbeiten Frankfurt, Hofpflasterung Frankfurt, Einfahrt pflastern Frankfurt, Wegebau Frankfurt, Natursteinpflaster Frankfurt, Pflasterer Frankfurt am Main',
      }}
      breadcrumb="Pflasterarbeiten"
      hero={{
        badge: '✓ Pflasterarbeiten Frankfurt',
        headline: 'Professionelle Pflasterarbeiten in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Von der Einfahrt über Terrassen bis zu Gehwegen – wir verlegen Pflaster fachgerecht, dauerhaft und mit sauberem Ergebnis.',
        imageUrl: getImage('leistung:pflasterarbeiten:hero'),
        checks: [
          'Einfahrten, Höfe & Gehwege',
          'Natur- & Betonsteinpflaster',
          'Fachgerechte Unterbauarbeiten',
          'Kostenloser Besichtigungstermin',
        ],
      }}
      intro={{
        headline: 'Pflasterarbeiten mit Qualität und Langlebigkeit',
        text1: 'Wir übernehmen alle Pflasterarbeiten rund um Ihr Haus oder Gewerbeobjekt in Frankfurt. Von der Vorbereitung des Untergrunds über den fachgerechten Einbau bis zur sauberen Verfugung – alles aus einer Hand.',
        text2: 'Ob Natursteinpflaster, Betonstein, Klinker oder Porzellanplatten – wir beraten Sie zur richtigen Materialwahl und setzen Ihr Projekt termingerecht um.',
        imageUrl: getImage('leistung:pflasterarbeiten:secondary'),
        imageAlt: 'Pflasterarbeiten Frankfurt',
      }}
      benefits={[
        { title: 'Fachgerechter Untergrundaufbau', description: 'Tragfähige Fundamente verhindern Absacken und sorgen für jahrzehntelange Haltbarkeit.', icon: Layers },
        { title: 'Große Materialauswahl', description: 'Naturstein, Beton, Klinker, Porzellan – wir beraten Sie zur optimalen Wahl für Ihren Bedarf.', icon: Ruler },
        { title: 'Saubere Ausführung', description: 'Präzises Verlegen, saubere Fugen und gepflegte Baustelle – so liefern wir jedes Projekt ab.', icon: CheckCircle },
        { title: 'Erfahrenes Team', description: 'Unsere Fachkräfte haben jahrelange Erfahrung im Verlegen aller Pflasterarten.', icon: Award },
        { title: 'Schnelle Umsetzung', description: 'Effiziente Arbeitsabläufe sorgen dafür, dass Ihr Projekt zügig und termintreu fertiggestellt wird.', icon: Clock },
        { title: 'Wartung & Reparatur', description: 'Auch bei bestehenden Pflasterflächen übernehmen wir Ausbesserungen und Neuverlegungen.', icon: Wrench },
      ]}
      leistungsumfang={{
        headline: 'Unsere Pflasterarbeiten im Überblick',
        items: [
          ['Einfahrten & Carports', 'Hofpflasterung', 'Gehwege & Fußwege'],
          ['Terrassen & Platzbefestigungen', 'Stufen & Treppenanlagen', 'Natursteinpflaster'],
          ['Betonstein & Klinker', 'Reparatur & Ausbesserung', 'Randeinfassung & Bordsteine'],
        ],
      }}
      steps={[
        { step: '01', title: 'Besichtigung & Beratung', description: 'Wir kommen zu Ihnen vor Ort, messen die Fläche aus und beraten zur Materialwahl.' },
        { step: '02', title: 'Angebot & Planung', description: 'Sie erhalten innerhalb von 48 Stunden ein detailliertes Festpreisangebot.' },
        { step: '03', title: 'Fachgerechte Ausführung', description: 'Unser Team führt alle Pflasterarbeiten sauber und termingerecht durch.' },
        { step: '04', title: 'Abnahme & Nachbetreuung', description: 'Gemeinsame Abnahme, Reinigung der Fläche und Hinweise zur Pflege – wir sind auch danach für Sie da.' },
      ]}
      faqs={[
        { q: 'Welche Pflastermaterialien bieten Sie an?', a: 'Wir verlegen Natursteine (Granit, Basalt, Sandstein), Betonpflaster, Klinker, Porzellanplatten und mehr. Bei der Materialwahl beraten wir Sie gerne.' },
        { q: 'Wie lange dauern Pflasterarbeiten?', a: 'Je nach Flächengröße und Material zwischen einem und mehreren Tagen. Eine genaue Zeitplanung erhalten Sie mit Ihrem Angebot.' },
        { q: 'Machen Sie auch Reparaturen an bestehenden Pflasterflächen?', a: 'Ja, wir reparieren abgesackte Stellen, tauschen beschädigte Steine aus und verlegen bei Bedarf ganze Flächen neu.' },
        { q: 'Arbeiten Sie in ganz Frankfurt?', a: 'Wir arbeiten in Frankfurt am Main und dem gesamten Rhein-Main-Gebiet.' },
      ]}
      cta={{ headline: 'Pflasterarbeiten in Frankfurt anfragen', subline: 'Kostenloses Angebot innerhalb von 48 Stunden.', servicePreset: 'Pflasterarbeiten' }}
    />
  );
}
