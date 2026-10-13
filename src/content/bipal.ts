import { bancoInformacionContent } from './bancoInformacion';
import bipalGuiaImg from '../assets/images/bipal/bipal-guia-registro.png';
import bipalPlataformaImg from '../assets/images/bipal/bipal-plataforma.png';

export interface BipalFeature {
  icon: string;
  text: string;
}

// Todo el contenido de esta página proviene de la documentación
// institucional proporcionada sobre BIPAL (guía gráfica de registro/uso y
// la interfaz de la plataforma). No se inventan fechas, cifras ni
// funcionalidades adicionales a las confirmadas en esos recursos.
export const bipalContent = {
  title: 'BIPAL',
  subtitle: 'Banco de Información de Perfiles Académicos y Laborales',
  backTo: bancoInformacionContent.basePath,
  backLabel: bancoInformacionContent.sectionBackLabel,
  intro:
    'Plataforma institucional orientada a centralizar y organizar la información de perfiles académicos y laborales de la Administración Municipal.',
  queEs:
    'BIPAL es la plataforma oficial de la Alcaldía de Bucaramanga para registrar y actualizar la hoja de vida de los servidores y colaboradores de la Administración Municipal. Su acceso no requiere intermediarios, no tiene costo alguno y está disponible para todo el público.',
  paraQueSirve: [
    { icon: '📝', text: 'Registro y actualización de perfiles.' },
    { icon: '🎓', text: 'Gestión de información académica y laboral.' },
    { icon: '🔍', text: 'Consulta de perfiles.' },
    { icon: '🗂️', text: 'Organización de información institucional.' },
    { icon: '💡', text: 'Apoyo a la gestión del conocimiento y toma de decisiones.' },
  ] satisfies BipalFeature[],
  porQueEsImportante:
    'BIPAL hace parte de las acciones de transformación y gestión del conocimiento de Cultura Organizacional 2.0. Permite conservar, organizar y facilitar el acceso a información relevante de los perfiles académicos y laborales de la Administración Municipal.',
  queContiene: [
    { icon: '👤', text: 'Gestión de usuarios.' },
    { icon: '📄', text: 'Hoja de vida.' },
    { icon: '🔍', text: 'Consulta de perfiles.' },
    { icon: '🗃️', text: 'Gestión documental.' },
    { icon: '⚙️', text: 'Administración.' },
  ] satisfies BipalFeature[],
  evolucion:
    'BIPAL forma parte de la línea de tiempo de Cultura Organizacional 2.0 como una de sus iniciativas de gestión del conocimiento. A medida que se cuente con información oficial adicional sobre las etapas específicas de su desarrollo, esta sección se irá actualizando.',
  plataformaImg: bipalPlataformaImg,
  plataformaImgAlt: 'Interfaz de inicio de la plataforma BIPAL — Banco de Información de Perfiles.',
  guia: {
    title: 'Guía rápida para el registro y uso de la plataforma BIPAL',
    subtitle: 'Paso a paso para usuarios internos y externos.',
    img: bipalGuiaImg,
    imgAlt: 'Guía rápida para el registro y uso de la plataforma BIPAL',
    ctaLabel: 'Ver guía',
  },
};
