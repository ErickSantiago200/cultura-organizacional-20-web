import { useParams } from 'react-router-dom';
import PendingSectionPage from '../../components/PendingSectionPage/PendingSectionPage';
import NotFound from '../NotFound/NotFound';

interface Props {
  /** Secciones del menú padre; solo las marcadas `pending` pasan por esta página. */
  items: { id: string; title: string; pending?: boolean }[];
  message: string;
  backTo: string;
  backLabel: string;
}

// Página provisional (ruta `:seccionId`) de las secciones que todavía no
// tienen contenido oficial: título, aviso de "próximamente" y regreso.
function SeccionPendiente({ items, message, backTo, backLabel }: Props) {
  const { seccionId } = useParams<{ seccionId: string }>();
  const item = items.find((i) => i.id === seccionId && i.pending);

  if (!item) {
    return <NotFound />;
  }

  return (
    <PendingSectionPage title={item.title} message={message} backTo={backTo} backLabel={backLabel} />
  );
}

export default SeccionPendiente;
