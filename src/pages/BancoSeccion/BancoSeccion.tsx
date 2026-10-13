import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import NotFound from '../NotFound/NotFound';
import { bancoInformacionContent as content, bancoItems } from '../../content/bancoInformacion';
import './BancoSeccion.css';

// Página provisional de las secciones del Banco de Información que todavía no
// tienen contenido oficial (LINKA, Sistemas de reuniones). Las que ya tienen
// página propia (BIPAL) no pasan por aquí.
function BancoSeccion() {
  const { seccionId } = useParams<{ seccionId: string }>();
  const item = bancoItems.find((i) => i.id === seccionId && !i.to);

  if (!item) {
    return <NotFound />;
  }

  return (
    <div>
      <PageHeader title={item.title} />
      <div className="container banco-seccion-page">
        <PendingMessage>
          Próximamente encontrarás aquí información sobre esta sección.
        </PendingMessage>
        <BackButton to={content.basePath} label={content.sectionBackLabel} />
      </div>
    </div>
  );
}

export default BancoSeccion;
