import { useLayoutEffect } from 'react';
import { Plus } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { audienceOptions, getAreasForAudience } from '../content';
import type { ServiceAudience } from '../content';
import { Reveal } from './Reveal';

export function AreasPage({ audience, onChooseAudience }: { audience: ServiceAudience; onChooseAudience: (value: ServiceAudience) => void }) {
  const visibleAreas = getAreasForAudience(audience);
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [audience]);
  return <section id="atuacao" className="bd-section bd-light bd-areas" aria-labelledby="areas-title">
    <div className="bd-container bd-areas-grid">
      <Reveal className="bd-section-intro"><h2 id="areas-title">Áreas de<br />atuação</h2><p>O Direito, próximo<br />da sua realidade.</p><a className="bd-button bd-area-contact" href="#contato">Conversar sobre o caso</a></Reveal>
      <Reveal className="bd-area-list" delay={0.08}>
        <div className="bd-area-filters" role="group" aria-label="Filtrar áreas de atuação">{audienceOptions.map(option => <button type="button" key={option.id} aria-pressed={audience === option.id} aria-controls="bd-area-results" onClick={() => onChooseAudience(option.id)}>{option.label}</button>)}</div>
        <p className="bd-area-result-count" role="status" aria-live="polite">{visibleAreas.length} áreas {audience === 'empresas' ? 'para empresas' : audience === 'pessoas' ? 'para você' : 'de atuação'}</p>
        <div id="bd-area-results">{visibleAreas.map(area => <details id={'area-' + area.id} className="bd-area" key={area.id}>
          <summary><span className="bd-area-heading"><h3>{area.title}</h3><span>{area.short}</span></span><Plus className="bd-area-toggle" size={31} strokeWidth={1.25} aria-hidden="true" /></summary>
          <div className="bd-area-detail"><p>{area.description}</p><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><a className="bd-text-link" href="#contato">Conversar sobre esta área <span aria-hidden="true">↗</span></a></div>
        </details>)}</div>
      </Reveal>
    </div>
  </section>;
}
