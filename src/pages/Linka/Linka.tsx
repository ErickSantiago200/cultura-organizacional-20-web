import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import VideoEmbed from '../../components/VideoEmbed/VideoEmbed';
import { LINKA_YOUTUBE_URL, linkaContent as content } from '../../content/linka';
import './Linka.css';

function Linka() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container linka-page">
        <p className="linka-page__intro">{content.intro}</p>

        <section className="content-section">
          <h2>{content.queEs.title}</h2>
          <div className="linka-page__card">
            {content.queEs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="linka-page__section">
          <h2>{content.ruta.title}</h2>
          <ol className="linka-page__route">
            {content.ruta.pasos.map((paso) => (
              <li className="linka-page__route-step" key={paso.title}>
                <h3>{paso.title}</h3>
                <p>{paso.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="linka-page__section">
          <h2>{content.paraQueSirve.title}</h2>
          <ul className="linka-page__features">
            {content.paraQueSirve.items.map((item) => (
              <li className="linka-page__feature" key={item.title}>
                <span className="linka-page__feature-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="linka-page__section">
          <h2>{content.soportes.title}</h2>
          <p className="linka-page__section-intro">{content.soportes.intro}</p>
          <ul className="linka-page__features linka-page__features--docs">
            {content.soportes.items.map((item) => (
              <li className="linka-page__feature" key={item.title}>
                <span className="linka-page__feature-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="linka-page__note">{content.soportes.estados}</p>
        </section>

        <section className="linka-page__section">
          <h2>{content.acta.title}</h2>
          <p className="linka-page__section-intro">{content.acta.intro}</p>
          <ul className="linka-page__chips">
            {content.acta.items.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true">{item.icon}</span>
                {item.title}
              </li>
            ))}
          </ul>
          <aside className="linka-page__checkpoint">
            <strong>{content.acta.puntoControl.title}</strong>
            <p>“{content.acta.puntoControl.text}”</p>
          </aside>
        </section>

        <section className="linka-page__section">
          <h2>{content.supervision.title}</h2>
          <p className="linka-page__section-intro">{content.supervision.intro}</p>
          <ol className="linka-page__timeline">
            {content.supervision.pasos.map((paso) => (
              <li key={paso.title}>
                <h3>{paso.title}</h3>
                <p>{paso.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="linka-page__section">
          <h2>{content.cierre.title}</h2>
          <ol className="linka-page__route linka-page__route--3">
            {content.cierre.pasos.map((paso) => (
              <li className="linka-page__route-step" key={paso.title}>
                <h3>{paso.title}</h3>
                <p>{paso.text}</p>
              </li>
            ))}
          </ol>
          <div className="linka-page__done">
            <span aria-hidden="true">🎉</span>
            <strong>{content.cierre.completado.title}</strong>
            <p>{content.cierre.completado.text}</p>
          </div>
        </section>

        <section className="linka-page__section">
          <h2>{content.carrusel.title}</h2>
          <p className="linka-page__section-intro">{content.carrusel.intro}</p>
          <PhotoCarousel
            photos={content.carrusel.capturas}
            label={content.carrusel.label}
            autoPlay={false}
            imageFit="contain"
            wide
            openOriginal
          />
        </section>

        <section className="linka-page__section linka-page__center">
          <h2>{content.ingreso.title}</h2>
          <p>{content.ingreso.text}</p>
          <a
            href={content.ingreso.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linka-page__portal-button"
          >
            {content.ingreso.label}
          </a>
        </section>

        <section className="linka-page__section linka-page__center">
          <h2>{content.funciona.title}</h2>
          <p className="linka-page__section-intro">{content.funciona.text}</p>
          <VideoEmbed
            url={LINKA_YOUTUBE_URL}
            title={content.funciona.videoTitle}
            placeholder={content.funciona.placeholder}
          />
          {LINKA_YOUTUBE_URL && (
            <a
              href={LINKA_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="linka-page__secondary-button"
            >
              {content.funciona.youtubeButtonLabel}
            </a>
          )}
        </section>

        <section className="linka-page__download">
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

        <div className="linka-page__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default Linka;
