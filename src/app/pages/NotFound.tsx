import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 – Seite nicht gefunden | Garden Time Frankfurt"
        description="Diese Seite wurde nicht gefunden."
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-[#f7f8f6]">
        <div className="text-center px-4">
          <p className="text-[#bcff83] font-black" style={{ fontSize: '6rem', lineHeight: 1, color: '#003f2e', opacity: 0.1 }}>404</p>
          <div className="text-8xl mb-6">🌿</div>
          <h1 className="text-[#003f2e] font-black text-3xl mb-3">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Diese Seite existiert leider nicht. Vielleicht ist sie wie ein Unkraut verschwunden –
            aber unser Team ist noch da!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-[#003f2e] text-[#bcff83] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
            >
              Zur Startseite
            </Link>
            <Link
              to="/kontakt"
              className="bg-white text-[#003f2e] border border-gray-200 px-7 py-3.5 rounded-xl font-bold text-sm hover:border-[#2d746d] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
