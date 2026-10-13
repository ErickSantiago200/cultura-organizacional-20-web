import './IdentityBadge.css';

/**
 * Etiqueta institucional para destacar el concepto "Ser Buen Bumangués"
 * dentro de un párrafo, tal como se muestra en el Módulo de Buenas
 * Prácticas: ⭐ SerBuenBumangués.
 */
function IdentityBadge() {
  return (
    <span className="identity-badge">
      <span aria-hidden="true">⭐</span> SerBuenBumangués
    </span>
  );
}

export default IdentityBadge;
