import { Link } from 'react-router-dom';
import './BackButton.css';

interface Props {
  to: string;
  label: string;
}

function BackButton({ to, label }: Props) {
  return (
    <Link to={to} className="back-button">
      <span aria-hidden="true">←</span> {label}
    </Link>
  );
}

export default BackButton;
