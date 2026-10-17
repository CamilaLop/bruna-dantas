import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portrait from '../../assets/editorial/bruna-cinematografica.webp';
import architecture from '../../assets/editorial/contact-building.webp';
import { Reveal } from './Reveal';
import { motionTiming, useMotionSettings } from '../motion';
gsap.registerPlugin(ScrollTrigger);

export function ContactInvitation() {
  const root = useRef<HTMLElement>(null);
  const { enabled } = useMotionSettings();
  useLayoutEffect(() => {
    const section = root.current;
    if (!enabled || !section) return;
    const background = section.querySelector('.bd-invitation-background img')!;
    const context = gsap.context(() => {
      gsap.fromTo('.bd-invitation-background img', { yPercent: -3, scale: 1.1 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: motionTiming.scrub } });
    }, section);
    return () => {
      context.revert();
      gsap.set(background, { clearProps: 'transform' });
    };
  }, [enabled]);
  return <section id="conversa" ref={root} className="bd-invitation" aria-labelledby="invitation-title">
    <div className="bd-invitation-background" aria-hidden="true"><img src={architecture} alt="" width="1672" height="941" loading="lazy" /></div>
    <div className="bd-container bd-invitation-grid"><Reveal className="bd-invitation-portrait bd-photo-frame"><img src={portrait} alt="Bruna Dantas" width="960" height="1200" loading="lazy" /></Reveal><Reveal className="bd-invitation-copy" delay={0.1}><h2 id="invitation-title">Vamos conversar<br />sobre o seu caso?</h2><a className="bd-button" href="#contato">Escolha como conversar ↗</a></Reveal></div>
  </section>;
}
