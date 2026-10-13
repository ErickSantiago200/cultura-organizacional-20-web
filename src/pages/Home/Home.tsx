import ModuleCard from '../../components/ModuleCard/ModuleCard';
import equipoCulturaImg from '../../assets/images/institucional/equipo-cultura.webp';
import { homeContent } from '../../content/home';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="home-hero container">
        <div className="home-hero__text">
          <span className="home-hero__bar" aria-hidden="true" />
          <h1 className="home-hero__title">
            <span className="home-hero__title-line2">{homeContent.heroTitle}</span>
          </h1>
          {homeContent.heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="home-hero__photo">
          <img
            src={equipoCulturaImg}
            alt={homeContent.institutionalPhotoAlt}
            className="home-hero__photo-img"
          />
        </div>
      </section>

      <section className="home-modules container">
        <div className="home-modules__heading">
          <h2>{homeContent.modulesSectionTitle}</h2>
          <p>{homeContent.modulesSectionSubtitle}</p>
        </div>

        <div className="home-modules__cards">
          {homeContent.modules.map((module) => (
            <ModuleCard
              key={module.id}
              icon={module.icon}
              title={module.title}
              description={module.description}
              ctaLabel={module.ctaLabel}
              to={module.to}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
