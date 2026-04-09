/// <reference types="vite/client" />

// Google Ads / gtag global
interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
}

interface ImportMetaEnv {
  readonly VITE_ADMIN_PASSWORD: string;
  readonly VITE_ADMIN_API_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
