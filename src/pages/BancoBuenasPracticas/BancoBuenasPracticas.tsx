import PendingSectionPage from '../../components/PendingSectionPage/PendingSectionPage';
import { mensajeSeccionPendiente } from '../../content/procesoAprendizaje';

// Página preparada para incorporar las buenas prácticas institucionales que
// correspondan. Su contenido anterior (actividad de Neomundo) se trasladó a
// Compartir conocimiento → Feria del Conocimiento.
function BancoBuenasPracticas() {
  return (
    <PendingSectionPage
      title="Banco de Buenas Prácticas"
      message={mensajeSeccionPendiente}
      backTo="/memoria-de-la-entidad"
      backLabel="Volver a Memoria de la Entidad"
    />
  );
}

export default BancoBuenasPracticas;
