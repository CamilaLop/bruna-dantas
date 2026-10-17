import corporate from '../../assets/editorial/corporate.webp';
import civil from '../../assets/editorial/civil.webp';
import { ArrowUpRight } from 'lucide-react';
import { areas, serviceGroups } from '../content';
import type { ServiceAudience } from '../content';
import { Reveal } from './Reveal';

export function EquilibriumIntro({ embedded = false, onChooseAudience }: { embedded?: boolean; onChooseAudience: (value: ServiceAudience) => void }) {
  return <section id="abordagem" className="cin-intro bd-services-section" aria-labelledby="approach-title" data-embedded={embedded || undefined}>
    <div className="bd-container">
      <Reveal className="bd-services-introduction"><p>Orientação, consultoria e<br className="bd-desktop-break" /> acompanhamento jurídico para<br className="bd-desktop-break" /> pessoas e empresas</p></Reveal>
      <div className="bd-services-grid">
        <Reveal className="bd-services-heading"><h2 id="approach-title">Serviços</h2><p>Atuação jurídica,<br />próxima de você.</p></Reveal>
        {serviceGroups.map((group, index) => <Reveal className="bd-service-card-wrap" delay={0.08 * (index + 1)} key={group.id}>
          <a className={'bd-service-card ' + (group.id === 'empresas' ? 'bd-service-corporate' : 'bd-service-civil')} href="#atuacao" onClick={() => onChooseAudience(group.id)} aria-label={group.label + ': ' + group.description + ' Ver áreas de atuação.'}>
            <img src={group.id === 'empresas' ? corporate : civil} width="850" height="1062" alt="" loading="lazy" />
            <span className="bd-service-card-content"><span className="bd-service-card-title">Para<br />{group.id === 'empresas' ? 'empresas' : 'você'}</span><span className="bd-service-card-description">{group.description}</span><span className="bd-service-card-link">Ver áreas de atuação <ArrowUpRight size={19} aria-hidden="true" /></span></span>
          </a>
          <p className="bd-service-caption"><span>Áreas relacionadas</span>{areas.filter(area => group.areaIds.includes(area.id)).map(area => area.title.replace("Direito do ", "").replace("Direito de ", "").replace("Direito Imobiliário", "Imobiliário").replace("Elaboração e análise de contratos", "Contratos")).join(" · ")}</p>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
