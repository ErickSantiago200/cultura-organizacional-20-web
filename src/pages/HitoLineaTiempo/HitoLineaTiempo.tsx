import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import NotFound from '../NotFound/NotFound';
import { hitosLineaTiempo } from '../../content/lineaDeTiempo';
import './HitoLineaTiempo.css';

const BACK_TO = '/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad';

// Página genérica para los hitos de la línea de tiempo que todavía no
// cuentan con contenido oficial confirmado. BIPAL tiene su propia página
// dedicada (Bipal.tsx) y no pasa por este componente.
function HitoLineaTiempo() {
  const { hitoId } = useParams<{ hitoId: string }>();
  const hito = hitosLineaTiempo.find((h) => h.id === hitoId && !h.to);

  if (!hito) {
    return <NotFound />;
  }

  return (
    <div>
      <PageHeader title={hito.title} />
      <div className="container hito-linea-tiempo-page">
        <PendingMessage>
          Próximamente encontrarás aquí información sobre este hito de la línea de tiempo.
        </PendingMessage>
        <BackButton to={BACK_TO} label="Volver a la línea de tiempo" />
      </div>
    </div>
  );
}

export default HitoLineaTiempo;
