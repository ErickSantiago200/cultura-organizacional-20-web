import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import VideoEmbed from '../../components/VideoEmbed/VideoEmbed';
import { sistemaReunionesContent as content } from '../../content/sistemaReuniones';
import './SistemaReuniones.css';

function SistemaReuniones() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container sistema-reuniones">
        <section className="sistema-reuniones__section">
          <h2>{content.queEs.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.queEs.text}</p>
        </section>

        <section className="sistema-reuniones__section">
          <h2>{content.funcionalidades.title}</h2>
          <ul className="sistema-reuniones__cards sistema-reuniones__cards--3">
            {content.funcionalidades.cards.map((card) => (
              <li className="sistema-reuniones__card" key={card.title}>
                <span className="sistema-reuniones__icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sistema-reuniones__section">
          <h2>{content.tutorial.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.tutorial.subtitle}</p>
          <VideoEmbed
            url={content.tutorial.url}
            title={content.tutorial.videoTitle}
            placeholder={content.tutorial.placeholder}
            vertical
            privacyEnhanced={false}
          />
        </section>

        <section className="sistema-reuniones__section">
          <h2>{content.asistencia.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.asistencia.intro}</p>
          <ul className="sistema-reuniones__cards sistema-reuniones__cards--3">
            {content.asistencia.accesos.map((acceso) => (
              <li className="sistema-reuniones__card" key={acceso.title}>
                <span className="sistema-reuniones__icon" aria-hidden="true">
                  {acceso.icon}
                </span>
                <h3>{acceso.title}</h3>
                <p>{acceso.text}</p>
              </li>
            ))}
          </ul>
          <ol className="sistema-reuniones__steps">
            {content.asistencia.pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
          <p className="sistema-reuniones__note">{content.asistencia.nota}</p>
        </section>

        <section className="sistema-reuniones__highlight">
          <h2>{content.gestion.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.gestion.text}</p>
          <ol className="sistema-reuniones__flow" aria-label="Proceso de seguimiento">
            {content.gestion.proceso.map((etapa) => (
              <li key={etapa}>{etapa}</li>
            ))}
          </ol>
          <ul className="sistema-reuniones__cards sistema-reuniones__cards--3">
            {content.gestion.cards.map((card) => (
              <li className="sistema-reuniones__card" key={card.title}>
                <span className="sistema-reuniones__icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sistema-reuniones__section">
          <h2>{content.certificados.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.certificados.text}</p>
          <ol className="sistema-reuniones__cards sistema-reuniones__cards--3 sistema-reuniones__cert-steps">
            {content.certificados.pasos.map((paso) => (
              <li className="sistema-reuniones__card" key={paso.title}>
                <h3>{paso.title}</h3>
                <p>{paso.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="sistema-reuniones__section">
          <h2>{content.carrusel.title}</h2>
          <p className="sistema-reuniones__section-intro">{content.carrusel.intro}</p>
          <PhotoCarousel
            photos={content.carrusel.capturas}
            label={content.carrusel.label}
            autoPlay={false}
            imageFit="contain"
            wide
            openOriginal
          />
        </section>

        <section className="sistema-reuniones__download">
          <h2>{content.instructivo.title}</h2>
          <p>{content.instructivo.text}</p>
          <a
            href={content.instructivo.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            {content.instructivo.buttonLabel}
          </a>
        </section>

        <div className="sistema-reuniones__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default SistemaReuniones;
