import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

export function PrivacyDialog({ id, title, open, onClose, children }: {
  id: string;
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className="bd-dialog"
      aria-labelledby={`${id}-title`}
      aria-modal="true"
      onCancel={event => { event.preventDefault(); onClose(); }}
    >
      <header className="bd-dialog-header">
        <h2 id={`${id}-title`}>{title}</h2>
        <button type="button" className="bd-dialog-close" aria-label={`Fechar ${title.toLowerCase()}`} onClick={onClose} autoFocus><X size={23} aria-hidden="true" /></button>
      </header>
      <div className="bd-dialog-body">{children}</div>
    </dialog>
  );
}
