import { useEffect } from 'react';
import { Link } from 'react-router';
import { CheckCircle, Phone, ArrowRight, Clock, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../lib/company';

export default function Danke() {
  useEffect(() => {
    // Google Ads Conversion – nur wenn Marketing-Consent gegeben
    try {
      const stored = localStorage.getItem('gardentime_cookie_consent');
      const consent = stored ? JSON.parse(stored) : null;
      if (consent?.marketing && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17024588965/c3b7CNv6wb8aEKW5-rU_',
        });
      }
    } catch {}
  }, []);

  return (
    <>
      <SEOHead
        title="Vielen Dank für Ihre Anfrage | Garden Time GmbH Frankfurt"
        description="Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
      />

      <section className="min-h-[80vh] bg-[#f7f8f6] flex items-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Icon */}
          <div className="w-24 h-24 bg-[#bcff83] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <CheckCircle size={48} className="text-[#003f2e]" />
          </div>

          {/* Headline */}
          <h1 className="text-[#003f2e] font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.1 }}>
            Vielen Dank für<br />
            <span className="text-[#2d746d]">Ihre Anfrage!</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Wir haben Ihre Anfrage erhalten und werden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen melden.
          </p>

          {/* Info-Karten */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Clock, title: 'Antwort in 24h', desc: 'Wir melden uns schnellstmöglich' },
              { icon: Phone, title: 'Auch telefonisch', desc: COMPANY.phonePretty },
              { icon: Star, title: 'Kostenlos', desc: 'Beratung & Angebot unverbindlich' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#003f2e] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-[#bcff83]" />
                </div>
                <p className="text-[#003f2e] font-bold text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA-Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#003f2e] text-[#bcff83] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors shadow-lg"
            >
              Zurück zur Startseite
              <ArrowRight size={15} />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#003f2e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Phone size={15} />
              {COMPANY.phonePretty}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
