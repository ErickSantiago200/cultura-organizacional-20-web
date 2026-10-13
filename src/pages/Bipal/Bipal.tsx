import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import { bipalContent as content } from '../../content/bipal';
import './Bipal.css';

function Bipal() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container bipal-page">
        <BackButton to={content.backTo} label={content.backLabel} />

        <p className="bipal-page__intro">{content.intro}</p>

        <section className="content-section">
          <h2>¿Qué es BIPAL?</h2>
          <p>{content.queEs}</p>
        </section>

        <section className="content-section">
          <h2>¿Para qué sirve?</h2>
          <div className="bipal-page__feature-grid">
            {content.paraQueSirve.map((feature) => (
              <div className="bipal-page__feature-card" key={feature.text}>
                <span aria-hidden="true">{feature.icon}</span>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>¿Por qué es importante?</h2>
          <p>{content.porQueEsImportante}</p>
        </section>

        <section className="content-section bipal-page__image-section">
          <h2>Imagen de la plataforma</h2>
          <img
            src={content.plataformaImg}
            alt={content.plataformaImgAlt}
            className="bipal-page__platform-img"
          />
        </section>

        <section className="content-section">
          <h2>Evolución de BIPAL</h2>
          <PendingMessage>{content.evolucion}</PendingMessage>
        </section>

        <section className="content-section">
          <h2>¿Qué contiene BIPAL?</h2>
          <div className="bipal-page__feature-grid">
            {content.queContiene.map((feature) => (
              <div className="bipal-page__feature-card" key={feature.text}>
                <span aria-hidden="true">{feature.icon}</span>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bipal-page__guia">
          <h2>{content.guia.title}</h2>
          <p>{content.guia.subtitle}</p>
          <img src={content.guia.img} alt={content.guia.imgAlt} className="bipal-page__guia-img" />
          <a
            href={content.guia.img}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            {content.guia.ctaLabel}
          </a>
        </section>
      </div>
    </div>
  );
}

export default Bipal;
