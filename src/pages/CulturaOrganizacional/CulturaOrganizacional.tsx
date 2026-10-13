import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import { culturaOrganizacionalContent as content } from '../../content/culturaOrganizacional';
import './CulturaOrganizacional.css';

function CulturaOrganizacional() {
  return (
    <div>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      <div className="container cultura-page">
        <section className="cultura-page__que-es">
          <h2>{content.queEs.title}</h2>
          <div className="cultura-page__que-es-card">
            {content.queEs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cultura-page__section">
          <h2>{content.contenido.title}</h2>
          <ul className="cultura-page__blocks">
            {content.contenido.items.map((item) => (
              <li className="cultura-page__block" key={item.title}>
                <span className="cultura-page__block-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cultura-page__download">
          <h2>{content.documento.title}</h2>
          <p>{content.documento.text}</p>
          <a
            href={content.documento.pdf}
            download={content.documento.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            {content.documento.buttonLabel}
          </a>
          <p className="cultura-page__note">{content.documento.note}</p>
        </section>

        <div className="cultura-page__back">
          <BackButton to={content.backTo} label={content.backLabel} />
        </div>
      </div>
    </div>
  );
}

export default CulturaOrganizacional;
