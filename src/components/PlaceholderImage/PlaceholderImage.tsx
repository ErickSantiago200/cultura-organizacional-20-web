import './PlaceholderImage.css';

interface Props {
  label?: string;
  title?: string;
  description?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Marcador técnico para un recurso visual real que todavía no se ha
 * proporcionado (foto, logo, etc.). Cuando el archivo real esté disponible,
 * basta con reemplazar el uso de este componente por una etiqueta <img> en
 * el componente que lo usa (PhotoCarousel, Home, etc.).
 *
 * Uso compacto (galerías): `label`.
 * Uso destacado (hero, paneles grandes): `title` + `description`.
 */
function PlaceholderImage({ label, title, description, aspectRatio = '4 / 3', className }: Props) {
  const accessibleLabel = title ?? label ?? 'Imagen pendiente';

  return (
    <div
      className={`placeholder-image ${className ?? ''}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={accessibleLabel}
    >
      <span className="placeholder-image__icon" aria-hidden="true">
        🖼️
      </span>
      {title ? (
        <>
          <span className="placeholder-image__title">{title}</span>
          {description && <span className="placeholder-image__description">{description}</span>}
        </>
      ) : (
        <span className="placeholder-image__label">{label}</span>
      )}
    </div>
  );
}

export default PlaceholderImage;
