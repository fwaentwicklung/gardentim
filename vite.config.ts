import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// @ts-ignore – CommonJS module, types not perfectly aligned
import prerender from 'vite-plugin-prerender'
// @ts-ignore
import Renderer from '@prerenderer/renderer-jsdom'

// Alle statischen Routen die für KI-Crawler und SEO vorgerendert werden sollen.
// /admin und /404 werden bewusst ausgelassen.
const PRERENDER_ROUTES = [
  '/',
  '/leistungen',
  '/leistungen/gartenpflege',
  '/leistungen/gartengestaltung',
  '/leistungen/heckenschnitt-baumschnitt',
  '/leistungen/bewaesserungsanlagen',
  '/leistungen/aussenanlagen',
  '/leistungen/pflasterarbeiten',
  '/leistungen/zaunarbeiten',
  '/leistungen/baumschnitt',
  '/leistungen/terrassenarbeiten',
  '/leistungen/bepflanzungen',
  '/leistungen/rasenanlagen',
  '/leistungen/facility-management',
  '/leistungen/hausmeisterservice',
  '/leistungen/gebaeudereinigung',
  '/leistungen/winterdienst',
  '/leistungen/glasreinigung',
  '/leistungen/objektbetreuung',
  '/leistungen/empfangsdienste',
  '/leistungen/gruenpflege',
  '/leistungen/graupflege',
  '/leistungen/poolreinigung',
  '/leistungen/poolmessung',
  '/projekte',
  '/jobs',
  '/kontakt',
  '/datenschutz',
  '/impressum',
];

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: PRERENDER_ROUTES,
      renderer: new Renderer({
        renderAfterTime: 2000, // 2s warten bis React gerendert hat
      }),
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

