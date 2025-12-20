import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { usePinch } from '@use-gesture/react';

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

  // Match ZoomControls behavior for pinch (touch) and trackpad pinch (wheel+ctrl)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) return; // only treat pinch-to-zoom gestures
      event.preventDefault();
      setZoom((current) => clamp(current + (event.deltaY < 0 ? STEP : -STEP)));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Pinch via @use-gesture/react for consistent touch/pointer pinch handling
  const pinchTarget = typeof document !== 'undefined' ? document.documentElement : undefined;

  usePinch(
    ({ offset: [scale], event }) => {
      // Map scale (e.g., 1.2) to stepped zoom (10% increments)
      const targetZoom = clamp(Math.round((scale * 100) / STEP) * STEP);
      setZoom(targetZoom);
      if (event?.cancelable) {
        event.preventDefault();
      }
    },
    {
      target: pinchTarget,
      eventOptions: { passive: false, capture: true },
      pinch: {
        from: () => [zoom / 100, 0],
        scaleBounds: { min: MIN_ZOOM / 100, max: MAX_ZOOM / 100 },
        threshold: 0.01, // make small pinches responsive
      },
      pointer: { touch: true },
    }
  );

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

