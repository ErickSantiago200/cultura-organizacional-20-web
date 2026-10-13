import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { premiaciones, premiacionesContent as content } from '../../content/premiaciones';
import './Premiaciones.css';

function Premiaciones() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container premiaciones-page">
        <div className="premiaciones-page__cards">
          {premiaciones.map((premiacion) => (
            <ModuleCard
              key={premiacion.id}
              icon={premiacion.icon}
              title={premiacion.cardTitle}
              description={premiacion.cardDescription}
              ctaLabel={premiacion.ctaLabel}
              to={`${content.detailBackTo}/${premiacion.id}`}
            />
          ))}
        </div>

        <div className="premiaciones-page__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default Premiaciones;
