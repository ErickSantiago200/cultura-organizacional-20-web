import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import {
  compartirSecciones,
  procesoAprendizajeContent as content,
} from '../../content/procesoAprendizaje';
import './ProcesoAprendizaje.css';

function ProcesoAprendizaje() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container proceso-page">
        <div className="proceso-page__cards">
          {compartirSecciones.map((seccion) => (
            <ModuleCard
              key={seccion.id}
              icon={seccion.icon}
              title={seccion.title}
              description={seccion.description}
              ctaLabel={seccion.ctaLabel}
              to={`${content.basePath}/${seccion.id}`}
            />
          ))}
        </div>

        <div className="proceso-page__back">
          <BackButton to="/" label="Volver a Inicio" />
        </div>
      </div>
    </div>
  );
}

export default ProcesoAprendizaje;
