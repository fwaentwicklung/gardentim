import { Scissors, Shield, Award, Clock, Trees, Leaf, CheckCircle, Ruler } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function HeckenschnittPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Heckenschnitt Frankfurt | Professioneller Baumschnitt & Heckenpflege – Garden Time',
        description: 'Professioneller Heckenschnitt & Baumschnitt in Frankfurt ✓ Formschnitt ✓ Baumpflege nach ZTV Baumpflege ✓ Obstbaumschnitt ✓ Entsorgung inklusive. Garden Time GmbH Frankfurt.',
        keywords: 'Heckenschnitt Frankfurt, Baumschnitt Frankfurt, Heckenpflege Frankfurt, Formschnitt Hecken Frankfurt, Baumpflege Frankfurt, Obstbaumschnitt Frankfurt',
      }}
      breadcrumb="Heckenschnitt & Baumschnitt"
      hero={{
        badge: '✓ Heckenschnitt Frankfurt',
        headline: 'Professioneller Heckenschnitt &',
        headlineHighlight: 'Baumschnitt Frankfurt',
        subline: 'Präziser Formschnitt, fachgerechte Baumpflege und vollständige Entsorgung – von Privathäusern bis zu Gewerbeobjekten in Frankfurt und Umgebung.',
        imageUrl: getImage('leistung:heckenschnitt:hero'),
        checks: [
          'Zertifizierte Baumkletterer (ISA-Standard)',
          'Formschnitt aller Hecken- und Hainbuchenarten',
          'Baumschnitt bis 15m Höhe',
          'Vollständige Grünschnitt-Entsorgung',
        ],
      }}
      intro={{
        headline: 'Scharfe Schnitte für gepflegte Hecken und gesunde Bäume',
        text1: 'Hecken und Bäume sind das grüne Rückgrat jedes Gartens – aber nur mit regelmäßigem, fachgerechtem Schnitt bleiben sie gesund, schön und formstabil. Garden Time GmbH führt in Frankfurt und dem Rhein-Main-Gebiet professionellen Heckenschnitt und Baumschnitt durch – mit dem richtigen Werkzeug, zum richtigen Zeitpunkt und nach anerkannten Pflegestandards.',
        text2: 'Unser geschultes Team beherrscht den Formschnitt von Buchsbaum, Thuja, Hainbuche, Liguster und exotischen Gehölzen ebenso wie die Kronenauslichtung alter Obstbäume oder den Rückschnitt von Großbäumen nach ZTV Baumpflege. Wir halten alle gesetzlichen Vorgaben ein – insbesondere die Vogelbrutschutzzeiten gemäß BNatSchG.',
        imageUrl: getImage('leistung:heckenschnitt:secondary'),
        imageAlt: 'Heckenschnitt Frankfurt professionell',
      }}
      benefits={[
        { title: 'Fachgerechter Schnitt', description: 'Wir kennen die optimale Schnitttechnik für jede Pflanzenart – für gesundes Wachstum und schöne Form.', icon: Scissors },
        { title: 'Gesetzeskonform', description: 'Alle Schnittarbeiten erfolgen unter Berücksichtigung des BNatSchG – keine Schnitte in der Vogelbrutzeit (1. März – 30. September).', icon: Shield },
        { title: 'Zertifizierte Baumpfleger', description: 'Unser Team verfügt über ISA-zertifizierte Baumkletterer und Fachagrarwirte für Baumpflege.', icon: Award },
        { title: 'Saisongerecht', description: 'Wir schneiden zum optimalen Zeitpunkt: Formschnitt im Sommer, Auslichtungsschnitt im Winter.', icon: Clock },
        { title: 'Alle Gehölzarten', description: 'Buchs, Thuja, Hainbuche, Liguster, Eibe, Bambus, Obstbäume – wir pflegen alle gängigen Arten.', icon: Trees },
        { title: 'Entsorgung inklusive', description: 'Auf Wunsch entsorgen wir den gesamten Schnittabfall fachgerecht – sauber und ohne Mehraufwand für Sie.', icon: Leaf },
      ]}
      leistungsumfang={{
        headline: 'Unser Heckenschnitt- & Baumschnitt-Angebot',
        items: [
          ['Formschnitt Hecken (alle Arten)', 'Buchsbaumpflege & Formgebung', 'Hainbuchenhecken', 'Thuya & Zypressenhecken', 'Bambuspflege & -eindämmung'],
          ['Kronenauslichtung & -einkürzung', 'Totholzentfernung', 'Obstbaumschnitt (Erhaltungs- & Verjüngungsschnitt)', 'Baum-Fällung (bis 15m, mit Kran auf Anfrage)', 'Stubbenfräsen'],
          ['Strauchschnitt & Auslichten', 'Rosen-Frühjahrs- & Herbstschnitt', 'Klettergehölze & Schlingpflanzen', 'Sichtschutzhecken', 'Grünschnitt-Entsorgung & Häckseln'],
        ],
      }}
      steps={[
        { step: '1', title: 'Kostenlose Begutachtung', description: 'Wir kommen zu Ihnen und beurteilen den Zustand Ihrer Hecken und Bäume vor Ort.' },
        { step: '2', title: 'Angebot & Terminplanung', description: 'Verbindliches Festpreisangebot und Terminabsprache – flexibel nach Ihrem Zeitplan.' },
        { step: '3', title: 'Fachgerechte Ausführung', description: 'Sorgfältiger Schnitt durch erfahrene Gärtner mit professionellem Werkzeug.' },
        { step: '4', title: 'Reinigung & Entsorgung', description: 'Vollständige Reinigung und Entsorgung des Grünschnitts – Ihr Garten bleibt sauber.' },
      ]}
      faqs={[
        { q: 'Wann ist der beste Zeitpunkt für den Heckenschnitt?', a: 'Der Hauptschnitt erfolgt idealerweise Ende Juni bis Mitte Juli (nach dem Johannistag). Ein zweiter Schnitt ist im September möglich. Bitte beachten: Während der Vogelbrutzeit (1. März – 30. September) sind starke Schnitte gesetzlich eingeschränkt.' },
        { q: 'Was kostet Heckenschnitt in Frankfurt?', a: 'Heckenschnitt wird meist nach Laufmeter berechnet: ab 5–12 €/lm je nach Höhe und Breite. Für kleine Projekte gibt es Mindestpauschalen. Wir erstellen Ihnen ein kostenloses Angebot nach Besichtigung.' },
        { q: 'Schneiden Sie auch hohe Bäume?', a: 'Ja, unser Team führt Baumschnitt bis 15m Höhe durch. Für größere Bäume oder Fällarbeiten kooperieren wir mit zertifizierten Forstbetrieben.' },
        { q: 'Muss ich während der Arbeiten zu Hause sein?', a: 'Nein. Viele unserer Kunden sind bei den Einsätzen nicht zuhause. Wir informieren Sie vorher und hinterlassen Grundstück und Garten sauber.' },
      ]}
      cta={{
        headline: 'Perfekter Heckenschnitt für Ihren Garten in Frankfurt',
        subline: 'Jetzt Angebot anfordern und Ihren Hecken- oder Baumschnitttermin in Frankfurt planen. Kostenlose Begutachtung und verbindliches Festpreisangebot.',
        servicePreset: 'Heckenschnitt & Baumschnitt',
      }}
    />
  );
}
