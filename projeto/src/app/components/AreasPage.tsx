import { BriefcaseBusiness, FileText, House, Plus, ShoppingBag, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { areas } from '../content';
import { Reveal } from './Reveal';

const areaIcons: Record<string, LucideIcon> = {
  trabalho: BriefcaseBusiness,
  familia: Users,
  consumidor: ShoppingBag,
  imobiliario: House,
  contratos: FileText,
};

export function AreasPage() {
  return (
    <section id="atuacao" className="bd-section bd-light" aria-labelledby="areas-title">
      <div className="bd-container bd-areas-grid">
        <Reveal className="bd-section-intro">
          <p className="bd-eyebrow"><span className="bd-small-rule" />Áreas de atuação</p>
          <h2 id="areas-title">O Direito, próximo<br /><em>da sua realidade.</em></h2>
          <p>Assessoria, orientação e representação jurídica para pessoas e empresas, com atenção a cada contexto.</p>
          <a className="bd-text-link" href="#contato">Converse sobre o seu caso</a>
        </Reveal>
        <Reveal className="bd-area-list" delay={0.08}>
          {areas.map((area, index) => {
            const Icon = areaIcons[area.id] ?? FileText;
            return (
              <details className="bd-area" key={area.id} open={index === 0}>
                <summary><span className="bd-area-icon"><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span><span className="bd-area-heading"><h3>{area.title}</h3><span>{area.short}</span></span><Plus className="bd-area-toggle" size={22} aria-hidden="true" /></summary>
                <div className="bd-area-detail"><p>{area.description}</p><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div>
              </details>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
