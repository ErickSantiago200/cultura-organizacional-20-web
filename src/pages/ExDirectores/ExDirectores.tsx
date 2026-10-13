import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import './ExDirectores.css';

const BACK_TO = '/memoria-de-la-entidad/entrevistas-a-servidores';

// Sub-apartado de "Entrevistas a servidores". Aún no contamos con
// entrevistas, videos ni textos para esta sección — se deja preparada.
function ExDirectores() {
  return (
    <div>
      <PageHeader title="Ex-directores o servidores con amplia experiencia sobre la entidad" />
      <div className="container ex-directores-page">
        <PendingMessage>
          Próximamente encontrarás aquí las entrevistas a ex-directores y servidores con amplia
          experiencia sobre la entidad.
        </PendingMessage>
        <BackButton to={BACK_TO} label="Volver a Entrevistas a servidores públicos" />
      </div>
    </div>
  );
}

export default ExDirectores;
