import { Sprout, Leaf, Clock, Award, Droplets, Sun, CheckCircle, Palette } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function BepflanzungenPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Bepflanzungen Frankfurt | Beet & Gartengestaltung mit Pflanzen – Garden Time GmbH',
        description: 'Professionelle Bepflanzungen in Frankfurt am Main ✓ Staudenpflanzungen ✓ Gehölze & Sträucher ✓ Dachbegrünung ✓ Saisonbepflanzung ✓ Kostenloses Angebot. Garden Time GmbH.',
        keywords: 'Bepflanzung Frankfurt, Pflanzung Frankfurt, Staudenpflanzung Frankfurt, Gehölzpflanzung Frankfurt, Beetgestaltung Frankfurt, Bepflanzungsplan Frankfurt',
      }}
      breadcrumb="Bepflanzungen"
      hero={{
        badge: '✓ Bepflanzungen Frankfurt',
        headline: 'Professionelle Bepflanzungen in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Wir planen und setzen Bepflanzungen um, die zu Ihrem Standort passen – von der Beetgestaltung bis zur Dachbegrünung.',
        imageUrl: getImage('leistung:bepflanzungen:hero'),
        checks: [
          'Beet- & Staudenpflanzungen',
          'Gehölze, Sträucher & Bäume',
          'Saisonale Wechselbepflanzung',
          'Dachbegrünung & Fassadenbegrünung',
        ],
      }}
      intro={{
        headline: 'Bepflanzungen, die zu Ihrem Standort und Stil passen',
        text1: 'Die richtige Pflanzenwahl macht den Unterschied zwischen einem Garten, der immer neu bepflanzt werden muss, und einer dauerhaft schönen Anlage. Garden Time erstellt Bepflanzungspläne, die auf Ihren Standort, Boden und Pflegeaufwand abgestimmt sind.',
        text2: 'Vom Beetdesign mit Stauden und Gräsern über Heckenpflanzungen bis zur Dachbegrünung – wir beschaffen, pflanzen und pflegen auf Wunsch langfristig.',
        imageUrl: getImage('leistung:bepflanzungen:secondary'),
        imageAlt: 'Bepflanzungen Frankfurt',
      }}
      benefits={[
        { title: 'Standortgerechte Planung', description: 'Wir wählen Pflanzen nach Standort, Bodenverhältnissen, Licht und gewünschtem Pflegeaufwand.', icon: Sun },
        { title: 'Große Pflanzenauswahl', description: 'Stauden, Gräser, Gehölze, Rosen, Saisonpflanzen – wir beschaffen alle Pflanzen zu fairen Preisen.', icon: Sprout },
        { title: 'Saisonale Wechselbepflanzung', description: 'Frühjahrs-, Sommer- und Herbstbepflanzung für Kübel, Beete und Eingangsbereiche.', icon: Palette },
        { title: 'Dauerhaft schöne Beete', description: 'Staudenpflanzungen mit mehrstufiger Blütenfolge sorgen für Farbigkeit das ganze Jahr.', icon: Leaf },
        { title: 'Dach- & Fassadenbegrünung', description: 'Extensive und intensive Dachbegrünung sowie Fassadenbegrünung für Gebäude aller Art.', icon: CheckCircle },
        { title: 'Pflegeverträge', description: 'Wir übernehmen die regelmäßige Pflege aller bepflanzten Flächen auf Wunsch per Jahresvertrag.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unsere Bepflanzungsleistungen im Überblick',
        items: [
          ['Staudenpflanzungen', 'Rosenpflanzungen', 'Gräser & Bambus'],
          ['Gehölze & Sträucher', 'Kletterpflanzen & Rankhilfen', 'Bäume & Obstbäume'],
          ['Saisonale Wechselbepflanzung', 'Dachbegrünung', 'Fassadenbegrünung'],
        ],
      }}
      steps={[
        { step: '01', title: 'Beratung & Bepflanzungsplan', description: 'Wir analysieren Ihren Standort und erstellen einen auf Sie abgestimmten Bepflanzungsplan.' },
        { step: '02', title: 'Pflanzenbeschaffung', description: 'Wir beschaffen alle Pflanzen in Gärtnerqualität zu fairen Preisen.' },
        { step: '03', title: 'Pflanzung & Anwachspflege', description: 'Unser Team pflanzt fachgerecht und sorgt für die ersten Wochen mit Anwachspflege.' },
        { step: '04', title: 'Langzeitpflege & Garantie', description: 'Auf Wunsch übernehmen wir die laufende Pflege – mit Pflanzengarantie und saisonaler Anpassung.' },
      ]}
      faqs={[
        { q: 'Erstellen Sie Bepflanzungspläne?', a: 'Ja, wir erstellen individuelle Bepflanzungspläne abgestimmt auf Ihren Garten, Standort und Stil – auf Wunsch mit 3D-Visualisierung.' },
        { q: 'Welche Pflanzen eignen sich für wenig Pflege?', a: 'Viele Stauden, Gräser und Gehölze sind sehr pflegearm wenn sie standortgerecht gepflanzt werden. Wir beraten Sie zur pflegeärmsten Lösung.' },
        { q: 'Übernehmen Sie auch die Pflege nach der Bepflanzung?', a: 'Ja, auf Wunsch schließen wir einen Pflegevertrag ab und kümmern uns regelmäßig um Rückschnitt, Düngen und Bewässerung.' },
        { q: 'Was kostet eine Bepflanzung?', a: 'Die Kosten richten sich nach Fläche und Pflanzenauswahl. Wir erstellen Ihnen ein kostenloses und transparentes Angebot.' },
      ]}
      cta={{ headline: 'Bepflanzungen in Frankfurt anfragen', subline: 'Kostenlose Beratung & Angebot in 48 Stunden.', servicePreset: 'Bepflanzungen' }}
    />
  );
}
