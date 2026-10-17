import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motionTiming, useMotionSettings } from '../motion';
gsap.registerPlugin(ScrollTrigger);
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotionSettings();
  useLayoutEffect(() => {
    if (!enabled || !ref.current) return;
    const context = gsap.context(() => {
      gsap.from(ref.current, { autoAlpha: 0, y: motionTiming.offset, duration: motionTiming.duration, delay, ease: motionTiming.ease, scrollTrigger: { trigger: ref.current, start: 'top 93%', once: true } });
    }, ref);
    return () => context.revert();
  }, [enabled, delay]);
  return <div className={className} ref={ref}>{children}</div>;
}
