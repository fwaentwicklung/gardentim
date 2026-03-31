import { Layers, Hammer, Clock, Award, Shield, CheckCircle, Wrench, Sparkles } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GraupflegePage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Graupflege Frankfurt | Pflege von Grau- & Hartflächen – Garden Time GmbH',
        description: 'Professionelle Graupflege in Frankfurt ✓ Reinigung & Pflege von Pflasterflächen ✓ Wege & Plätze ✓ Parkplätze & Höfe ✓ Unkrautbekämpfung. Garden Time GmbH Frankfurt.',
        keywords: 'Graupflege Frankfurt, Hartflächenpflege Frankfurt, Pflasterflächen reinigen Frankfurt, Grauflächen Frankfurt, Wegesanierung Frankfurt, Parkplatzpflege Frankfurt',
      }}
      breadcrumb="Graupflege"
      hero={{
        badge: '✓ Graupflege Frankfurt',
        headline: 'Graupflege & Hartflächenpflege in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Saubere, sichere und gepflegte Hartflächen – Pflasterwege, Parkplätze, Höfe und Plätze für Gewerbe und Wohnanlagen.',
        imageUrl: getImage('leistung:graupflege:hero'),
        checks: [
          'Pflege & Reinigung von Pflasterflächen',
          'Unkrautbekämpfung in Fugen',
          'Parkplatz- & Hofpflege',
          'Sanierung & Ausbesserung',
        ],
      }}
      intro={{
        headline: 'Graupflege – für saubere und sichere Verkehrsflächen',
        text1: 'Hartflächen wie Pflasterwege, Parkplätze und Höfe benötigen regelmäßige Pflege, um sicher, sauber und optisch ansprechend zu bleiben. Garden Time übernimmt die professionelle Graupflege für Gewerbe und Wohnanlagen.',
        text2: 'Wir bekämpfen Unkraut in Fugen, reinigen Oberflächen, entfernen Ablagerungen und reparieren beschädigte Bereiche – damit Ihre Verkehrsflächen dauerhaft in bestem Zustand sind.',
        imageUrl: getImage('leistung:graupflege:secondary'),
        imageAlt: 'Graupflege Frankfurt',
      }}
      benefits={[
        { title: 'Unkrautbekämpfung', description: 'Mechanische und chemische Unkrautbekämpfung in Fugen, Ritzen und auf Pflasterflächen.', icon: CheckCircle },
        { title: 'Flächenreinigung', description: 'Kehren, Absaugen, Hochdruckreinigung – für saubere Pflasterflächen und Betonflächen.', icon: Sparkles },
        { title: 'Fugenreinigung & -sanierung', description: 'Reinigung und Neuverfugung ausgespülter oder verwitterter Fugen für mehr Stabilität.', icon: Layers },
        { title: 'Ausbesserung & Reparatur', description: 'Wir reparieren abgesackte Stellen, ersetzen beschädigte Steine und sichern Stolperfallen.', icon: Hammer },
        { title: 'Winterdienstergänzung', description: 'Im Winter übernehmen wir Räumen, Streuen und Streumittelreinigung auf Ihren Flächen.', icon: Shield },
        { title: 'Jahrespflegeverträge', description: 'Regelmäßige Pflege per Jahresvertrag – planbar, zuverlässig und zu festen Preisen.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unsere Graupflegeleistungen im Überblick',
        items: [
          ['Kehren & Saugen von Pflasterflächen', 'Hochdruckreinigung', 'Unkrautbekämpfung in Fugen'],
          ['Fugenreinigung & -sanierung', 'Ausbesserung & Steintausch', 'Ablagerungen entfernen'],
          ['Parkplatzmarkierungspflege', 'Entwässerungsrinnenpflege', 'Streumittelreinigung (nach Winter)'],
        ],
      }}
      steps={[
        { step: '01', title: 'Flächenbesichtigung', description: 'Wir besichtigen Ihre Hartflächen und erstellen einen Pflegeplan inkl. notwendiger Maßnahmen.' },
        { step: '02', title: 'Angebot & Terminplanung', description: 'Transparentes Angebot mit klar definierten Leistungen und Pflegeintervallen.' },
        { step: '03', title: 'Regelmäßige Pflege', description: 'Zuverlässige Durchführung aller Pflegemaßnahmen – mit Protokoll und Qualitätskontrolle.' },
      ]}
      faqs={[
        { q: 'Was ist Graupflege genau?', a: 'Graupflege bezeichnet die Pflege und Reinigung von Hartflächen (Grauflächen) wie Pflasterwegen, Parkplätzen, Höfen und Plätzen – im Gegensatz zur Grünpflege.' },
        { q: 'Wie bekämpfen Sie Unkraut in Fugen?', a: 'Wir setzen mechanische Methoden (Bürstung, Auskratzen), Heißwasserverfahren und bei Bedarf zugelassene Herbizide ein.' },
        { q: 'Können Sie Graupflege mit Grünpflege kombinieren?', a: 'Ja, viele unserer Kunden haben kombinierte Verträge für Grün- und Graupflege – das ist meist effizienter und günstiger.' },
        { q: 'Was kostet Graupflege?', a: 'Der Preis hängt von Fläche und Leistungsumfang ab. Wir erstellen Ihnen ein kostenloses Angebot nach Besichtigung.' },
      ]}
      cta={{ headline: 'Graupflege in Frankfurt anfragen', subline: 'Kostenlose Besichtigung & Angebot innerhalb von 48 Stunden.', servicePreset: 'Graupflege' }}
    />
  );
}
