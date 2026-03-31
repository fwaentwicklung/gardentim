import { Droplets, Cpu, Leaf, Shield, Wrench, Clock, Award, Zap } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function BewaesserungPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Bewässerungsanlagen Frankfurt | Automatische Gartenbewässerung – Garden Time GmbH',
        description: 'Automatische Bewässerungsanlagen in Frankfurt ✓ Planung ✓ Installation ✓ Wartung ✓ Hunter & Rain-Bird Systeme ✓ Tropfbewässerung & Rasensprenger. Garden Time GmbH Frankfurt.',
        keywords: 'Bewässerungsanlage Frankfurt, automatische Gartenbewässerung Frankfurt, Rasensprenger Frankfurt, Tropfbewässerung Frankfurt, Bewässerungssystem Frankfurt, Gartenbewässerung Rhein-Main',
      }}
      breadcrumb="Bewässerungsanlagen"
      hero={{
        badge: '✓ Bewässerungsanlagen Frankfurt',
        headline: 'Automatische Bewässerung für',
        headlineHighlight: 'Gärten & Außenanlagen',
        subline: 'Nie mehr vergessen zu gießen – smarte Bewässerungsanlagen von Garden Time für perfekt bewässerte Rasenflächen, Beete und Dachterrassen in Frankfurt.',
        imageUrl: getImage('leistung:bewaesserung:hero'),
        checks: [
          'Planung & Installation zertifizierter Systeme',
          'Hunter, Rain-Bird & Gardena Komponenten',
          'Smart-Home-Integration & App-Steuerung',
          'Winterfest-Einblasung & Wartungsservice',
        ],
      }}
      intro={{
        headline: 'Smarte Bewässerung spart Zeit, Wasser und Geld',
        text1: 'Eine professionell geplante Bewässerungsanlage ist die intelligente Lösung für Garten- und Grundstückseigentümer in Frankfurt, die ihren Grünanlagen das Beste gönnen wollen – ohne selbst täglich Hand anlegen zu müssen. Moderne Systeme bewässern Rasen, Beete, Hecken und Kübelpflanzen vollautomatisch, bedarfsgerecht und wassersparend.',
        text2: 'Garden Time GmbH plant, installiert und wartet automatische Bewässerungsanlagen für Privatgärten, Unternehmensliegenschaften und öffentliche Grünanlagen im Rhein-Main-Gebiet. Wir nutzen hochwertige Komponenten von Hunter, Rain-Bird und Gardena und integrieren auf Wunsch bodenfeuchtegesteuerte Systeme, die nur bewässern, wenn der Boden es wirklich braucht.',
        imageUrl: getImage('leistung:bewaesserung:secondary'),
        imageAlt: 'Automatische Bewässerungsanlage Frankfurt',
      }}
      benefits={[
        { title: 'Wassereinsparung', description: 'Bedarfsgerechte Bewässerung reduziert Wasserverbrauch um bis zu 50% im Vergleich zur manuellen Bewässerung.', icon: Droplets },
        { title: 'Smarte Steuerung', description: 'App-gesteuerte Systeme mit Wetterdaten-Integration – Ihr Garten wird nur bewässert, wenn es nötig ist.', icon: Cpu },
        { title: 'Pflanzengerecht', description: 'Verschiedene Bewässerungszonen für Rasen, Hecken, Beete und Kübel – jede Pflanze bekommt genau das Richtige.', icon: Leaf },
        { title: 'Frostsicher', description: 'Frostschutzprogramm und jährliche Wintereinblasung schützen Ihre Anlage vor Frostschäden.', icon: Shield },
        { title: 'Wartungsverträge', description: 'Regelmäßige Inspektion, Einstellung und Reparatur – Ihre Anlage läuft immer zuverlässig.', icon: Wrench },
        { title: 'Schnelle Installation', description: 'Professionelle Installation ohne lange Baustelle – die meisten Anlagen sind in 1–3 Tagen installiert.', icon: Clock },
      ]}
      leistungsumfang={{
        headline: 'Unser Bewässerungsanlagen-Angebot',
        items: [
          ['Bedarfsanalyse & Systemplanung', 'Verlegung von Bewässerungsleitungen', 'Installation Regner & Sprinkler', 'Tropf- & Tröpfchenbewässerung', 'Micro-Bewässerung für Beete'],
          ['Steuereinheiten & Zeitschalter', 'Smart-Home & WLAN-Steuerung', 'Bodenfeuchtesensoren', 'Wetterstation-Integration', 'App-Konfiguration & Einweisung'],
          ['Jährliche Inbetriebnahme (Frühjahr)', 'Winterabschaltung & Einblasung', 'Reparatur & Ersatzteile', 'Erweiterung bestehender Anlagen', 'Druckprüfung & Leckagetest'],
        ],
      }}
      steps={[
        { step: '1', title: 'Bedarfsanalyse', description: 'Wir analysieren Ihre Flächen, den Wasserdruck und die Bodenbeschaffenheit vor Ort in Frankfurt.' },
        { step: '2', title: 'Systemplanung', description: 'Maßgeschneideter Bewässerungsplan mit Zonenaufteilung, Komponentenauswahl und Kostenaufstellung.' },
        { step: '3', title: 'Installation', description: 'Fachgerechte Installation mit minimaler Beeinträchtigung des Gartens – meist in 1–3 Tagen.' },
        { step: '4', title: 'Einweisung & Wartung', description: 'Einweisung in die Steuerung und optional ein Jahreswartungsvertrag für dauerhaften Betrieb.' },
      ]}
      faqs={[
        { q: 'Lohnt sich eine Bewässerungsanlage für einen kleinen Garten?', a: 'Ja! Schon ab 80 m² Rasenfläche amortisiert sich eine automatische Bewässerungsanlage durch Wasserersparnis und Zeitgewinn. Wir bieten auch kompakte Systeme für kleinere Gärten ab ca. 1.200 € an.' },
        { q: 'Was kostet eine Bewässerungsanlage in Frankfurt?', a: 'Eine einfache Rasenbewässerung beginnt ab ca. 1.500 €. Komplette Systeme für größere Gärten liegen zwischen 3.000 und 15.000 €. Wir erstellen Ihnen ein individuelles Angebot nach Besichtigung.' },
        { q: 'Können bestehende Anlagen erweitert werden?', a: 'Ja, wir können in der Regel bestehende Bewässerungsanlagen um weitere Zonen erweitern oder defekte Komponenten reparieren – auch von anderen Herstellern.' },
        { q: 'Muss ich die Anlage im Winter abschalten?', a: 'Ja, vor dem ersten Frost muss das Wasserleitungssystem eingeblasen werden. Garden Time bietet diesen Service als jährlichen Wartungsvertrag an – damit nichts einfriert.' },
      ]}
      cta={{
        headline: 'Automatische Bewässerung für Ihren Garten in Frankfurt',
        subline: 'Fordern Sie jetzt Ihre kostenlose Beratung an. Wir planen Ihre individuelle Bewässerungslösung und erstellen ein Festpreisangebot.',
        servicePreset: 'Bewässerungsanlagen',
      }}
    />
  );
}
