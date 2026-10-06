import { MapPin, MessageCircle, Monitor, Scale } from 'lucide-react';
import portrait from '../../assets/bruna-dantas.webp';
import logo from '../../assets/bruna-monograma-cobre.svg';
import { contact, whatsappUrl } from '../content';
import { Reveal } from './Reveal';

export function HomePage() {
  return (
    <section id="inicio" className="bd-hero" aria-labelledby="hero-title">
      <div className="bd-container bd-hero-grid">
        <Reveal className="bd-hero-content">
          <div className="bd-hero-brand">
            <img src={logo} alt="" width="120" height="115" />
            <h1 id="hero-title"><span>Bruna</span>{' '}<span>Dantas</span></h1>
          </div>
          <p className="bd-hero-specialty">Advocacia, consultoria e assessoria jurídica</p>
          <div className="bd-hero-rule" aria-hidden="true"><span /></div>
          <p className="bd-hero-manifesto">Atuação jurídica <em>estratégica, ética</em> e comprometida com a defesa dos seus direitos.</p>
          <p className="bd-hero-description">Escuta atenta, orientação clara e cuidado com as particularidades do seu caso.</p>
          <div className="bd-hero-actions">
            <a className="bd-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />Entre em contato</a>
            <a className="bd-text-link" href="#atuacao">Conheça minha atuação</a>
          </div>
          <div className="bd-hero-credentials">
            <span><Scale size={17} aria-hidden="true" />{contact.registration}</span>
            <span><Monitor size={17} aria-hidden="true" />{contact.serviceMode}</span>
          </div>
        </Reveal>
        <Reveal className="bd-portrait" delay={0.12}>
          <div className="bd-portrait-frame"><div className="bd-portrait-image"><img src={portrait} alt="Bruna Dantas, advogada" width="798" height="1126" loading="eager" /></div></div>
          <div className="bd-portrait-caption">
            <div><p>Bruna Dantas</p><span>Advogada e consultora jurídica</span></div>
            <span className="bd-portrait-caption-rule" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
      <div className="bd-container bd-hero-bottom"><span>Ética, escuta e compromisso em cada atendimento.</span><span><MapPin size={15} aria-hidden="true" />{contact.location}</span></div>
    </section>
  );
}
