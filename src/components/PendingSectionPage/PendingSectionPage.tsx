import PageHeader from '../PageHeader/PageHeader';
import BackButton from '../BackButton/BackButton';
import PendingMessage from '../PendingMessage/PendingMessage';
import './PendingSectionPage.css';

interface Props {
  title: string;
  message: string;
  backTo: string;
  backLabel: string;
}

/**
 * Página provisional de una sección que todavía no tiene contenido oficial:
 * título, aviso de "próximamente" y botón de regreso.
 */
function PendingSectionPage({ title, message, backTo, backLabel }: Props) {
  return (
    <div>
      <PageHeader title={title} />
      <div className="container pending-section-page">
        <PendingMessage>{message}</PendingMessage>
        <BackButton to={backTo} label={backLabel} />
      </div>
    </div>
  );
}

export default PendingSectionPage;
