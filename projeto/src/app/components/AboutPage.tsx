import { Reveal } from './Reveal';
import { contact } from '../content';

const values = [
  { title: 'Compromisso', description: 'Com a verdade e a técnica jurídica.' },
  { title: 'Ética', description: 'Em todas as relações profissionais.' },
  { title: 'Cuidado', description: 'Na escuta e na condução de cada caso.' },
  { title: 'Transparência', description: 'No atendimento e na comunicação.' },
];

export function AboutPage() {
  return (
    <section id="sobre" className="bd-section bd-about" aria-labelledby="about-title">
      <div className="bd-container">
        <div className="bd-about-grid">
          <Reveal className="bd-about-content">
            <p className="bd-eyebrow"><span className="bd-small-rule" />Sobre a Bruna</p>
            <h2 id="about-title">Bruna Dantas</h2>
            <p className="bd-about-registration">Advogada · {contact.registration}</p>
            <p className="bd-about-lead">Uma atuação pautada na escuta, no diálogo e no compromisso com os seus direitos.</p>
            <p>Sou Bruna Dantas, advogada. Acredito que cada pessoa merece um atendimento atento e uma estratégia jurídica que respeite suas particularidades e necessidades.</p>
            <p>Minha atuação reúne orientação, consultoria e acompanhamento jurídico, com ética e comunicação transparente ao longo de cada etapa.</p>
          </Reveal>
          <Reveal className="bd-about-quote" delay={0.08}>
            <span className="bd-quote-mark" aria-hidden="true">“</span>
            <blockquote>Cada caso começa<br />com uma<br /><em>escuta atenta.</em></blockquote>
            <p>É assim que compreendo o que é importante para você.</p>
          </Reveal>
        </div>
        <Reveal className="bd-values">{values.map((value, index) => <div className="bd-value" key={value.title}><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.description}</p></div>)}</Reveal>
      </div>
    </section>
  );
}
