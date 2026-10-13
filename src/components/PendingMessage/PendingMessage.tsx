import type { ReactNode } from 'react';
import './PendingMessage.css';

interface Props {
  children: ReactNode;
}

/**
 * Aviso breve y discreto para secciones cuyo contenido oficial todavía no
 * ha sido proporcionado. No inventa contenido: solo indica que llegará
 * más adelante.
 */
function PendingMessage({ children }: Props) {
  return <p className="pending-message">{children}</p>;
}

export default PendingMessage;
