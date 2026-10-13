import { Link } from 'react-router-dom';
import './NavLinkCard.css';

interface Props {
  number: number;
  title: string;
  to: string;
}

/**
 * Botón de navegación directa con el mismo patrón visual que el encabezado
 * verde sólido de AccordionItem (número, título, verde institucional), pero
 * sin comportamiento de acordeón: todo el bloque es un enlace que navega de
 * inmediato a `to`, sin contenido desplegable.
 */
function NavLinkCard({ number, title, to }: Props) {
  return (
    <Link to={to} className="nav-link-card">
      <span className="nav-link-card__number">{number}</span>
      <span className="nav-link-card__title">{title}</span>
      <span className="nav-link-card__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default NavLinkCard;
