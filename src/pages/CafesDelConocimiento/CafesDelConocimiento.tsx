import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import NavLinkCard from '../../components/NavLinkCard/NavLinkCard';
import { cafesPorAnio, rutaCafe } from '../../content/cafesDelConocimiento';
import { mecanismosCompartirContent } from '../../content/mecanismosCompartir';
import './CafesDelConocimiento.css';

function CafesDelConocimiento() {
  return (
    <div>
      <PageHeader
        title="Cafés del Conocimiento"
        subtitle="Espacios para compartir experiencias, conocimientos y aprendizajes entre los servidores de la entidad."
      />
      <div className="container cafes-del-conocimiento-page">
        {cafesPorAnio.map(({ anio, cafes }) => (
          <section className="cafes-del-conocimiento-page__year" key={anio} aria-label={`Cafés ${anio}`}>
            <h2>{anio}</h2>
            <div className="cafes-del-conocimiento-page__list">
              {cafes.map((cafe) => (
                <NavLinkCard key={cafe.numero} number={cafe.numero} title={cafe.title} to={rutaCafe(cafe)} />
              ))}
            </div>
          </section>
        ))}

        <div className="cafes-del-conocimiento-page__back">
          <BackButton
            to={mecanismosCompartirContent.basePath}
            label={mecanismosCompartirContent.backLabel}
          />
          <BackButton to="/" label="Volver a Inicio" />
        </div>
      </div>
    </div>
  );
}

export default CafesDelConocimiento;
