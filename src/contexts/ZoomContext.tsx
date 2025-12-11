import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

type ZoomContextValue = {
  zoom: number;
  increase: () => void;
  decrease: () => void;
};

const ZoomContext = createContext<ZoomContextValue | undefined>(undefined);

const MIN_ZOOM = 80;
const MAX_ZOOM = 200;
const STEP = 10;
const BASE_FONT = 16;

function clamp(value: number) {
  if (value < MIN_ZOOM) return MIN_ZOOM;
  if (value > MAX_ZOOM) return MAX_ZOOM;
  return value;
}

export const ZoomProvider = ({ children }: { children: ReactNode }) => {
  const [zoom, setZoom] = useState(() => {
    if (typeof window === 'undefined') return 100;
    const stored = window.localStorage.getItem('app-zoom');
    return stored ? clamp(Number(stored)) : 100;
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.fontSize = `${(BASE_FONT * zoom) / 100}px`;
    window.localStorage.setItem('app-zoom', String(zoom));
  }, [zoom]);

  const value = useMemo(
    () => ({
      zoom,
      increase: () => setZoom((current) => clamp(current + STEP)),
      decrease: () => setZoom((current) => clamp(current - STEP)),
    }),
    [zoom]
  );

  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
};

export const useZoom = () => {
  const ctx = useContext(ZoomContext);
  if (!ctx) {
    throw new Error('useZoom must be used within a ZoomProvider');
  }
  return ctx;
};

export const zoomLimits = { min: MIN_ZOOM, max: MAX_ZOOM, step: STEP };

