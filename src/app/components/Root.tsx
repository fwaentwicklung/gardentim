import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import WhatsAppButton from './WhatsAppButton';

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

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8f6]">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
