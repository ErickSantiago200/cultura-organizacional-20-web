import type { CarouselPhoto } from '../components/PhotoCarousel/PhotoCarousel';
import { bancoInformacionContent } from './bancoInformacion';
import instructivoPdf from '../assets/documentos/linka/instructivo-cuentas-de-cobro-linka-2026.pdf';
import ingresoPortal from '../assets/images/linka/ingreso-portal.png';
import seleccionContrato from '../assets/images/linka/seleccion-contrato.png';
import nuevoInforme from '../assets/images/linka/nuevo-informe.png';
import actividadesObligaciones from '../assets/images/linka/actividades-obligaciones.png';
import adjuntarEvidencia from '../assets/images/linka/adjuntar-evidencia.png';
import cargueDocumentos from '../assets/images/linka/cargue-documentos.png';
import envioSupervisor from '../assets/images/linka/envio-supervisor.png';
import siaObserva from '../assets/images/linka/sia-observa.png';

/**
 * URL del video tutorial de LINKA en YouTube. Para cambiar el video basta con
 * reemplazar este enlace (acepta youtu.be/…, youtube.com/watch?v=… o
 * youtube.com/embed/…). Si queda vacía, la página muestra el aviso "Video
 * tutorial próximamente disponible" y oculta el botón "Ver video en YouTube".
 */
export const LINKA_YOUTUBE_URL = 'https://youtu.be/XYN1PpCuszQ?si=aZgOQFP2mvjpycZA';

export interface LinkaFeature {
  icon: string;
  title: string;
  text: string;
}

export interface LinkaStep {
  title: string;
  text: string;
}

// Todo el contenido proviene del "Instructivo cuentas de cobro – aplicativo
// LINKA" (Cultura Organizacional 2.0). La página es una presentación
// institucional; el paso a paso detallado está en el instructivo PDF.
export const linkaContent = {
  title: 'LINKA',
  subtitle: 'Gestión de cuentas de cobro',
  backTo: bancoInformacionContent.basePath,
  backLabel: bancoInformacionContent.sectionBackLabel,
  intro:
    'LINKA permite gestionar el proceso de cuenta de cobro desde el ingreso al Portal de Contratistas hasta el envío para aprobación administrativa. En un solo lugar se registran las actividades y se cargan las evidencias y los documentos requeridos; la plataforma genera documentos a partir de la información diligenciada y se valida el proceso antes de enviarlo.',
  queEs: {
    title: '¿Qué es LINKA?',
    paragraphs: [
      'LINKA es el aplicativo del Portal de Contratistas de la Alcaldía de Bucaramanga con el que el contratista gestiona su cuenta de cobro desde un solo lugar. Está integrado con el SIF, del cual toma las obligaciones contractuales definidas.',
    ],
  },

  ruta: {
    title: 'Ruta para gestionar una cuenta de cobro',
    pasos: [
      { title: 'Ingresar', text: 'Usuario y contraseña.' },
      { title: 'Seleccionar contrato', text: 'Ubicar el contrato que se encuentra en ejecución.' },
      { title: 'Crear informe', text: 'Seleccionar año, mes y tipo de acta.' },
      {
        title: 'Registrar actividades',
        text: 'Asociar las actividades a las obligaciones contractuales y cargar evidencias.',
      },
      {
        title: 'Cargar soportes',
        text: 'Estampilla, planilla de aportes y demás documentos requeridos.',
      },
      {
        title: 'Enviar a aprobación',
        text: 'Completar las validaciones y enviar el proceso a aprobación administrativa.',
      },
    ] satisfies LinkaStep[],
  },

  paraQueSirve: {
    title: '¿Qué permite hacer LINKA?',
    items: [
      {
        icon: '📂',
        title: 'Gestionar el contrato en ejecución',
        text: 'Ubica el contrato desde la bandeja de información.',
      },
      {
        icon: '🗓️',
        title: 'Crear informes del periodo',
        text: 'Por año, mes y tipo de acta.',
      },
      {
        icon: '📝',
        title: 'Registrar obligaciones y actividades',
        text: 'Cada obligación contractual recibe sus actividades.',
      },
      {
        icon: '📎',
        title: 'Adjuntar evidencias',
        text: 'Cada actividad cuenta con su soporte.',
      },
      {
        icon: '📑',
        title: 'Cargar documentos y soportes',
        text: 'Los documentos requeridos del periodo.',
      },
      {
        icon: '⚙️',
        title: 'Generar documentos automáticamente',
        text: 'Acta de ejecución parcial e informe de cumplimiento.',
      },
      {
        icon: '🔍',
        title: 'Validar información del proceso',
        text: 'IBC, fechas y periodo que se cobra.',
      },
      {
        icon: '✅',
        title: 'Enviar a revisión y aprobación',
        text: 'Primero al supervisor y luego a aprobación administrativa.',
      },
    ] satisfies LinkaFeature[],
  },

  soportes: {
    title: 'Documentos y soportes',
    intro: 'Dentro del proceso se gestionan distintos soportes. Estos son los que solicita el aplicativo:',
    items: [
      {
        icon: '🏷️',
        title: 'Estampilla',
        text: 'Documento requerido dentro del proceso.',
      },
      {
        icon: '🧾',
        title: 'Planilla de aportes',
        text: 'Se carga junto con la información correspondiente.',
      },
      {
        icon: '📄',
        title: 'Acta de ejecución parcial',
        text: 'LINKA la genera automáticamente a partir de la información registrada.',
      },
      {
        icon: '📋',
        title: 'Informe de obligaciones contractuales',
        text: 'Documento asociado al cumplimiento de las obligaciones; se genera desde su icono.',
      },
      {
        icon: '🔎',
        title: 'SIA OBSERVA',
        text: 'Se carga como último soporte antes del envío a aprobación administrativa.',
      },
    ] satisfies LinkaFeature[],
    estados:
      'Cada documento muestra su estado con un icono: naranja indica que está pendiente por subir y verde que ya fue cargado.',
  },

  acta: {
    title: 'Acta de ejecución y validaciones',
    intro: 'Con la información de la planilla de aportes, LINKA permite diligenciar y validar:',
    items: [
      { icon: '💲', title: 'IBC' },
      { icon: '📅', title: 'Fecha de cobro' },
      { icon: '🗓️', title: 'Periodo que se está cobrando' },
      { icon: '⏱️', title: 'Fecha de inicio y finalización del periodo' },
    ],
    puntoControl: {
      title: 'Punto de control',
      text: 'Verifique que el año, el mes y el tipo de acta correspondan al periodo que realmente está cobrando.',
    },
  },

  supervision: {
    title: 'Supervisión y aprobación',
    intro:
      'Después de completar los documentos y generar el informe de cumplimiento, el proceso sigue esta secuencia:',
    pasos: [
      { title: 'Se valida la información', text: 'Fechas del acta y del informe, y que correspondan al acta a ejecutar.' },
      { title: 'Revisión del supervisor', text: 'El informe se envía a revisión del supervisor.' },
      { title: 'Aprobación del supervisor', text: 'El supervisor debe aprobar el informe de supervisión.' },
      { title: 'Carga de SIA OBSERVA', text: 'Con los documentos y el informe aprobado, se carga este último soporte.' },
      { title: 'Envío habilitado', text: 'Se habilita el envío a aprobación administrativa.' },
    ] satisfies LinkaStep[],
  },

  cierre: {
    title: 'Cierre del proceso',
    pasos: [
      {
        title: 'Enviar a aprobación',
        text: 'La plataforma notifica al aprobador y al contratista.',
      },
      {
        title: 'Recibir notificación',
        text: 'El contratista revisa el correo con el resultado.',
      },
      {
        title: 'Continuar en SECOP',
        text: 'Después de finalizar el proceso en LINKA, se continúa con el proceso correspondiente en SECOP.',
      },
    ] satisfies LinkaStep[],
    completado: {
      title: '¡Proceso completado!',
      text: 'Con este paso finaliza el proceso del contratista en LINKA.',
    },
  },

  carrusel: {
    title: 'Conoce LINKA',
    intro: 'Algunas pantallas del aplicativo, tomadas del instructivo oficial.',
    label: 'Capturas de pantalla de LINKA',
    capturas: [
      {
        id: 1,
        src: ingresoPortal,
        alt: 'Pantalla de ingreso al Portal de Contratistas de LINKA con usuario y contraseña',
        caption: '1. Ingreso al Portal de Contratistas con usuario y contraseña.',
      },
      {
        id: 2,
        src: seleccionContrato,
        alt: 'Bandeja Mis contratos con el contrato en ejecución resaltado en amarillo',
        caption: '2. Selección del contrato en ejecución (recuadro amarillo).',
      },
      {
        id: 3,
        src: nuevoInforme,
        alt: 'Ventana Crear Nuevo Informe con año, mes y tipo de acta',
        caption: '3. Creación del informe: año, mes y tipo de acta.',
      },
      {
        id: 4,
        src: actividadesObligaciones,
        alt: 'Listado de obligaciones contractuales para registrar actividades',
        caption: '4. Registro de actividades en cada obligación contractual.',
      },
      {
        id: 5,
        src: adjuntarEvidencia,
        alt: 'Ventana para subir el archivo de evidencia de una actividad',
        caption: '5. Cargue de la evidencia de cada actividad.',
      },
      {
        id: 6,
        src: cargueDocumentos,
        alt: 'Listado de documentos del soporte: estampilla, planilla de aportes, acta e informe',
        caption: '6. Cargue de documentos: estampilla, planilla de aportes y demás soportes.',
      },
      {
        id: 7,
        src: envioSupervisor,
        alt: 'Fila del informe con los iconos de acciones y la opción Enviar a Revisión Supervisor',
        caption: '7. Envío del informe a revisión del supervisor.',
      },
      {
        id: 8,
        src: siaObserva,
        alt: 'Cargue del soporte SIA OBSERVA dentro del listado de documentos',
        caption: '8. Cargue del soporte SIA OBSERVA, el último antes del envío.',
      },
    ] satisfies CarouselPhoto[],
  },

  ingreso: {
    title: 'Ingresar a LINKA',
    text: 'Accede al Portal de Contratistas con tu usuario y contraseña.',
    label: 'Ingresar a LINKA →',
    url: 'https://contratacionelectronica.bucaramanga.gov.co/Alcaldia_CE_Portal/com.alcaldiaceportal.k2bfsg.login',
  },
  funciona: {
    title: '¿Cómo funciona?',
    text: 'Conoce paso a paso cómo realizar el proceso de ejecución de tu cuenta de cobro en LINKA a través del siguiente video tutorial.',
    videoTitle: 'Tutorial de LINKA: ejecución de una cuenta de cobro',
    placeholder: 'Video tutorial próximamente disponible',
    youtubeButtonLabel: 'Ver video en YouTube ↗',
  },
  instructivo: {
    title: '¿Necesitas consultar el paso a paso completo?',
    text: 'Está disponible el instructivo completo de cuentas de cobro de LINKA, con cada paso del proceso explicado.',
    buttonLabel: 'Ver instructivo completo →',
    pdf: instructivoPdf,
  },
};
