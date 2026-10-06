import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import { whatsappUrl } from '../content';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#atuacao', label: 'Áreas de atuação' },
  { href: '#sobre', label: 'Sobre a Bruna' },
  { href: '#contato', label: 'Contato' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="bd-header">
      <div className="bd-container bd-header-inner">
        <Brand />
        <nav className="bd-desktop-nav" aria-label="Navegação principal">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="bd-button bd-header-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale comigo</a>
        <button ref={toggleRef} className="bd-menu-toggle" type="button" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(value => !value)}>
          <span>{open ? 'Fechar' : 'Menu'}</span>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav id="menu-mobile" className="bd-mobile-nav" aria-label="Navegação mobile" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="bd-mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Fale comigo pelo WhatsApp</a>
      </nav>
    </header>
  );
}
