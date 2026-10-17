import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';
import { clearPrivacyPreference, readPrivacyPreference, saveNecessaryPreference } from '../privacy';
import { PrivacyDialog } from './PrivacyDialog';
import { PrivacyPolicy } from './PrivacyPolicy';

const PrivacyContext = createContext({ openPrivacy: () => {}, openCookies: () => {} });

export function usePrivacy() {
  return useContext(PrivacyContext);
}

export function PrivacyCenter({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<'privacy' | 'cookies' | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [storageNotice, setStorageNotice] = useState('');

  useEffect(() => {
    setShowBanner(!readPrivacyPreference());
  }, []);

  function keepNecessary() {
    const saved = saveNecessaryPreference();
    setStorageNotice(saved ? '' : 'Sua escolha vale para esta visita. O navegador não permitiu salvá-la.');
    setShowBanner(false);
    setPanel(null);
  }

  function forgetPreference() {
    const cleared = clearPrivacyPreference();
    setStorageNotice(cleared ? 'Sua preferência foi apagada deste navegador.' : 'O navegador não permitiu apagar a preferência. Você pode removê-la nas configurações do navegador.');
    setShowBanner(true);
    setPanel(null);
  }

  return (
    <PrivacyContext.Provider value={{ openPrivacy: () => setPanel('privacy'), openCookies: () => setPanel('cookies') }}>
      <div className="bd-site">
      {children}
      {showBanner && (
        <aside className="bd-privacy-banner" aria-labelledby="privacy-banner-title">
          <div className="bd-privacy-banner-copy">
            <h2 id="privacy-banner-title"><ShieldCheck size={21} aria-hidden="true" />Sua privacidade importa</h2>
            <p>Esta versão não usa cookies de análise ou publicidade. Guardamos apenas sua escolha de privacidade neste navegador. <button type="button" className="bd-inline-button" onClick={() => setPanel('privacy')} aria-haspopup="dialog" aria-controls="privacy-dialog">Leia a política de privacidade.</button></p>
          </div>
          <div className="bd-privacy-banner-actions">
            <button type="button" className="bd-privacy-action" onClick={keepNecessary}>Usar somente necessários</button>
            <button type="button" className="bd-privacy-action" onClick={() => setPanel('cookies')} aria-haspopup="dialog" aria-controls="cookies-dialog">Ver preferências</button>
          </div>
        </aside>
      )}
      <p className="bd-privacy-status" role="status" aria-live="polite">{storageNotice}</p>
      <PrivacyDialog id="privacy-dialog" title="Política de privacidade" open={panel === 'privacy'} onClose={() => setPanel(null)}><PrivacyPolicy /></PrivacyDialog>
      <PrivacyDialog id="cookies-dialog" title="Cookies e privacidade" open={panel === 'cookies'} onClose={() => setPanel(null)}>
        <div className="bd-cookie-panel">
          <p>Você pode navegar e entrar em contato sem autorizar cookies de publicidade ou análise. Essas ferramentas não são utilizadas nesta versão.</p>
          <dl className="bd-cookie-categories">
            <div><dt>Preferência de privacidade <span>Armazenamento local</span></dt><dd>Memoriza sua escolha, com validade de 180 dias, sem guardar os dados do formulário nem enviá-la ao servidor. É registrada somente quando você confirma sua escolha. Depois de expirar, será apagada na próxima visita ao site.</dd></div>
            <div><dt>Análise de visitas <span>Não utilizada</span></dt><dd>Não há Google Analytics ou outro sistema de análise de visitas ativo neste site.</dd></div>
            <div><dt>Publicidade <span>Não utilizada</span></dt><dd>Não há pixels de publicidade ou ferramentas para personalizar anúncios.</dd></div>
          </dl>
          <p>As fontes e imagens carregam pelo próprio site. Os serviços externos, como o WhatsApp, têm suas próprias práticas de cookies quando você os abre.</p>
          <button type="button" className="bd-inline-button" onClick={() => setPanel('privacy')} aria-haspopup="dialog" aria-controls="privacy-dialog">Ler a política completa</button>
          <div className="bd-cookie-actions"><button type="button" className="bd-privacy-action" onClick={keepNecessary}>Usar somente necessários</button><button type="button" className="bd-privacy-action" onClick={forgetPreference}>Apagar minha preferência</button></div>
        </div>
      </PrivacyDialog>
      </div>
    </PrivacyContext.Provider>
  );
}
