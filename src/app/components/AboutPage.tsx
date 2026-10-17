import { Reveal } from './Reveal';
import { contact } from '../content';
import portrait from '../../assets/cinematic/bruna-retrato-editorial.webp';

export function AboutPage() {
  return <section id="sobre" className="bd-section bd-about" aria-labelledby="about-title">
    <div className="bd-container bd-about-grid">
      <Reveal className="bd-about-content"><h2 id="about-title">Sobre mim</h2><div className="bd-about-copy">
        <p className="bd-about-registration">Bruna Dantas<br />Advogada · {contact.registration}</p>
        <p className="bd-about-lead">Escuta atenta, clareza e compromisso com os seus direitos.</p>
        <p>Sou Bruna Dantas, advogada. Acompanho pessoas e empresas com orientação jurídica que considera cada contexto.</p>
        <p>Do primeiro contato ao acompanhamento do caso, trabalho com diálogo, ética e comunicação transparente.</p>
      </div><a className="bd-text-link bd-about-contact" href="#contato">Fale com a Bruna <span aria-hidden="true">↗</span></a></Reveal>
      <Reveal className="bd-about-portrait bd-photo-frame" delay={0.08}><img className="cin-about-photo" src={portrait} alt="Bruna Dantas, advogada" width="960" height="1200" loading="lazy" /></Reveal>
    </div>
  </section>;
}
