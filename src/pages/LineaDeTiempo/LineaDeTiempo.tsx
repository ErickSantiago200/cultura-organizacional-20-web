import PageHeader from '../../components/PageHeader/PageHeader';
import BackButton from '../../components/BackButton/BackButton';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import PendingMessage from '../../components/PendingMessage/PendingMessage';
import { hitosLineaTiempo, lineaDeTiempoContent as content } from '../../content/lineaDeTiempo';
import './LineaDeTiempo.css';

const BASE_TO = '/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad';

// La línea de tiempo es la de toda Cultura Organizacional 2.0: reúne los
// hitos y proyectos de la entidad (BIPAL es uno de ellos, no el contenido
// completo de esta página). Mismo patrón visual (tarjeta blanca) que
// "Conoce nuestros módulos" en Inicio — se reutiliza ModuleCard. La lista
// está preparada para incorporar nuevos hitos más adelante sin cambiar
// esta estructura.
function LineaDeTiempo() {
  return (
    <div>
      <PageHeader title={content.title} />
      <div className="container linea-de-tiempo-page">
        <div className="linea-de-tiempo-page__cards">
          {hitosLineaTiempo.map((hito) => (
            <ModuleCard
              key={hito.id}
              icon={hito.icon}
              title={hito.title}
              description={hito.description}
              ctaLabel={hito.ctaLabel}
              to={hito.to ?? `${BASE_TO}/${hito.id}`}
            />
          ))}
        </div>

        <PendingMessage>
          Nuevos hitos se irán incorporando a esta línea de tiempo a medida que se cuente con
          información oficial adicional.
        </PendingMessage>

        <BackButton to="/memoria-de-la-entidad" label="Volver a Memoria de la Entidad" />
      </div>
    </div>
  );
}

export default LineaDeTiempo;
