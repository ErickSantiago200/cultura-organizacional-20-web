import './InfoBadge.css';

interface Props {
  icon: string;
  label: string;
  pending?: boolean;
}

function InfoBadge({ icon, label, pending = false }: Props) {
  return (
    <span className={`info-badge ${pending ? 'info-badge--pending' : ''}`}>
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}

export default InfoBadge;
