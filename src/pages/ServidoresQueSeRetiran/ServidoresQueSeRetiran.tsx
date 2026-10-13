import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import './ServidoresQueSeRetiran.css';

const BACK_TO = '/memoria-de-la-entidad/entrevistas-a-servidores';

// Sub-apartado de "Entrevistas a servidores". Aún no contamos con
// entrevistas, videos ni textos para esta sección — se deja preparada.
function ServidoresQueSeRetiran() {
  return (
    <div>
      <PageHeader title="Servidores que se retiran" />
      <div className="container servidores-retiran-page">
        <PendingMessage>
          Próximamente encontrarás aquí las entrevistas a servidores que se retiran.
        </PendingMessage>
        <BackButton to={BACK_TO} label="Volver a Entrevistas a servidores públicos" />
      </div>
    </div>
  );
}

export default ServidoresQueSeRetiran;
