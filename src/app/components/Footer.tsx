import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { contact, whatsappUrl } from '../content';
import { usePrivacy } from './PrivacyCenter';

export function Footer() {
  const { openPrivacy, openCookies } = usePrivacy();
  return <footer className="bd-footer">
    <div className="bd-container bd-footer-main"><div className="bd-footer-hours"><p>Horário de atendimento</p>{contact.hours.map(hour => <p key={hour}>{hour}</p>)}</div><nav className="bd-footer-social" aria-label="Redes sociais e contato"><a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Bruna Dantas"><Instagram size={28} aria-hidden="true" /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Bruna Dantas"><MessageCircle size={28} aria-hidden="true" /></a><a href={'mailto:' + contact.email} aria-label="Enviar e-mail para Bruna Dantas"><Mail size={28} aria-hidden="true" /></a></nav><a className="bd-footer-top" href="#inicio">Voltar ao início ↑</a></div>
    <div className="bd-container bd-footer-bottom"><span>© {new Date().getFullYear()} Bruna Dantas · {contact.registration}</span><nav className="bd-footer-privacy" aria-label="Privacidade"><button type="button" onClick={openPrivacy} aria-haspopup="dialog" aria-controls="privacy-dialog">Política de privacidade</button><button type="button" onClick={openCookies} aria-haspopup="dialog" aria-controls="cookies-dialog">Cookies e privacidade</button></nav></div>
    <div className="bd-container bd-footer-credit">
      <a className="bd-creator" href="https://www.camilalopesstudio.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Design e desenvolvimento por Camila Lopes Studio. Abrir portfólio em nova aba.">
        <span className="bd-creator-label">Design &amp; desenvolvimento</span>
        <span className="bd-creator-wordmark">Camila Lopes<span className="bd-creator-studio">Studio</span><span className="bd-creator-arrow" aria-hidden="true">↗</span></span>
      </a>
    </div>
  </footer>;
}
