import { useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './PhotoCarousel.css';

export interface CarouselPhoto {
  id: number;
  src?: string;
  alt: string;
  /** Texto breve que se muestra bajo el carrusel mientras esta imagen está activa. */
  caption?: string;
}

interface Props {
  photos: CarouselPhoto[];
  label?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  /**
   * 'cover' (por defecto) llena el contenedor recortando lo necesario.
   * 'contain' muestra la fotografía completa, centrada, sin recortar ni
   * deformar — útil cuando las fotos tienen proporciones muy distintas
   * entre sí (ej. mezcla de horizontales y verticales).
   */
  imageFit?: 'cover' | 'contain';
  /** Marco más ancho (para capturas de pantalla con texto que debe leerse). */
  wide?: boolean;
  /** Al tocar la imagen se abre el archivo original en otra pestaña. */
  openOriginal?: boolean;
}

/**
 * Carrusel de fotografías reutilizable. Funciona con cualquier cantidad de
 * elementos (4, 10, 20...) sin necesidad de tocar el componente: solo hay
 * que editar el arreglo de `photos` que se le pasa. Mientras un elemento no
 * tenga `src`, se muestra un placeholder visual en su lugar.
 */
function PhotoCarousel({
  photos,
  label = 'Galería de fotografías',
  autoPlay = true,
  autoPlayInterval = 5000,
  showThumbnails = false,
  imageFit = 'cover',
  wide = false,
  openOriginal = false,
}: Props) {
  const total = photos.length;
  const [index, setIndex] = useState(0);
  const [userPlaying, setUserPlaying] = useState(autoPlay);
  const [hovering, setHovering] = useState(false);

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const effectivePlaying = userPlaying && !hovering && total > 1;

  useEffect(() => {
    if (!effectivePlaying) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [effectivePlaying, total, autoPlayInterval]);

  if (total === 0) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <div
      className={`photo-carousel ${wide ? 'photo-carousel--wide' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="photo-carousel__viewport"
        role="region"
        aria-roledescription="carrusel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className="photo-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((photo) => (
            <div
              className={`photo-carousel__slide ${imageFit === 'contain' ? 'photo-carousel__slide--contain' : ''}`}
              key={photo.id}
            >
              {photo.src && openOriginal ? (
                <a href={photo.src} target="_blank" rel="noopener noreferrer">
                  <img src={photo.src} alt={photo.alt} />
                </a>
              ) : photo.src ? (
                <img src={photo.src} alt={photo.alt} />
              ) : (
                <PlaceholderImage label={`Fotografía ${photo.id}`} aspectRatio="16 / 9" />
              )}
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              className="photo-carousel__arrow photo-carousel__arrow--prev"
              onClick={goPrev}
              aria-label="Fotografía anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="photo-carousel__arrow photo-carousel__arrow--next"
              onClick={goNext}
              aria-label="Fotografía siguiente"
            >
              ›
            </button>
          </>
        )}

        <p className="visually-hidden" aria-live="polite">
          Fotografía {index + 1} de {total}
        </p>
      </div>

      {photos[index].caption && (
        <p className="photo-carousel__caption">{photos[index].caption}</p>
      )}

      {showThumbnails && total > 1 && (
        <div className="photo-carousel__thumbnails" role="tablist" aria-label={`Miniaturas — ${label}`}>
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ver fotografía ${i + 1} de ${total}`}
              className={`photo-carousel__thumb ${i === index ? 'photo-carousel__thumb--active' : ''}`}
              onClick={() => goTo(i)}
            >
              {photo.src ? (
                <img src={photo.src} alt="" />
              ) : (
                <span className="photo-carousel__thumb-placeholder" aria-hidden="true">
                  🖼️
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {total > 1 && (
        <div className="photo-carousel__controls">
          <div className="photo-carousel__dots" role="tablist" aria-label="Seleccionar fotografía">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la fotografía ${i + 1} de ${total}`}
                className={`photo-carousel__dot ${i === index ? 'photo-carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="photo-carousel__play-toggle"
            onClick={() => setUserPlaying((p) => !p)}
            aria-label={
              userPlaying ? 'Pausar reproducción automática' : 'Reanudar reproducción automática'
            }
          >
            {userPlaying ? '⏸' : '▶'}
          </button>
        </div>
      )}
    </div>
  );
}

export default PhotoCarousel;
