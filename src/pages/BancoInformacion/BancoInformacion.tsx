import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { bancoInformacionContent as content, bancoItems } from '../../content/bancoInformacion';
import './BancoInformacion.css';

function BancoInformacion() {
  return (
    <div>
      <PageHeader title={content.title} />
      <div className="container banco-page">
        <div className="banco-page__cards">
          {bancoItems.map((item) => (
            <ModuleCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              ctaLabel={item.ctaLabel}
              to={item.to ?? `${content.basePath}/${item.id}`}
            />
          ))}
        </div>

        <div className="banco-page__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default BancoInformacion;
