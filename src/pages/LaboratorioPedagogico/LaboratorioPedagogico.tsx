import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import {
  laboratorioPedagogicoContent as content,
  laboratorioSecciones,
} from '../../content/laboratorioPedagogico';
import './LaboratorioPedagogico.css';

function LaboratorioPedagogico() {
  return (
    <div>
      <PageHeader title={content.title} />
      <div className="container laboratorio-page">
        <div className="laboratorio-page__cards">
          {laboratorioSecciones.map((seccion) => (
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

        <div className="laboratorio-page__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default LaboratorioPedagogico;
