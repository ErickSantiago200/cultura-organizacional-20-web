import { useParams } from 'react-router-dom';
import EventDetail from '../../components/EventDetail/EventDetail';
import NotFound from '../NotFound/NotFound';
import { buscarCafe, cafesBasePath } from '../../content/cafesDelConocimiento';

function CafeDelConocimiento() {
  const { anio, numero } = useParams<{ anio: string; numero: string }>();
  const cafe = buscarCafe(anio, numero);

  if (!cafe) {
    return <NotFound />;
  }

  return (
    <EventDetail
      event={cafe}
      backTo={cafesBasePath}
      backLabel="Volver a Cafés del Conocimiento"
      pendingMessage="Próximamente encontrarás aquí información, contenidos y recursos relacionados con este espacio de conocimiento."
    />
  );
}

export default CafeDelConocimiento;
