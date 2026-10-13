import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import NavLinkCard from '../../components/NavLinkCard/NavLinkCard';
import { entrevistasServidoresContent as content } from '../../content/entrevistasServidores';
import './EntrevistasServidores.css';

function EntrevistasServidores() {
  return (
    <div>
      <PageHeader title={content.title} />
      <div className="container entrevistas-page">
        <div className="entrevistas-page__list narrow">
          {content.apartados.map((apartado) => (
            <NavLinkCard
              key={apartado.to}
              number={apartado.number}
              title={apartado.title}
              to={apartado.to}
            />
          ))}
        </div>

        <div className="entrevistas-page__back">
          <BackButton
            to="/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad"
            label="Volver a la línea de tiempo"
          />
        </div>
      </div>
    </div>
  );
}

export default EntrevistasServidores;
