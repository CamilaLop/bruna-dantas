import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AreasPage } from './components/AreasPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Brand } from './components/Brand';
import { PrivacyCenter, usePrivacy } from './components/PrivacyCenter';
import { contact } from './content';

function Site() {
  const { openPrivacy, openCookies } = usePrivacy();
  return (
    <div className="bd-page">
      <a className="bd-skip" href="#conteudo">Ir para o conteúdo</a>
      <Navigation />
      <main id="conteudo">
        <HomePage />
        <AreasPage />
        <AboutPage />
        <ContactPage />
      </main>
      <footer className="bd-footer">
        <div className="bd-container bd-footer-main">
          <Brand />
          <p>{contact.registration}<br />{contact.serviceMode}</p>
          <a href="#inicio">Voltar ao início</a>
        </div>
        <div className="bd-container bd-footer-bottom">
          <span>© {new Date().getFullYear()} Bruna Dantas.</span>
          <nav className="bd-footer-privacy" aria-label="Privacidade">
            <button type="button" onClick={openPrivacy} aria-haspopup="dialog" aria-controls="privacy-dialog">Política de privacidade</button>
            <button type="button" onClick={openCookies} aria-haspopup="dialog" aria-controls="cookies-dialog">Cookies e privacidade</button>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <PrivacyCenter><Site /></PrivacyCenter>;
}
