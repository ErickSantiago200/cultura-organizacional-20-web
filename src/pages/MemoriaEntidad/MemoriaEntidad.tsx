import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { memoriaEntidadContent as content } from '../../content/memoriaEntidad';
import './MemoriaEntidad.css';

function MemoriaEntidad() {
  return (
    <div>
      <PageHeader title={content.title} />
      <div className="container memoria-entidad-page">
        <div className="memoria-entidad-page__cards">
          {content.apartados.map((apartado) => (
            <ModuleCard
              key={apartado.to}
              icon={apartado.icon}
              title={apartado.title}
              description={apartado.description}
              ctaLabel={apartado.ctaLabel}
              to={apartado.to}
            />
          ))}
        </div>

        <div className="memoria-entidad-page__back">
          <BackButton to="/" label="Volver a Inicio" />
        </div>
      </div>
    </div>
  );
}

export default MemoriaEntidad;
