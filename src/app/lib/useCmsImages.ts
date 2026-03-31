import { useState, useEffect } from 'react';
import { getCmsImages } from './api';

// Keine Fallback-Bilder – nur echte hochgeladene Bilder werden angezeigt
export const DEFAULT_IMAGES: Record<string, string> = {};

let cachedImages: Record<string, string> | null = null;
let fetchPromise: Promise<Record<string, string>> | null = null;

export function useCmsImages() {
  const [images, setImages] = useState<Record<string, string>>(cachedImages || {});
  const [loading, setLoading] = useState(!cachedImages);

  useEffect(() => {
    if (cachedImages) {
      setImages(cachedImages);
      setLoading(false);
      return;
    }
    if (!fetchPromise) {
      fetchPromise = getCmsImages().catch(() => ({}));
    }
    fetchPromise.then((cms) => {
      cachedImages = cms;
      setImages(cms);
      setLoading(false);
    });
  }, []);

  // CMS-Updates aus dem Admin-Panel empfangen
  useEffect(() => {
    const handler = () => {
      getCmsImages()
        .then((cms) => {
          cachedImages = cms;
          fetchPromise = null;
          setImages(cms);
        })
        .catch(() => {});
    };
    window.addEventListener('cms-updated', handler);
    return () => window.removeEventListener('cms-updated', handler);
  }, []);

  const getImage = (key: string): string => images[key] || '';

  const refresh = () => {
    cachedImages = null;
    fetchPromise = null;
    setLoading(true);
    getCmsImages()
      .then((cms) => {
        cachedImages = cms;
        setImages(cms);
      })
      .catch(() => setImages({}))
      .finally(() => setLoading(false));
  };

  return { images, getImage, loading, refresh };
}
