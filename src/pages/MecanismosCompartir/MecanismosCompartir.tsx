import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { mecanismosCompartirContent as content } from '../../content/mecanismosCompartir';
import './MecanismosCompartir.css';

function MecanismosCompartir() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container mecanismos-page">
        <div className="mecanismos-page__cards">
          {content.cards.map((card) => (
            <ModuleCard
              key={card.to}
              icon={card.icon}
              title={card.title}
              description={card.description}
              ctaLabel={card.ctaLabel}
              to={card.to}
            />
          ))}
        </div>

        <div className="mecanismos-page__back">
          <BackButton to="/" label="Volver a Inicio" />
        </div>
      </div>
    </div>
  );
}

export default MecanismosCompartir;
