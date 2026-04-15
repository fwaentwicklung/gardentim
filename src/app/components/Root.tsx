import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import WhatsAppButton from './WhatsAppButton';
import { COMPANY } from '../lib/company';
import { Phone } from 'lucide-react';

export default function Root() {
  const { pathname } = useLocation();

  // Gespeicherten Cookie-Consent beim Start an Google weitergeben
  useEffect(() => {
    try {
      const stored = localStorage.getItem('gardentime_cookie_consent');
      if (stored && typeof window.gtag === 'function') {
        const consent = JSON.parse(stored);
        window.gtag('consent', 'update', {
          ad_storage: consent.marketing ? 'granted' : 'denied',
          ad_user_data: consent.marketing ? 'granted' : 'denied',
          ad_personalization: consent.marketing ? 'granted' : 'denied',
          analytics_storage: consent.analytics ? 'granted' : 'denied',
        });
      }
    } catch {}
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  const hideStickyBar = pathname === '/danke' || pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8f6]">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      {/* Sticky Mobile Phone Bar – nur auf kleinen Screens */}
      {!hideStickyBar && (
        <a
          href={COMPANY.phoneTel}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#003f2e] text-[#bcff83] flex items-center justify-center gap-2.5 py-4 text-sm font-bold shadow-2xl"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <Phone size={18} />
          Jetzt anrufen – {COMPANY.phonePretty}
        </a>
      )}
    </div>
  );
}
