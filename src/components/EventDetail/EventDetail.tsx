import BackButton from '../BackButton/BackButton';
import InfoBadge from '../InfoBadge/InfoBadge';
import PendingMessage from '../PendingMessage/PendingMessage';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import type { CarouselPhoto } from '../PhotoCarousel/PhotoCarousel';
import './EventDetail.css';

export interface EventBadge {
  icon: string;
  label: string;
}

export interface EventPaso {
  title: string;
  description?: string;
  /** "Resultados obtenidos" de esa estación/paso, tal como figuran en el informe. */
  results?: string[];
}

export interface EventExtraSection {
  title: string;
  intro?: string;
  items?: string[];
}

export interface EventPoster {
  src: string;
  alt: string;
}

/**
 * Datos de un evento institucional (Café del Conocimiento, Premiación...).
 * Todos los campos salvo `title` son opcionales: solo se muestran las
 * secciones que tienen valor. Mientras un evento no tenga `objetivo` y
 * (`descripcion` o `introduccion`), la página muestra el aviso de
 * "próximamente" en vez de inventar información.
 */
export interface EventDetailData {
  title: string;
  /** Nombre oficial completo (se muestra bajo el título). */
  subtitle?: string;
  date?: string;
  /** Datos del evento (hora, modalidad, lugar, público) como insignias. */
  badges?: EventBadge[];
  introduccion?: string;
  /** Pregunta que guió la jornada; se destaca visualmente bajo la introducción. */
  preguntaOrientadora?: string;
  /** Título de la sección del objetivo (por defecto "Objetivo"). */
  objetivoTitle?: string;
  objetivo?: string;
  objetivosEspecificos?: string[];
  descripcion?: string;
  extraSections?: EventExtraSection[];
  /** Título de la sección de contenidos (por defecto "Contenidos abordados"). */
  contenidosTitle?: string;
  contenidos?: string[];
  desarrollo?: { intro?: string; pasos: EventPaso[] };
  resultados?: { intro?: string; items: string[] };
  infoAdicional?: string;
  /** Título de la sección de afiches (por defecto "Afiche(s) del evento"). */
  postersTitle?: string;
  posters?: EventPoster[];
  /** Título de la galería de fotografías (por defecto "Evidencias Fotográficas"). */
  photosTitle?: string;
  photos?: CarouselPhoto[];
}

interface Props {
  event: EventDetailData;
  backTo: string;
  backLabel: string;
  /** Texto a mostrar mientras el evento no tenga contenido oficial. */
  pendingMessage?: string;
}

function EventDetail({ event, backTo, backLabel, pendingMessage }: Props) {
  const hasContent = Boolean(event.objetivo && (event.descripcion || event.introduccion));

  return (
    <div className="container event-detail">
      <BackButton to={backTo} label={backLabel} />

      <h1 className="event-detail__title">{event.title}</h1>

      {hasContent ? (
        <>
          {event.subtitle && <p className="event-detail__subtitle">{event.subtitle}</p>}

          {event.date && (
            <p
              className={`event-detail__date ${event.badges ? 'event-detail__date--with-badges' : ''}`}
            >
              {event.date}
            </p>
          )}

          {event.badges && (
            <div className="badge-row">
              {event.badges.map((badge) => (
                <InfoBadge key={badge.label} icon={badge.icon} label={badge.label} />
              ))}
            </div>
          )}

          {event.introduccion && (
            <section className="content-section">
              <h2>Introducción</h2>
              <p>{event.introduccion}</p>
            </section>
          )}

          {event.preguntaOrientadora && (
            <blockquote className="event-detail__question">
              <span className="event-detail__question-label">Pregunta orientadora</span>
              {event.preguntaOrientadora}
            </blockquote>
          )}

          <section className="content-section">
            <h2>{event.objetivoTitle ?? 'Objetivo'}</h2>
            <p>{event.objetivo}</p>
            {event.objetivosEspecificos && (
              <>
                <h3 className="event-detail__subheading">Objetivos específicos</h3>
                <ul className="event-detail__list">
                  {event.objetivosEspecificos.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          {event.descripcion && (
            <section className="content-section">
              <h2>Descripción</h2>
              <p>{event.descripcion}</p>
            </section>
          )}

          {event.extraSections?.map((section) => (
            <section className="content-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.intro && <p>{section.intro}</p>}
              {section.items && (
                <ul className="event-detail__list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {event.contenidos && (
            <section className="content-section">
              <h2>{event.contenidosTitle ?? 'Contenidos abordados'}</h2>
              <ul className="event-detail__list event-detail__list--columns">
                {event.contenidos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {event.desarrollo && (
            <section className="content-section">
              <h2>Desarrollo y metodología</h2>
              {event.desarrollo.intro && <p>{event.desarrollo.intro}</p>}
              <ol className="event-detail__steps">
                {event.desarrollo.pasos.map((paso, index) => (
                  <li className="event-detail__step" key={paso.title}>
                    <span className="event-detail__step-number" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className="event-detail__step-body">
                      <h3>{paso.title}</h3>
                      {paso.description && <p>{paso.description}</p>}
                      {paso.results && (
                        <>
                          <p className="event-detail__step-label">Resultados obtenidos</p>
                          <ul className="event-detail__list">
                            {paso.results.map((result) => (
                              <li key={result}>{result}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {event.resultados && (
            <section className="content-section">
              <h2>Resultados y aprendizajes</h2>
              {event.resultados.intro && <p>{event.resultados.intro}</p>}
              <ul className="event-detail__list">
                {event.resultados.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {event.infoAdicional && (
            <section className="content-section">
              <h2>Información adicional</h2>
              <p>{event.infoAdicional}</p>
            </section>
          )}

          {event.posters && event.posters.length > 0 && (
            <section className="event-detail__posters">
              <h2>
                {event.postersTitle ??
                  (event.posters.length > 1 ? 'Afiches del evento' : 'Afiche del evento')}
              </h2>
              <div className="event-detail__posters-row">
                {event.posters.map((poster) => (
                  <a
                    key={poster.src}
                    href={poster.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${poster.alt} (abrir en tamaño completo)`}
                  >
                    <img src={poster.src} alt={poster.alt} />
                  </a>
                ))}
              </div>
            </section>
          )}

          {event.photos && (
            <section className="event-detail__gallery">
              <h2>{event.photosTitle ?? 'Evidencias Fotográficas'}</h2>
              <PhotoCarousel
                photos={event.photos}
                label={`${event.photosTitle ?? 'Evidencias Fotográficas'} — ${event.title}`}
                showThumbnails
                imageFit="contain"
              />
            </section>
          )}
        </>
      ) : (
        pendingMessage && <PendingMessage>{pendingMessage}</PendingMessage>
      )}
    </div>
  );
}

export default EventDetail;
