import { useState } from 'react';
import type { FormEvent } from 'react';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, contact, whatsappUrl } from '../content';
import type { ContactFields } from '../content';
import { Reveal } from './Reveal';
import { usePrivacy } from './PrivacyCenter';

export function ContactPage() {
  const { openPrivacy } = usePrivacy();
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', phone: '', message: '' });
  const [feedback, setFeedback] = useState('');
  const [fallbackUrl, setFallbackUrl] = useState('');

  function updateField(field: keyof ContactFields, value: string) {
    setFields(previous => ({ ...previous, [field]: value }));
    setFeedback('');
    setFallbackUrl('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const field of ['name', 'message'] as const) {
      const control = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      control.setCustomValidity(fields[field].trim() ? '' : 'Preencha este campo.');
    }
    const phone = form.elements.namedItem('phone') as HTMLInputElement;
    const digits = fields.phone.replace(/\D/g, '');
    phone.setCustomValidity(!fields.phone.trim() || (digits.length >= 10 && digits.length <= 15) ? '' : 'Informe um telefone válido com DDD ou deixe o campo em branco.');
    if (!form.reportValidity()) return;
    const url = buildWhatsAppUrl(fields);
    setFallbackUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFeedback('Sua mensagem está pronta. Confirme o envio no WhatsApp.');
  }

  return (
    <section id="contato" className="bd-section bd-light bd-contact" aria-labelledby="contact-title">
      <div className="bd-container bd-contact-grid">
        <Reveal className="bd-contact-info">
          <p className="bd-eyebrow"><span className="bd-small-rule" />Contato</p>
          <h2 id="contact-title">Vamos conversar<br /><em>sobre o seu caso.</em></h2>
          <p>Entre em contato para tirar suas dúvidas ou agendar uma consulta.</p>
          <address className="bd-contact-links">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /><span><span className="bd-contact-label">WhatsApp</span>{contact.phone}</span></a>
            <a href={`mailto:${contact.email}`}><Mail size={19} aria-hidden="true" /><span><span className="bd-contact-label">E-mail</span>{contact.email}</span></a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={19} aria-hidden="true" /><span><span className="bd-contact-label">Instagram</span>{contact.instagramLabel}</span></a>
            <div><MapPin size={19} aria-hidden="true" /><span><span className="bd-contact-label">{contact.serviceMode}</span>{contact.location}</span></div>
          </address>
          <div className="bd-contact-hours"><h3>Horário de atendimento</h3>{contact.hours.map(hour => <p key={hour}>{hour}</p>)}</div>
        </Reveal>
        <Reveal className="bd-contact-form-wrap" delay={0.08}>
          <form className="bd-form" onSubmit={handleSubmit}>
            <h3>Deixe sua mensagem</h3>
            <p className="bd-form-intro">Nome e mensagem são obrigatórios. Os demais campos são opcionais.</p>
            <div className="bd-form-field"><label htmlFor="contact-name">Nome</label><input id="contact-name" name="name" autoComplete="name" aria-describedby="contact-purpose" required maxLength={160} value={fields.name} onChange={event => { event.target.setCustomValidity(''); updateField('name', event.target.value); }} placeholder="Como você se chama?" /></div>
            <div className="bd-form-row">
              <div className="bd-form-field"><label htmlFor="contact-email">E-mail <span>(opcional)</span></label><input id="contact-email" name="email" type="email" autoComplete="email" aria-describedby="contact-purpose" maxLength={254} value={fields.email} onChange={event => updateField('email', event.target.value)} placeholder="seu@email.com" /></div>
              <div className="bd-form-field"><label htmlFor="contact-phone">Telefone <span>(opcional)</span></label><input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" aria-describedby="contact-purpose" maxLength={25} value={fields.phone} onChange={event => { event.target.setCustomValidity(''); updateField('phone', event.target.value); }} placeholder="(22) 99999-9999" /></div>
            </div>
            <div className="bd-form-field"><label htmlFor="contact-message">Mensagem</label><textarea id="contact-message" name="message" aria-describedby="contact-purpose contact-message-help" required maxLength={3000} rows={4} value={fields.message} onChange={event => { event.target.setCustomValidity(''); updateField('message', event.target.value); }} placeholder="Conte brevemente o assunto do seu contato." /><p id="contact-message-help" className="bd-field-help">Descreva apenas o assunto geral, sem documentos ou informações sensíveis.</p></div>
            <div id="contact-purpose" className="bd-form-privacy">
              <p>Usamos seu nome e a mensagem para identificar você e responder à solicitação. E-mail e telefone, se informados, permitem retorno por outros canais e agendamento.</p>
              <p>Ao continuar, os dados preenchidos serão levados ao WhatsApp para preparar sua mensagem. <button type="button" className="bd-inline-button" onClick={openPrivacy} aria-haspopup="dialog" aria-controls="privacy-dialog">Leia a política de privacidade.</button></p>
            </div>
            <button className="bd-button bd-form-submit" type="submit"><MessageCircle size={18} aria-hidden="true" />Continuar no WhatsApp</button>
            <p className="bd-form-note">O WhatsApp abrirá com sua mensagem preenchida. Você confirma o envio por lá.</p>
            <div className="bd-form-feedback" role="status" aria-live="polite">{feedback}{fallbackUrl && <a className="bd-text-link" href={fallbackUrl} target="_blank" rel="noopener noreferrer">Abrir mensagem no WhatsApp</a>}</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
