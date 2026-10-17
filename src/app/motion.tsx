import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export const motionTiming = { duration: 0.85, ease: 'power3.out', scrub: 0.55, offset: 24 } as const;

const MotionContext = createContext({ enabled: true, systemReduced: false });
export function MotionProvider({ children }: { children: ReactNode }) {
  const [systemReduced, setSystemReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystemReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return <MotionContext.Provider value={{ enabled: !systemReduced, systemReduced }}><div className={systemReduced ? 'bd-motion-reduced' : ''}>{children}</div></MotionContext.Provider>;
}
export function useMotionSettings() { return useContext(MotionContext); }
