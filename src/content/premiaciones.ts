import type { EventDetailData } from '../components/EventDetail/EventDetail';
import type { CarouselPhoto } from '../components/PhotoCarousel/PhotoCarousel';
import { mecanismosCompartirContent } from './mecanismosCompartir';

// Flyers (invitación y material de socialización) y fotografías de cada
// premiación: `assets/images/premiaciones/<id>/` (`flyer.jpg`, `infografia.jpg`,
// `foto-1.jpg`…). Son las imágenes de los informes técnicos en su resolución
// original; se descartaron las de baja calidad, las deformadas y las hojas de
// asistencia (datos personales).
const imagenes = import.meta.glob('../assets/images/premiaciones/*/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function imagen(id: string, nombre: string): string | undefined {
  return imagenes[`../assets/images/premiaciones/${id}/${nombre}.jpg`];
}

function fotografias(id: string, titulo: string, cantidad: number): CarouselPhoto[] {
  const fotos: CarouselPhoto[] = [];
  for (let i = 1; i <= cantidad; i += 1) {
    const src = imagen(id, `foto-${i}`);
    if (src) fotos.push({ id: i, src, alt: `${titulo} — fotografía ${i} del registro fotográfico` });
  }
  return fotos;
}

export interface Premiacion {
  id: string;
  /** Número visible en la tarjeta (orden cronológico). */
  icon: string;
  cardTitle: string;
  cardDescription: string;
  ctaLabel: string;
  event: EventDetailData;
}

export const premiacionesContent = {
  title: 'Premiaciones',
  subtitle:
    'Espacio destinado a reconocer y visibilizar los logros, aportes y experiencias destacadas de los servidores y equipos de la entidad.',
  backTo: mecanismosCompartirContent.basePath,
  backLabel: mecanismosCompartirContent.backLabel,
  detailBackTo: `${mecanismosCompartirContent.basePath}/premiaciones`,
  detailBackLabel: 'Volver a Premiaciones',
};

const SUBTITULO = 'Líderes de Transferencias Documentales y Líderes del Conocimiento';
const PRESENCIAL = { icon: '🏢', label: 'Presencial' };
const POSTERS_TITLE = 'Invitación y material de socialización';
const PHOTOS_TITLE = 'Registro fotográfico';

const ROL_TRANSFERENCIAS =
  'Líderes de Transferencias Documentales: colaboradores líderes en la gestión documental de sus áreas, encargados de realizar las transferencias en los tiempos establecidos por el cronograma, de manera oportuna y eficiente.';
const ROL_CONOCIMIENTO =
  'Líderes del Conocimiento: colaboradores que comparten conocimiento, orientan y trabajan en equipo, generando una cultura de aprendizaje y cooperación. Fueron elegidos por sus propios equipos mediante una encuesta virtual, analizada de manera confidencial y objetiva.';
const RECONOCIMIENTOS_ENTREGADOS =
  'Reconocimientos: un lapicero tipo cápsula para los líderes de transferencias documentales y un pin distintivo de Cultura Organizacional 2.0 con galletas para los líderes del conocimiento.';

function posters(id: string, titulo: string, conInfografia: boolean): EventDetailData['posters'] {
  const lista: NonNullable<EventDetailData['posters']> = [];
  const flyer = imagen(id, 'flyer');
  const infografia = imagen(id, 'infografia');
  if (flyer) lista.push({ src: flyer, alt: `Flyer de invitación — ${titulo}` });
  if (conInfografia && infografia) {
    lista.push({
      src: infografia,
      alt: 'Infografía sobre el perfil del líder de área, las categorías de reconocimiento y el impulso a la mejora continua',
    });
  }
  return lista;
}

const T1 = 'Primera premiación – 2026';
const T2 = 'Segunda premiación – 2026';
const T3 = 'Tercera premiación – 2026';
const T4 = 'Cuarta premiación – 2026';

/**
 * Premiaciones de Cultura Organizacional 2.0, en orden cronológico. Cada una
 * aparece como tarjeta en la página "Premiaciones" y tiene su propia página en
 * `/mecanismos-para-compartir-el-conocimiento/premiaciones/:id`. Fuente: los
 * cuatro informes técnicos de las premiaciones (resumidos; no se copian).
 * El informe del 17 de septiembre no lleva "cuarta" en su nombre: se numera
 * así por su fecha.
 */
export const premiaciones: Premiacion[] = [
  {
    id: 'primera-premiacion',
    icon: '1',
    cardTitle: 'Primera premiación',
    cardDescription: '20 de abril de 2026\nDespacho del Alcalde y Secretaría de Desarrollo Social',
    ctaLabel: 'Conoce más →',
    event: {
      title: T1,
      subtitle: SUBTITULO,
      date: '20 de abril de 2026',
      badges: [PRESENCIAL],
      introduccion:
        'Primera entrega de las Premiaciones Cultura Organizacional 2.0, realizada con el personal del Despacho del Alcalde y la Secretaría de Desarrollo Social de la Alcaldía de Bucaramanga, en el marco del plan de acción del Proyecto Cultura Organizacional 2.0, orientado al fortalecimiento del bienestar laboral, el clima organizacional y la calidad en la prestación de servicios.',
      objetivoTitle: 'Propósito',
      objetivo:
        'Reconocer a los colaboradores del Despacho del Alcalde y de la Secretaría de Desarrollo Social por el cumplimiento de objetivos y el comportamiento cooperativo, que buscan fortalecer el desempeño laboral y la gestión idónea en la Alcaldía de Bucaramanga.',
      extraSections: [
        {
          title: 'Dependencias participantes',
          items: [
            'Despacho del Alcalde: Despacho, Prensa y Comunicaciones, TIC y Transparencia del derecho de acceso a la información pública.',
            'Secretaría de Desarrollo Social: Despacho, Programas de atención en población vulnerable, Undeco y Umata.',
          ],
        },
        {
          title: 'Categorías reconocidas',
          items: [ROL_TRANSFERENCIAS, ROL_CONOCIMIENTO],
        },
        {
          title: 'Cómo se realizó el reconocimiento',
          items: [
            'Palabras de bienvenida y socialización del rol y la importancia de los líderes de transferencias documentales y los líderes del conocimiento.',
            'Presentación de la campaña del “Buen Bumangués”.',
            'Entrega de los reconocimientos y del “Decálogo ser un Buen Bumangués”.',
            'Cierre con una reflexión que invita a fortalecer el cumplimiento de metas organizacionales y los comportamientos cooperativos.',
            RECONOCIMIENTOS_ENTREGADOS,
          ],
        },
        {
          title: 'Principales aspectos destacados',
          items: [
            'Se exaltó la campaña del “Buen Bumangués”, estrategia lanzada por el alcalde para fortalecer la cultura ciudadana, el orden y la seguridad, también dentro de la Alcaldía.',
            'Los asistentes se mostraron receptivos, se comprometieron a ser Buen Bumangueses y a cumplir el decálogo, y manifestaron gratitud por los reconocimientos.',
          ],
        },
      ],
      resultados: {
        intro: 'Reconocimientos entregados:',
        items: [
          '8 líderes de transferencias documentales.',
          '6 líderes del conocimiento.',
          'La actividad motivó y exaltó la gestión de los líderes asistentes, y se reafirmó la continuidad de las premiaciones en las demás áreas y dependencias.',
        ],
      },
      postersTitle: POSTERS_TITLE,
      posters: posters('primera-premiacion', T1, true),
      photosTitle: PHOTOS_TITLE,
      photos: fotografias('primera-premiacion', T1, 2),
    },
  },
  {
    id: 'segunda-premiacion',
    icon: '2',
    cardTitle: 'Segunda premiación',
    cardDescription: '27 de mayo de 2026\nSecretaría de Hacienda',
    ctaLabel: 'Conoce más →',
    event: {
      title: T2,
      subtitle: SUBTITULO,
      date: '27 de mayo de 2026',
      badges: [PRESENCIAL],
      introduccion:
        'Segunda entrega de las Premiaciones Cultura Organizacional 2.0, realizada con el personal de la Secretaría de Hacienda de la Alcaldía de Bucaramanga, como parte de las estrategias formativas del plan de acción del Proyecto Cultura Organizacional 2.0.',
      objetivoTitle: 'Propósito',
      objetivo:
        'Reconocer a los colaboradores de la Secretaría de Hacienda por el cumplimiento de objetivos y el comportamiento cooperativo, que buscan fortalecer el desempeño laboral y la gestión idónea en la Alcaldía de Bucaramanga.',
      extraSections: [
        {
          title: 'Dependencia y áreas participantes',
          items: [
            'Secretaría de Hacienda: Presupuesto, Pensiones, Contabilidad e Impuestos.',
          ],
        },
        {
          title: 'Categorías reconocidas',
          items: [ROL_TRANSFERENCIAS, ROL_CONOCIMIENTO],
        },
        {
          title: 'Cómo se realizó el reconocimiento',
          items: [
            'Palabras de bienvenida y socialización del rol y la importancia de los líderes de transferencias documentales y los líderes del conocimiento.',
            'Presentación de la campaña del “Buen Bumangués”.',
            'Entrega de los reconocimientos y del “Decálogo ser un Buen Bumangués”.',
            'Cierre con una reflexión sobre la importancia de cumplir las metas organizacionales y desarrollar comportamientos cooperativos.',
            RECONOCIMIENTOS_ENTREGADOS,
          ],
        },
        {
          title: 'Principales aspectos destacados',
          items: [
            'Se exaltó la campaña del “Buen Bumangués” y su importancia en la Alcaldía.',
            'Se recordó la Feria del Conocimiento que se realizaría el 4 de junio en Neomundo.',
            'Los asistentes se mostraron receptivos, se comprometieron a cumplir el decálogo y manifestaron gratitud por los reconocimientos.',
          ],
        },
      ],
      resultados: {
        intro: 'Reconocimientos entregados:',
        items: [
          '4 líderes de transferencias documentales.',
          '4 líderes del conocimiento.',
          'La actividad motivó y exaltó la gestión de los líderes asistentes, y se reafirmó la continuidad de las premiaciones en las demás áreas y dependencias.',
        ],
      },
      postersTitle: POSTERS_TITLE,
      posters: posters('segunda-premiacion', T2, true),
      photosTitle: PHOTOS_TITLE,
      photos: fotografias('segunda-premiacion', T2, 5),
    },
  },
  {
    id: 'tercera-premiacion',
    icon: '3',
    cardTitle: 'Tercera premiación',
    cardDescription:
      '7 de julio de 2026\nSecretaría del Interior, Salud y Ambiente y Oficina de Valorización',
    ctaLabel: 'Conoce más →',
    event: {
      title: T3,
      subtitle: SUBTITULO,
      date: '7 de julio de 2026',
      badges: [PRESENCIAL],
      introduccion:
        'Tercera entrega de las Premiaciones Cultura Organizacional 2.0, realizada con el personal de la Secretaría del Interior, la Secretaría de Salud y Ambiente y la Oficina de Valorización de la Alcaldía de Bucaramanga, como parte de las estrategias formativas del plan de acción del Proyecto Cultura Organizacional 2.0.',
      objetivoTitle: 'Propósito',
      objetivo:
        'Reconocer a los colaboradores de la Secretaría del Interior, la Secretaría de Salud y Ambiente y la Oficina de Valorización por el cumplimiento de objetivos y el comportamiento cooperativo, que buscan fortalecer el desempeño laboral y la gestión idónea en la Alcaldía de Bucaramanga.',
      extraSections: [
        {
          title: 'Dependencias participantes',
          items: [
            'Secretaría del Interior: Despacho, Inspección de policía urbana y rural, Comisaría de familia, Plazas de mercado y Gestión del riesgo de desastres.',
            'Secretaría de Salud y Ambiente.',
            'Oficina de Valorización.',
          ],
        },
        {
          title: 'Categorías reconocidas',
          items: [ROL_TRANSFERENCIAS, ROL_CONOCIMIENTO],
        },
        {
          title: 'Cómo se realizó el reconocimiento',
          items: [
            'Palabras de bienvenida y socialización del rol y la importancia de los líderes de transferencias documentales y los líderes del conocimiento.',
            'Entrega de los reconocimientos a cada asistente.',
            'Espacio de reflexión: se preguntó a cada persona por la cualidad que le permitió ser reconocida.',
            'Cierre con una reflexión que invita a fortalecer el cumplimiento de metas organizacionales y los comportamientos cooperativos.',
            RECONOCIMIENTOS_ENTREGADOS,
          ],
        },
        {
          title: 'Principales aspectos destacados',
          items: [
            'En el espacio de autorreflexión, los participantes mencionaron cualidades como la responsabilidad, la perseverancia, la constancia, la disciplina, la paciencia, la experiencia y el trabajo en equipo.',
            'Los asistentes se mostraron receptivos y manifestaron gratitud por la actividad y los reconocimientos.',
          ],
        },
      ],
      resultados: {
        intro: 'Reconocimientos entregados:',
        items: [
          '7 líderes de transferencias documentales.',
          '5 líderes del conocimiento.',
          'La actividad motivó y exaltó la gestión de los líderes asistentes, y se reafirmó la continuidad de las premiaciones en las demás áreas y dependencias.',
        ],
      },
      postersTitle: POSTERS_TITLE,
      posters: posters('tercera-premiacion', T3, false),
      photosTitle: PHOTOS_TITLE,
      photos: fotografias('tercera-premiacion', T3, 4),
    },
  },
  {
    id: 'cuarta-premiacion',
    icon: '4',
    cardTitle: 'Cuarta premiación',
    cardDescription:
      '17 de septiembre de 2026\nUnidad Técnica de Servicios Públicos, Control Interno de Gestión y Control Interno Disciplinario',
    ctaLabel: 'Conoce más →',
    event: {
      title: T4,
      subtitle: 'Líderes de Transferencias Documentales, Líderes del Conocimiento y Embajadores de Cultura Organizacional 2.0',
      date: '17 de septiembre de 2026',
      badges: [
        PRESENCIAL,
        { icon: '📍', label: 'Auditorio Andrés Páez Sotomayor – Alcaldía de Bucaramanga' },
      ],
      introduccion:
        'Cuarta entrega de las Premiaciones Cultura Organizacional 2.0, realizada con el personal de la Unidad Técnica de Servicios Públicos, la Oficina de Control Interno de Gestión y la Oficina de Control Interno Disciplinario de la Alcaldía de Bucaramanga. En esta ocasión se sumó una nueva categoría —Embajadores de Cultura Organizacional 2.0— y nuevas dinámicas de participación.',
      objetivoTitle: 'Propósito',
      objetivo:
        'Reconocer a los servidores públicos de estas dependencias por el cumplimiento de objetivos organizacionales y el comportamiento institucional idóneo, que buscan fortalecer el desempeño laboral y lograr una gestión basada en la excelencia.',
      extraSections: [
        {
          title: 'Dependencias participantes',
          items: [
            'Unidad Técnica de Servicios Públicos.',
            'Oficina de Control Interno de Gestión.',
            'Oficina de Control Interno Disciplinario.',
          ],
        },
        {
          title: 'Categorías reconocidas',
          items: [
            'Líderes de Transferencias Documentales: servidores que cumplen el cronograma de transferencias documentales de manera puntual y eficiente.',
            'Líderes del Conocimiento: servidores que comparten constantemente conocimiento e información de valor con su equipo, generando una cultura de aprendizaje.',
            'Embajadores de Cultura Organizacional 2.0 (nueva categoría): servidores que representan los valores y principios de la entidad y contribuyen al fortalecimiento de su cultura organizacional.',
          ],
        },
        {
          title: 'Embajadores de Cultura Organizacional 2.0: subcategorías',
          intro: 'Inspiradas en el código de integridad y en el código de ética y buen gobierno del servidor público:',
          items: [
            'Compromiso institucional: sentido de pertenencia y compromiso constante con la entidad.',
            'Eficiencia laboral: cumplimiento de funciones optimizando tiempo y recursos, con calidad y precisión.',
            'Innovación y creatividad: generación e implementación de nuevas ideas que mejoran los procesos.',
            'Espíritu de compañerismo: cooperación, apoyo y respeto mutuo, con empatía y escucha activa.',
            'Liderazgo inspirador: liderazgo con entusiasmo y propósito que motiva al equipo.',
          ],
        },
        {
          title: 'Cómo se realizó el reconocimiento',
          items: [
            'Los líderes del conocimiento y los embajadores fueron elegidos mediante encuestas dirigidas a los equipos de cada área; los resultados se socializaron con los líderes de área para su aprobación.',
            'Cada persona elegida recibió la invitación al evento mediante un flyer.',
            'Bienvenida, conceptualización de las premiaciones y presentación de las categorías con los criterios de elección.',
            'Entrega de los reconocimientos: lapiceros tipo cápsula, termos de agua, pines distintivos de Cultura Organizacional 2.0 y galletas.',
          ],
        },
        {
          title: 'Actividades adicionales',
          intro: 'La cuarta premiación incorporó dos dinámicas de participación:',
          items: [
            'Ruleta de preguntas: espacio de socialización y escucha para conocer las habilidades y experiencias significativas de los asistentes en su trabajo diario.',
            'Muro digital “Un Mensaje Para Ti”: mensajes motivacionales de sus compañeros para los servidores reconocidos, que fortalecen el trabajo en equipo y las relaciones laborales.',
          ],
        },
      ],
      resultados: {
        intro: 'Reconocimientos entregados:',
        items: [
          '3 líderes de transferencias documentales.',
          '3 líderes del conocimiento.',
          '12 embajadores de Cultura Organizacional 2.0.',
          'Los asistentes recibieron con atención sus reconocimientos y manifestaron gratitud; se reafirmó la continuidad de las premiaciones en las demás áreas y dependencias.',
        ],
      },
      postersTitle: POSTERS_TITLE,
      posters: posters('cuarta-premiacion', T4, false),
      photosTitle: PHOTOS_TITLE,
      photos: fotografias('cuarta-premiacion', T4, 5),
    },
  },
];
