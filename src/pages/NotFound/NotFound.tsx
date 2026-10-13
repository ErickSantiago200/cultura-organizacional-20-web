import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';

function NotFound() {
  return (
    <div>
      <PageHeader title="Página no encontrada" />
      <div className="container" style={{ textAlign: 'center', padding: '48px 0' }}>
        <p>La página que buscas no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default NotFound;
