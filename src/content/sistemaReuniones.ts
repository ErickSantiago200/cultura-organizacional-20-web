import type { CarouselPhoto } from '../components/PhotoCarousel/PhotoCarousel';
import { bancoInformacionContent } from './bancoInformacion';
import instructivoPdf from '../assets/documentos/sistema-reuniones/instructivo-gestion-de-reuniones.pdf';
import pantallaInicial from '../assets/images/sistema-reuniones/pantalla-inicial.png';
import registroAsistencia from '../assets/images/sistema-reuniones/registro-asistencia.jpeg';
import codigoQr from '../assets/images/sistema-reuniones/codigo-qr.png';
import crearReunion from '../assets/images/sistema-reuniones/crear-reunion.png';
import listadoReuniones from '../assets/images/sistema-reuniones/listado-reuniones.png';
import conclusionesCompromisos from '../assets/images/sistema-reuniones/conclusiones-compromisos.png';
import certificadoRequisitos from '../assets/images/sistema-reuniones/certificado-requisitos.png';

export interface ReunionesCard {
  icon: string;
  title: string;
  text: string;
}

/**
 * Contenido (resumido) de la página "Sistema de Gestión de Reuniones". Todo el
 * texto proviene del "Instructivo para el diligenciamiento de registros de
 * asistencia y actas de reunión en el aplicativo Sistema de Gestión de
 * Reuniones" (Gestión de las TIC, versión 0.0). Las capturas son las del propio
 * instructivo, en su resolución original y solo las que usan datos de prueba.
 */
export const sistemaReunionesContent = {
  title: 'Sistema de Gestión de Reuniones',
  subtitle:
    'Una herramienta para facilitar la gestión, asistencia, actas y seguimiento de las reuniones institucionales.',
  backTo: bancoInformacionContent.basePath,
  backLabel: bancoInformacionContent.sectionBackLabel,

  queEs: {
    title: '¿Qué es?',
    text: 'Es la herramienta institucional de la Alcaldía de Bucaramanga para digitalizar y estandarizar la gestión de las reuniones. Busca estandarizar la memoria institucional y facilitar la trazabilidad de las decisiones y los compromisos.',
  },

  funcionalidades: {
    title: 'Principales funcionalidades',
    cards: [
      {
        icon: '📲',
        title: 'Registro de asistencia',
        text: 'En línea, con QR, enlace o código de reunión.',
      },
      {
        icon: '🗓️',
        title: 'Gestión de reuniones',
        text: 'Crear, consultar y administrar cada sesión.',
      },
      {
        icon: '📝',
        title: 'Actas y conclusiones',
        text: 'Registro del desarrollo y las conclusiones.',
      },
      {
        icon: '✅',
        title: 'Compromisos',
        text: 'Tareas con responsable y fecha de vencimiento.',
      },
      {
        icon: '🏅',
        title: 'Certificados',
        text: 'Certificados digitales verificables de asistencia.',
      },
      {
        icon: '📊',
        title: 'Trazabilidad y reportes',
        text: 'Consulta de información y reportes de apoyo.',
      },
    ] satisfies ReunionesCard[],
  },

  asistencia: {
    title: 'Cómo registrar asistencia',
    intro: 'No requiere crear reunión ni iniciar sesión. Se puede ingresar de tres formas:',
    accesos: [
      { icon: '🔳', title: 'Código QR', text: 'Escanéalo con la cámara del celular.' },
      { icon: '🔗', title: 'Enlace', text: 'Recibido por correo, WhatsApp o chat.' },
      { icon: '🔢', title: 'Código', text: 'De cuatro caracteres, en la pantalla inicial.' },
    ],
    pasos: [
      'Ingresa a la reunión.',
      'Selecciona “Insertar mis datos de asistencia” y escribe tu documento.',
      'Revisa o completa tus datos laborales y la caracterización, y autoriza el tratamiento de datos personales.',
      'Confirma tu asistencia.',
    ],
    nota: 'Si ya participaste antes, el sistema puede precargar tus datos guardados.',
  },

  gestion: {
    title: 'Gestión de reuniones y compromisos',
    text: 'Los usuarios autorizados —según los permisos de su cuenta— crean y gestionan reuniones, y registran sus conclusiones y compromisos.',
    proceso: [
      'Reunión',
      'Conclusiones',
      'Compromisos',
      'Responsable',
      'Fecha límite',
      'Seguimiento',
    ],
    cards: [
      {
        icon: '➕',
        title: 'Crear y gestionar',
        text: 'Tema, tipo, fecha, hora, modalidad y participantes. Desde cada reunión: ver QR, copiar enlace y cerrarla.',
      },
      {
        icon: '👤',
        title: 'Compromisos',
        text: 'Cada uno con responsable, fecha de vencimiento y, si se requiere, un verificador secundario.',
      },
      {
        icon: '🚦',
        title: 'Alertas y seguimiento',
        text: 'El sistema avisa por vencimientos y muestra el estado de cada compromiso.',
      },
    ] satisfies ReunionesCard[],
  },

  certificados: {
    title: 'Certificados de asistencia',
    text: 'El sistema genera certificados digitales verificables de asistencia.',
    pasos: [
      { title: 'Recibe el correo', text: 'Al registrar la asistencia llega un correo con el botón “Generar certificado”.' },
      { title: 'Descarga el PDF', text: 'Disponible cuando la reunión está cerrada y tiene conclusiones.' },
      { title: 'Verifica', text: 'Cada certificado tiene código único y puede verificarse en línea.' },
    ],
  },

  carrusel: {
    title: 'Conoce el sistema',
    intro: 'Algunas pantallas del aplicativo, tomadas del instructivo oficial.',
    label: 'Capturas del Sistema de Gestión de Reuniones',
    capturas: [
      {
        id: 1,
        src: pantallaInicial,
        alt: 'Pantalla principal del Sistema de Gestión de Reuniones con el campo del código de reunión',
        caption: 'Pantalla principal: se ingresa el código de la reunión o se accede para crear una.',
      },
      {
        id: 2,
        src: registroAsistencia,
        alt: 'Formulario Insertar mis datos de asistencia con el campo Número de documento',
        caption: 'Registro de asistencia: el primer paso es escribir el número de documento.',
      },
      {
        id: 3,
        src: codigoQr,
        alt: 'Ventana con el código QR de una reunión y los botones para compartirlo',
        caption: 'Código QR: el organizador lo proyecta o comparte para registrar la asistencia.',
      },
      {
        id: 4,
        src: crearReunion,
        alt: 'Formulario Crear reunión con los campos obligatorios señalados',
        caption: 'Creación de una reunión: tema, tipo, fecha, hora, modalidad y participantes.',
      },
      {
        id: 5,
        src: listadoReuniones,
        alt: 'Pantalla Ver mis reuniones con el calendario y el filtro por estado',
        caption: 'Gestión de reuniones: listado y calendario de las reuniones registradas.',
      },
      {
        id: 6,
        src: conclusionesCompromisos,
        alt: 'Secciones Conclusiones y Compromisos dentro de la gestión de una reunión',
        caption: 'Compromisos: espacio para registrar las conclusiones y agregar compromisos.',
      },
      {
        id: 7,
        src: certificadoRequisitos,
        alt: 'Pantalla con los requisitos para generar el certificado y el botón de descarga',
        caption: 'Certificado de asistencia: requisitos para generarlo y descargarlo.',
      },
    ] satisfies CarouselPhoto[],
  },

  instructivo: {
    title: 'Consulta el instructivo completo',
    text: 'Conoce paso a paso el funcionamiento del Sistema de Gestión de Reuniones, desde el registro de asistencia hasta la gestión de actas, compromisos y certificados.',
    buttonLabel: 'Ver instructivo completo',
    pdf: instructivoPdf,
  },
};
