import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function Root() {
  const { pathname } = useLocation();

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
      <CookieBanner />
    </div>
  );
}
