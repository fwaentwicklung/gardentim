import { Scissors, Clock, Shield, Leaf, Recycle, ThumbsUp, Award, CalendarCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GartenpflegePage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Gartenpflege Frankfurt | Professioneller Rasenmähservice & Gartenpflege – Garden Time GmbH',
        description: 'Professionelle Gartenpflege in Frankfurt am Main ✓ Rasenmähen ✓ Regelmäßige Pflege ✓ Dauerpflegeverträge ✓ Kostenloser Kostenvoranschlag. Garden Time GmbH – Ihr Gartenpflegeexperte seit 2009.',
        keywords: 'Gartenpflege Frankfurt, Rasenmähen Frankfurt, Gartenservice Frankfurt, Gartenpflegedienst Frankfurt am Main, Rasenpflege Frankfurt, Gartenpflege Rhein-Main',
        canonical: 'https://www.gardentime-frankfurt.de/leistungen/gartenpflege',
      }}
      breadcrumb="Gartenpflege"
      hero={{
        badge: '✓ Gartenpflege Frankfurt',
        headline: 'Professionelle Gartenpflege in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Gepflegte Grünanlagen das ganze Jahr – zuverlässig, pünktlich und zu fairen Preisen. Über 500 Privat- und Gewerbekunden vertrauen Garden Time.',
        imageUrl: getImage('leistung:gartenpflege:hero'),
        checks: [
          'Regelmäßiges Rasenmähen & Grünschnitt',
          'Dauerpflegeverträge für Privat & Gewerbe',
          'Modernste Geräte, leise & emissionsarm',
          'Kostenloser Besichtigungstermin in Frankfurt',
        ],
      }}
      intro={{
        headline: 'Ihr Garten verdient professionelle Pflege – das ganze Jahr',
        text1: 'Ein gepflegter Garten ist mehr als Ästhetik – er steigert den Wert Ihrer Immobilie, schafft Lebensqualität und hinterlässt einen starken ersten Eindruck. Garden Time GmbH bietet in Frankfurt und dem gesamten Rhein-Main-Gebiet professionelle Gartenpflegeleistungen an, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.',
        text2: 'Von der wöchentlichen Rasenpflege bis zum saisonalen Gartenschnitt – unser erfahrenes Team aus Gartenpflegeprofis übernimmt alle Arbeiten mit dem notwendigen Fachwissen und modernen Maschinen. Wir arbeiten nach festen Pflegeplänen, damit Ihr Garten immer gepflegt aussieht – ohne Ihren Aufwand.',
        imageUrl: getImage('leistung:gartenpflege:secondary'),
        imageAlt: 'Professionelle Gartenpflege Frankfurt',
      }}
      benefits={[
        { title: 'Zuverlässiger Jahresrhythmus', description: 'Feste Pflegetermine nach Vereinbarung – wöchentlich, zweiwöchentlich oder monatlich, abgestimmt auf die Wachstumsphase.', icon: Clock },
        { title: 'Zertifizierte Fachkräfte', description: 'Alle Mitarbeiter sind ausgebildete Gärtner oder Fachkräfte für Grünanlagenpflege mit regelmäßiger Weiterbildung.', icon: Award },
        { title: 'Vollversicherung', description: 'Wir arbeiten mit vollständiger Haftpflicht- und Unfallversicherung. Keine Haftungsrisiken für Sie.', icon: Shield },
        { title: 'Nachhaltige Methoden', description: 'Schonende Pflege mit umweltfreundlichen Geräten, Mulchmäher für bodenfreundliche Rasenpflege.', icon: Recycle },
        { title: 'Saisonale Anpassung', description: 'Frühjahrsputz, Sommerpflege, Herbstlaub-Entfernung und Wintervorbereitung – alles aus einer Hand.', icon: Leaf },
        { title: 'Flexible Verträge', description: 'Einmalige Einsätze oder Dauerpflegeverträge – ohne lange Vertragsbindung, monatlich kündbar.', icon: ThumbsUp },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Gartenpflege-Angebot',
        items: [
          ['Rasenmähen & Kantenstechen', 'Rasenvertikutieren & Belüften', 'Rasen neu ansäen & düngen', 'Rasenbewässerung & Drainage', 'Mähroboter-Installation'],
          ['Heckenschnitt (formgeschnitten)', 'Strauchschnitt & Auslichten', 'Baumschnitt (bis 5m Höhe)', 'Totholzentfernung', 'Rosen- & Staudenpflege'],
          ['Laubentfernung & -entsorgung', 'Unkrautbekämpfung & Jäten', 'Beet- & Pflanzenpflege', 'Mulchen von Beeten', 'Kompostanlage & Abfallentsorgung'],
        ],
      }}
      steps={[
        { step: '1', title: 'Anfrage & Besichtigung', description: 'Kostenloser Vor-Ort-Termin innerhalb von 48 Stunden in Frankfurt und Umgebung.' },
        { step: '2', title: 'Angebot & Pflegeplan', description: 'Individuelles Angebot mit klaren Preisen und maßgeschneidertem Pflegeplan.' },
        { step: '3', title: 'Pflegestart', description: 'Pünktlicher Einsatzstart nach Absprache – in der Regel innerhalb einer Woche.' },
        { step: '4', title: 'Regelmäßige Betreuung', description: 'Verlässliche Pflege nach Plan, mit Qualitätskontrolle und direktem Ansprechpartner.' },
      ]}
      faqs={[
        { q: 'Wie oft sollte der Rasen gemäht werden?', a: 'In der Hauptsaison (April bis Oktober) empfehlen wir eine Mahd alle 1–2 Wochen. Im Frühjahr und Herbst reicht oft alle 2–3 Wochen. Wir passen die Häufigkeit an Ihr Wachstum und Ihre Wünsche an.' },
        { q: 'Was kostet Gartenpflege in Frankfurt?', a: 'Unsere Preise beginnen ab 89 € pro Einsatz für kleinere Gärten. Der Preis hängt von der Größe, dem Umfang und der Häufigkeit ab. Bei Dauerpflegeverträgen gewähren wir attraktive Rabatte. Wir erstellen Ihnen gerne ein kostenloses Angebot.' },
        { q: 'Führen Sie auch Gartenarbeiten in Abwesenheit durch?', a: 'Ja, selbstverständlich. Die meisten unserer Stammkunden sind bei unseren Einsätzen nicht anwesend. Wir informieren Sie vorab über den Termin und hinterlassen alles ordentlich.' },
        { q: 'Entsorgen Sie den Grünschnitt?', a: 'Auf Wunsch entsorgen wir den gesamten Grünschnitt, Laub und Gartenabfall fachgerecht. Dies kann als Zusatzleistung im Angebot berücksichtigt werden.' },
        { q: 'Sind Sie auch für Gewerbekunden tätig?', a: 'Ja, wir betreuen Wohnanlagen, Bürokomplexe, Hotels und Gewerbeparks in Frankfurt und dem Rhein-Main-Gebiet. Für Gewerbeobjekte bieten wir Jahresverträge mit festgelegten Leistungsstandards an.' },
      ]}
      cta={{
        headline: 'Kostenlose Beratung für Ihre Gartenpflege in Frankfurt',
        subline: 'Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden für einen kostenlosen Besichtigungstermin.',
        servicePreset: 'Gartenpflege & Rasenmähen',
      }}
    />
  );
}
