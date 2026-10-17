import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import architecture from '../../assets/editorial/hero-building.webp';
import justice from '../../assets/editorial/justice.webp';
import { contact } from '../content';
import { useMotionSettings } from '../motion';

export function HomePage() {
  const root = useRef<HTMLElement>(null);
  const { enabled } = useMotionSettings();
  useLayoutEffect(() => {
    const hero = root.current;
    if (!enabled || !hero) return;
    const media = gsap.matchMedia();
    media.add('(min-width: 960px) and (hover: hover) and (pointer: fine)', () => {
      const statue = hero.querySelector('.bd-justice-image')!;
      const moveX = gsap.quickTo(statue, 'x', { duration: 1.15, ease: 'power3.out' });
      const moveY = gsap.quickTo(statue, 'y', { duration: 1.15, ease: 'power3.out' });
      const move = (event: PointerEvent) => {
        if (hero.inert || event.pointerType === 'touch') return;
        const rect = hero.getBoundingClientRect();
        moveX(gsap.utils.clamp(-1, 1, (event.clientX - rect.left) / rect.width * 2 - 1) * 8);
        moveY(gsap.utils.clamp(-1, 1, (event.clientY - rect.top) / rect.height * 2 - 1) * 5);
      };
      const settle = () => { moveX(0); moveY(0); };
      hero.addEventListener('pointermove', move, { passive: true });
      hero.addEventListener('pointerleave', settle);
      window.addEventListener('blur', settle);
      return () => {
        hero.removeEventListener('pointermove', move);
        hero.removeEventListener('pointerleave', settle);
        window.removeEventListener('blur', settle);
      };
    }, hero);
    return () => {
      media.revert();
      gsap.set(hero.querySelector('.bd-justice-image'), { clearProps: 'transform' });
    };
  }, [enabled]);
  return <section id="inicio" ref={root} className="cin-hero bd-editorial-hero" aria-labelledby="hero-title">
    <div className="cin-world" aria-hidden="true"><img className="cin-room" src={architecture} alt="" width="1672" height="941" fetchPriority="high" /><div className="bd-hero-wash" /></div>
    <h1 id="hero-title" className="bd-hero-name" aria-label="Bruna Dantas"><span className="bd-hero-name-first" aria-hidden="true">Bruna</span><span className="bd-hero-name-last" aria-hidden="true">Dantas</span></h1>
    <div className="bd-justice-layer" aria-hidden="true"><img className="bd-justice-image" src={justice} alt="" width="920" height="1380" fetchPriority="high" /></div>
    <p className="bd-hero-specialties">Advocacia e consultoria<br />jurídica<span className="bd-hero-location">Búzios · Online e presencial</span><span className="bd-hero-registration">{contact.registration}</span></p>
    <a className="bd-button bd-hero-cta" href="#contato"><span>Vamos conversar</span><ArrowUpRight size={24} aria-hidden="true" /></a>
    <a className="bd-hero-explore" href="#abordagem">Conheça a atuação <span aria-hidden="true">↓</span></a>
  </section>;
}
