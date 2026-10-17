import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomePage } from './HomePage';
import { EquilibriumIntro } from './EquilibriumIntro';
import { motionTiming, useMotionSettings } from '../motion';
import type { ServiceAudience } from '../content';

gsap.registerPlugin(ScrollTrigger);
export function HeroServicesTransition({ onChooseAudience }: { onChooseAudience: (value: ServiceAudience) => void }) {
  const root = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const { enabled } = useMotionSettings();
  useLayoutEffect(() => {
    const stage = root.current;
    if (!stage || !enabled) return;
    const media = gsap.matchMedia();
    media.add({ desktop: '(min-width: 960px)', mobile: '(max-width: 959px)' }, context => {
      const hero = stage.querySelector<HTMLElement>('.cin-hero')!;
      const services = stage.querySelector<HTMLElement>('.cin-intro')!;
      let trigger: ScrollTrigger | undefined;
      let alive = true;
      if (!played.current) {
        played.current = true;
        gsap.timeline({ defaults: { ease: motionTiming.ease } })
          .from(hero.querySelectorAll('.bd-hero-name-first, .bd-hero-name-last'), { y: 75, duration: motionTiming.duration, stagger: 0.08 }, 0.1)
          .from(hero.querySelectorAll('.bd-hero-specialties, .bd-hero-cta'), { opacity: 0, duration: 0.8, stagger: 0.08 }, 0.35);
      }
      const syncPanels = (progress: number) => {
        const heroCovered = progress >= 0.88;
        hero.inert = heroCovered;
        hero.setAttribute('aria-hidden', String(heroCovered));
        // Services remain in document flow and in the natural reading order.
      };
      const goToServices = (event: MouseEvent) => {
        const anchor = (event.target as Element | null)?.closest('a[href="#abordagem"]');
        if (!anchor || !trigger || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); window.scrollTo({ top: trigger.end, behavior: 'smooth' });
        history.replaceState(null, '', '#abordagem');
      };
      if (context.conditions!.desktop) {
        stage.classList.add('is-parallax-active');
        syncPanels(0);
        const background = gsap.fromTo(hero.querySelector('.cin-room'), { scale: 1.12, yPercent: -3 }, {
          yPercent: 3, ease: 'none', scrollTrigger: {
            trigger: hero, start: 'top top', end: () => '+=' + hero.offsetHeight,
            pin: hero, pinSpacing: false, scrub: motionTiming.scrub, invalidateOnRefresh: true,
            onUpdate: self => {
              syncPanels(self.progress);
            },
          },
        });
        trigger = background.scrollTrigger;
        document.addEventListener('click', goToServices);
      } else {
        // Touch screens retain native stacked sections; only the room shifts slightly.
        gsap.fromTo(hero.querySelector('.cin-room'), { scale: 1.12, yPercent: -3 }, {
          yPercent: 3, ease: 'none', scrollTrigger: {
            trigger: hero, start: 'top top', end: 'bottom top', scrub: motionTiming.scrub,
          },
        });
      }
      const refresh = () => { if (alive) ScrollTrigger.refresh(); };
      const images = Array.from(stage.querySelectorAll('img'));
      images.forEach(image => { if (!image.complete) image.addEventListener('load', refresh, { once: true }); });
      document.fonts?.ready.then(refresh);
      return () => {
        alive = false;
        document.removeEventListener('click', goToServices);
        images.forEach(image => image.removeEventListener('load', refresh));
        stage.classList.remove('is-parallax-active');
        hero.inert = false; services.inert = false;
        hero.removeAttribute('aria-hidden'); services.removeAttribute('aria-hidden');
      };
    }, stage);
    return () => {
      media.revert();
      gsap.set(stage.querySelectorAll('.cin-room'), { clearProps: 'transform' });
    };
  }, [enabled]);
  return <div className="cin-flow" ref={root}>
    <HomePage /><EquilibriumIntro embedded onChooseAudience={onChooseAudience} />
  </div>;
}
