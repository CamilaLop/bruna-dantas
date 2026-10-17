import { useState } from 'react';
import type { ServiceAudience } from './content';
import { Navigation } from './components/Navigation';
import { HeroServicesTransition } from './components/HeroServicesTransition';
import { AreasPage } from './components/AreasPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ContactInvitation } from './components/ContactInvitation';
import { PrivacyCenter } from './components/PrivacyCenter';
import { MotionProvider } from './motion';

function Site() {
  const [audience, setAudience] = useState<ServiceAudience>('todas');
  return (
    <div className="bd-page">
      <a className="bd-skip" href="#conteudo">Ir para o conteúdo</a>
      <Navigation />
      <main id="conteudo">
        <HeroServicesTransition onChooseAudience={setAudience} />
        <AreasPage audience={audience} onChooseAudience={setAudience} />
        <AboutPage />
        <ContactInvitation />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <MotionProvider><PrivacyCenter><Site /></PrivacyCenter></MotionProvider>;
}
