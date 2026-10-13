import BackButton from '../../components/BackButton/BackButton';
import InfoBadge from '../../components/InfoBadge/InfoBadge';
import IdentityBadge from '../../components/IdentityBadge/IdentityBadge';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import {
  feriaConocimientoContent as content,
  momentosJornada,
} from '../../content/feriaConocimiento';
import './FeriaConocimiento.css';

const IDENTITY_PHRASE = 'Ser Buen Bumangués';


function renderDescriptionParagraph(text: string) {
  const index = text.indexOf(IDENTITY_PHRASE);
  if (index === -1) return text;

  const before = text.slice(0, index);
  const after = text.slice(index + IDENTITY_PHRASE.length);

  return (
    <>
      {before}
      <IdentityBadge />
      {after}
    </>
  );
}

function FeriaConocimiento() {
  return (
    <div className="container feria-page">
      <BackButton to={content.backTo} label={content.backLabel} />

      <h1 className="feria-page__title">{content.title}</h1>
      <p className="feria-page__subtitle">{content.subtitle}</p>

      <div className="badge-row">
        {content.badges.map((badge, index) => (
          <InfoBadge key={index} icon={badge.icon} label={badge.label} pending={badge.pending} />
        ))}
      </div>

      <section className="content-section">
        <h2>🎯 Objetivo</h2>
        <p>{content.objetivo}</p>
      </section>

      <section className="content-section">
        <h2>📘 Descripción</h2>
        {content.descripcion.map((paragraph, index) => (
          <p key={index}>{renderDescriptionParagraph(paragraph)}</p>
        ))}
      </section>

      <section className="feria-page__gallery">
        <h2>{content.galleryTitle}</h2>
        <PhotoCarousel
          photos={momentosJornada}
          label={content.galleryTitle}
          showThumbnails
          imageFit="contain"
        />
      </section>
    </div>
  );
}

export default FeriaConocimiento;
