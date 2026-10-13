import bannerImg from '../../assets/images/institucional/banner-gesco-colabora.jpg';
import './InstitutionalBanner.css';

/**
 * Banner institucional real proporcionado por el cliente:
 * "Política GESCO+I / CoLabora — Del Laboratorio de Innovación Pública de
 * Bucaramanga". Ocupa todo el ancho superior en todas las páginas y conserva
 * su proporción original (sin deformarse) en cualquier tamaño de pantalla.
 */
function InstitutionalBanner() {
  return (
    <div className="institutional-banner">
      <img
        src={bannerImg}
        alt="Política GESCO+I — CoLabora, del Laboratorio de Innovación Pública de Bucaramanga"
      />
    </div>
  );
}

export default InstitutionalBanner;
