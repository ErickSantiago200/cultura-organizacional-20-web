import { useParams } from 'react-router-dom';
import EventDetail from '../../components/EventDetail/EventDetail';
import NotFound from '../NotFound/NotFound';
import { premiaciones, premiacionesContent as content } from '../../content/premiaciones';

function Premiacion() {
  const { id } = useParams<{ id: string }>();
  const premiacion = premiaciones.find((p) => p.id === id);

  if (!premiacion) {
    return <NotFound />;
  }

  return (
    <EventDetail
      event={premiacion.event}
      backTo={content.detailBackTo}
      backLabel={content.detailBackLabel}
    />
  );
}

export default Premiacion;
