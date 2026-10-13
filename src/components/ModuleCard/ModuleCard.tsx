import { Link } from 'react-router-dom';
import './ModuleCard.css';

interface Props {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
}

function ModuleCard({ icon, title, description, ctaLabel, to }: Props) {
  return (
    <div className="module-card">
      <span className="module-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="module-card__title">{title}</h3>
      <p className="module-card__description">{description}</p>
      <Link to={to} className="cta-button module-card__cta">
        {ctaLabel}
      </Link>
    </div>
  );
}

export default ModuleCard;
