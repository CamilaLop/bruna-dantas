import { useState } from 'react';
import type { FormEvent } from 'react';
import { buildWhatsAppUrl, contact, whatsappUrl } from '../content';
import type { ContactFields } from '../content';
import { Reveal } from './Reveal';
import { usePrivacy } from './PrivacyCenter';

export function ContactPage() {
  const { openPrivacy } = usePrivacy();
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');
  const [fallbackUrl, setFallbackUrl] = useState('');
  function updateField(field: keyof ContactFields, value: string) {
    setFields(previous => ({ ...previous, [field]: value })); setFeedback(''); setFallbackUrl('');
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const field of ['name', 'message'] as const) {
      const control = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      control.setCustomValidity(fields[field].trim() ? '' : 'Preencha este campo.');
    }
    if (!form.reportValidity()) return;
    const url = buildWhatsAppUrl(fields);
    setFallbackUrl(url); window.open(url, '_blank', 'noopener,noreferrer');
    setFeedback('Sua mensagem está pronta. Confirme o envio no WhatsApp.');
  }
  return <section id="contato" className="bd-section bd-light bd-contact" aria-labelledby="contact-title">
    <div className="bd-container bd-contact-grid">
      <Reveal className="bd-contact-info"><h2 id="contact-title">Canais de contato</h2><a className="bd-button bd-contact-direct" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
        <div className="bd-contact-details"><p>Entre em contato para tirar suas dúvidas<br className="bd-desktop-break" /> ou agendar uma consulta.</p><address className="bd-contact-links">
          <div><span className="bd-contact-label">WhatsApp</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{contact.phone}</a></div>
          <div><span className="bd-contact-label">E-mail</span><a href={'mailto:' + contact.email}>{contact.email}</a></div>
          <div><span className="bd-contact-label">Instagram</span><a href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramLabel}</a></div>
          <div><span>{contact.serviceMode}</span><span>{contact.location}</span></div>
        </address></div>
      </Reveal>
      <Reveal className="bd-contact-form-wrap" delay={0.08}><form className="bd-form" onSubmit={handleSubmit}>
        <h3>Qual é a sua dúvida?</h3><p className="bd-contact-form-intro">Conte o assunto em poucas palavras para iniciar o atendimento.</p>
        <div className="bd-form-field"><label htmlFor="contact-name">Nome</label><input id="contact-name" name="name" autoComplete="name" aria-describedby="contact-purpose" required maxLength={160} value={fields.name} onChange={event => { event.target.setCustomValidity(''); updateField('name', event.target.value); }} /></div>
        <div className="bd-form-field"><label htmlFor="contact-email">E-mail <span>(opcional)</span></label><input id="contact-email" name="email" type="email" autoComplete="email" aria-describedby="contact-purpose" maxLength={254} value={fields.email} onChange={event => updateField('email', event.target.value)} /></div>
        <div className="bd-form-field"><label htmlFor="contact-message">Motivo do contato</label><textarea id="contact-message" name="message" aria-describedby="contact-purpose contact-message-help" required maxLength={3000} rows={2} value={fields.message} onChange={event => { event.target.setCustomValidity(''); updateField('message', event.target.value); }} /><p id="contact-message-help" className="bd-field-help">Informe apenas o assunto geral, sem dados sensíveis ou documentos.</p></div>
        <div id="contact-purpose" className="bd-form-privacy"><p>Seu nome e a mensagem são usados para responder ao contato. O e-mail é opcional e permite retorno por esse canal.</p><p>Ao continuar, os dados serão levados ao WhatsApp para preparar sua mensagem. <button type="button" className="bd-inline-button" onClick={openPrivacy} aria-haspopup="dialog" aria-controls="privacy-dialog">Política de privacidade</button>.</p></div>
        <button className="bd-button bd-form-submit" type="submit">Continuar no WhatsApp ↗</button><p className="bd-form-note">O WhatsApp abrirá com sua mensagem preenchida. Você confirma o envio por lá.</p><div className="bd-form-feedback" role="status" aria-live="polite">{feedback}{fallbackUrl && <a className="bd-text-link" href={fallbackUrl} target="_blank" rel="noopener noreferrer">Abrir mensagem no WhatsApp</a>}</div>
      </form></Reveal>
    </div>
  </section>;
}
