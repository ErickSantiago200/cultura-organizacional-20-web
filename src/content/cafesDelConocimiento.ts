import type { CarouselPhoto } from '../components/PhotoCarousel/PhotoCarousel';
import type { EventDetailData } from '../components/EventDetail/EventDetail';
import { mecanismosCompartirContent } from './mecanismosCompartir';

export type AnioCafe = 2025 | 2026;

/**
 * Un Café del Conocimiento es un evento (`EventDetailData`) identificado por
 * año y número. La numeración visible es consecutiva dentro de cada año y se
 * basa solo en los informes técnicos disponibles: en 2025 no existe informe
 * del "Café 2", así que los informes originales 3 a 8 se muestran como 2 a 7.
 * `informeOriginal` conserva el nombre del informe fuente, sin alterarlo.
 */
export interface CafeDelConocimiento extends EventDetailData {
  anio: AnioCafe;
  numero: number;
  informeOriginal: string;
}

type DatosCafe = Omit<EventDetailData, 'title' | 'posters' | 'photos'> & {
  informeOriginal: string;
};

// Afiche y fotografías de cada café: `assets/images/cafes/<año>/cafe-<n>/`
// (`afiche.jpg`, `foto-1.jpg`, `foto-2.jpg`…). Para agregar una imagen basta
// con copiarla a esa carpeta; no hace falta tocar el código.
const imagenes = import.meta.glob('../assets/images/cafes/*/cafe-*/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function crearCafe(anio: AnioCafe, numero: number, datos: DatosCafe): CafeDelConocimiento {
  const carpeta = `../assets/images/cafes/${anio}/cafe-${numero}`;
  const title = `Café ${numero} — ${anio}`;
  const afiche = Object.keys(imagenes).find((ruta) => ruta.startsWith(`${carpeta}/afiche.`));
  const fotos = Object.keys(imagenes)
    .filter((ruta) => ruta.startsWith(`${carpeta}/foto-`))
    .sort((a, b) => parseInt(a.split('foto-')[1], 10) - parseInt(b.split('foto-')[1], 10));

  const photos: CarouselPhoto[] = fotos.map((ruta, i) => ({
    id: i + 1,
    src: imagenes[ruta],
    alt: `${title} — fotografía ${i + 1} de la jornada`,
  }));

  return {
    ...datos,
    anio,
    numero,
    title,
    posters: afiche
      ? [{ src: imagenes[afiche], alt: `Afiche oficial del evento: ${datos.subtitle ?? title}` }]
      : undefined,
    photos: photos.length > 0 ? photos : undefined,
  };
}

const PRESENCIAL = { icon: '🏢', label: 'Presencial' };
const VIRTUAL = { icon: '💻', label: 'Virtual' };

export const cafes2025: CafeDelConocimiento[] = [
  // Informe original: "Primer Café del Conocimiento – Secretaría Administrativa".
  crearCafe(2025, 1, {
    informeOriginal: 'Primer Café del Conocimiento',
    subtitle: 'La importancia del cambio cultural para la efectividad de la gestión pública',
    date: '23 de abril de 2025',
    badges: [
      { icon: '⏰', label: '11:00 a.m. a 12:00 m.' },
      { icon: '📍', label: 'Auditorio Andrés Páez Sotomayor – 6° piso' },
    ],
    introduccion:
      'El Primer Café del Conocimiento, llamado “Café del Cambio Cultural 2.0”, se realizó con las dependencias de la Secretaría Administrativa y sus equipos de trabajo: Archivo, CAME, Bienes y Servicios, DADEP, Talento Humano, Modernización y Calidad. Un café del conocimiento es una técnica de conversación que se realiza en grupos pequeños para compartir ideas y conocimientos.',
    objetivo: 'Facilitar un espacio de conversación consciente frente a un determinado tema.',
    objetivosEspecificos: [
      'Impulsar la participación de todos los asistentes, quienes aportan desde sus propios conocimientos, intuiciones y experiencias.',
      'Generar condiciones que inspiren la conversación y la conviertan en algo motivador y agradable.',
      'Recoger los aspectos más destacados surgidos de la conversación, capaces de generar cambio e impacto.',
      'Dar continuidad a estos procesos.',
    ],
    desarrollo: {
      intro:
        'El informe describe la metodología del café: se divide a los participantes en subgrupos, cada uno con un facilitador; se propone una pregunta que inspire la conversación, los subgrupos rotan entre las mesas con un tiempo límite y, al final, se recopilan y comparten las ideas principales de cada mesa.',
      pasos: [],
    },
    contenidosTitle: 'Preguntas del café',
    contenidos: [
      '¿Cómo se puede incrementar los niveles de efectividad de la gestión pública con la transformación cultural en la organización?',
      '¿Cómo se pueden romper las prácticas y costumbres que le hacen resistencia al cambio cultural?',
      '¿Cómo se promueve desde la organización la colaboración y el trabajo en equipo para la generación y aplicación del conocimiento?',
      '¿Qué mecanismos se implementan para fomentar la transparencia y la comunicación interna, facilitando el flujo de conocimiento?',
      '¿Cómo se reconoce y recompensa el esfuerzo y la innovación de los servidores públicos?',
      '¿Cómo se identifica y documenta el conocimiento tácito e implícito dentro de la dependencia?',
      '¿Qué mecanismos se utilizan para recopilar y compartir la experiencia y lecciones aprendidas?',
      '¿Cómo se fomenta la creación de nuevos conocimientos a través de la investigación y la experimentación en la dependencia?',
    ],
  }),

  // Informe original: "Café del Conocimiento: PQRSD y Prestación del Servicio al Ciudadano".
  crearCafe(2025, 2, {
    informeOriginal: 'Café del Conocimiento: PQRSD y Prestación del Servicio al Ciudadano',
    subtitle: 'PQRSD y Prestación del Servicio al Ciudadano',
    date: '12 de junio de 2025',
    badges: [
      PRESENCIAL,
      { icon: '📍', label: 'Auditorio Andrés Páez de Sotomayor – 6° piso, Alcaldía de Bucaramanga' },
      { icon: '👥', label: '29 funcionarios públicos y contratistas' },
    ],
    introduccion:
      'En el marco del fortalecimiento institucional y la mejora continua en la atención a la ciudadanía, se desarrolló este Café del Conocimiento sobre PQRSD (Peticiones, Quejas, Reclamos, Sugerencias y Denuncias) y prestación del servicio al ciudadano. Su finalidad fue promover el intercambio de experiencias, el aprendizaje colaborativo y la reflexión sobre el papel de los funcionarios públicos y contratistas en la construcción de una administración más cercana y eficiente.',
    objetivo:
      'Fortalecer las competencias y el conocimiento de los servidores públicos de la Alcaldía de Bucaramanga en el manejo adecuado de las PQRSD y la mejora continua de la prestación del servicio al ciudadano, promoviendo una cultura de atención eficiente, transparente y centrada en el usuario.',
    objetivosEspecificos: [
      'Sensibilizar a los funcionarios sobre la importancia de las PQRSD como herramienta de participación ciudadana.',
      'Capacitar en el marco normativo y los procedimientos asociados a la atención de solicitudes.',
      'Promover la atención al ciudadano basada en la calidad, la empatía, la transparencia y la oportunidad.',
      'Identificar oportunidades de mejora en los procesos actuales de atención y respuesta.',
      'Fomentar la corresponsabilidad de cada dependencia en la respuesta y el seguimiento de las PQRSD.',
      'Impulsar el uso eficiente de las herramientas tecnológicas para la gestión de PQRSD y el seguimiento de la satisfacción del ciudadano.',
    ],
    desarrollo: {
      intro:
        'El café se desarrolló en modalidad presencial, con una duración de dos horas, y asistieron 29 funcionarios públicos y contratistas de diversas dependencias. La jornada fue liderada por los profesionales del proyecto Cultura Organizacional 2.0, con el apoyo de una experta en el aplicativo GSC de la Alcaldía y de la Oficina de Atención al Ciudadano.',
      pasos: [
        { title: 'Bienvenida y apertura institucional' },
        { title: 'Presentación de un profesional experto en la plataforma GSC' },
        {
          title: 'Presentación temática',
          description:
            'Procedimientos internos para la atención y respuesta, rol del servidor público en la atención ciudadana, casos prácticos y análisis grupal, y conclusiones y recomendaciones.',
        },
      ],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Refuerzo conceptual sobre el proceso de gestión de PQRSD.',
        'Claridad en el uso del sistema institucional para la radicación y el seguimiento.',
        'Identificación de debilidades comunes, como la demora en las respuestas y la falta de trazabilidad en algunos procesos.',
        'Propuestas de mejora: capacitaciones específicas por dependencia, actualización de protocolos internos y fortalecimiento del canal de comunicación con la ciudadanía.',
        'Se generó conciencia sobre la responsabilidad de cada funcionario como primer punto de contacto con la ciudadanía.',
      ],
    },
  }),

  // Informe original: "Café del Conocimiento: Los roles del servicio público y la pertinencia del conocimiento del MOP…".
  crearCafe(2025, 3, {
    informeOriginal:
      'Café del Conocimiento: Los roles del servicio público y la pertinencia del conocimiento del MOP para mejorar el IDI en la Alcaldía de Bucaramanga',
    subtitle:
      'Los roles del servicio público y la pertinencia del conocimiento del MOP para mejorar el IDI en la Alcaldía de Bucaramanga',
    date: '30 de julio de 2025',
    badges: [VIRTUAL],
    introduccion:
      'El fortalecimiento de la gestión pública es una prioridad para los gobiernos locales que buscan mejorar la eficiencia, la transparencia y el impacto de su acción institucional. En este contexto, el Índice de Desempeño Institucional (IDI) es una herramienta clave para medir la capacidad administrativa de las entidades territoriales en Colombia, y este café buscó articular los roles fundamentales del servicio público con conocimientos técnicos especializados.',
    objetivo:
      'Analizar cómo los roles del servicio público y la aplicación del conocimiento técnico del sector pueden contribuir al mejoramiento del Índice de Desempeño Institucional (IDI) en la Alcaldía de Bucaramanga.',
    objetivosEspecificos: [
      'Identificar los principales roles y responsabilidades del servicio público municipal que impactan directamente en el desempeño institucional.',
      'Proponer estrategias de articulación entre la función pública y el conocimiento técnico especializado para fortalecer las dimensiones evaluadas por el IDI, como la planeación, la gestión documental, la transparencia y la evaluación de resultados.',
    ],
    contenidosTitle: 'Principales temas abordados',
    contenidos: [
      'La importancia del Índice de Desempeño Institucional (IDI) para medir la capacidad administrativa de las entidades territoriales.',
      'Roles y responsabilidades del servicio público municipal.',
      'Aplicación del conocimiento técnico especializado en la función pública.',
      'Liderazgo, ética pública y orientación al servicio.',
      'Articulación entre dependencias.',
      'Propuestas colaborativas para mejorar el IDI.',
    ],
    desarrollo: {
      intro:
        'El café se desarrolló en modalidad virtual, con una duración de una hora y media, y contó con la participación de funcionarios y contratistas de distintas secretarías y dependencias administrativas.',
      pasos: [],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Se identificó que el servidor público no solo cumple funciones administrativas, sino que también es un actor clave en la transformación institucional.',
        'Se destacó la necesidad de fortalecer competencias en liderazgo, ética pública y orientación al servicio.',
        'Se propuso establecer comités técnicos de trabajo intersectoriales para garantizar la coherencia entre los proyectos de inversión y los objetivos del Plan de Desarrollo Municipal.',
        'Existen debilidades en articulación institucional y formación técnica, que deben abordarse con capacitación y trabajo coordinado entre dependencias.',
        'El café permitió construir propuestas colaborativas, reafirmando el valor del diálogo y el aprendizaje colectivo en la gestión pública.',
        'Mejorar el IDI es una meta integral, que fortalece la gobernanza, la transparencia y la calidad de vida de los ciudadanos.',
      ],
    },
  }),

  // Informe original: "Quinto Café del Conocimiento – Estrategias institucionales para generar impacto…".
  crearCafe(2025, 4, {
    informeOriginal:
      'Quinto Café del Conocimiento – Estrategias institucionales para generar impacto en la gestión del conocimiento al interior de las entidades públicas',
    subtitle:
      'Estrategias institucionales para generar impacto en la gestión del conocimiento al interior de las entidades públicas',
    date: '15 de agosto de 2025',
    badges: [PRESENCIAL, { icon: '📍', label: 'Salón Santurbán – 5° piso, Alcaldía de Bucaramanga' }],
    introduccion:
      'Este Café del Conocimiento se desarrolló como pre evento de la feria EXPOCONOCIMIENTO Transparencia e Innovación, con el propósito de planear la organización, asignar responsables, establecer metodologías de trabajo y abordar temas relacionados con su desarrollo. Se consolidó, además, como una estrategia para compartir y socializar buenas prácticas en gestión del conocimiento, innovación y cultura organizacional.',
    objetivo:
      'Fortalecer la gestión del conocimiento y la innovación en la Alcaldía de Bucaramanga, mediante la socialización de experiencias exitosas y la promoción de la cultura organizacional, la transparencia y la integridad en la gestión pública.',
    objetivosEspecificos: [
      'Difundir la Política de Gestión del Conocimiento e Innovación (GESCO+I).',
      'Presentar experiencias exitosas y herramientas digitales implementadas por la Alcaldía.',
      'Promover la metodología de los Cafés del Conocimiento como herramienta institucional.',
      'Fomentar la articulación interinstitucional y la cultura de mejora continua.',
    ],
    desarrollo: {
      intro:
        'El café se desarrolló en modalidad presencial, con una duración de dos horas, y contó con funcionarios y contratistas de distintas secretarías, que participaron activamente en las dinámicas de aprendizaje. Se trataron los siguientes temas:',
      pasos: [
        {
          title: 'Política GESCO+I y Laboratorio de Innovación Pública – CoLabora',
          description:
            'Difusión de la política GESCO+I y presentación de experiencias exitosas: Planearte (Secretaría de Planeación), Puntos Vive Digital (Oficina Asesora TIC), BGA Consulta y Laboratorio CoLabora (Secretaría Jurídica) y Cultura Organizacional 2.0 (Secretaría Administrativa). Dinámica: Tangara GESCO+I, un juego interactivo con tres preguntas clave.',
        },
        {
          title: 'Cultura Organizacional 2.0',
          description:
            'Estrategias de difusión interna del conocimiento, infografía de los Cafés del Conocimiento realizados y explicación de la metodología como herramienta para el aprendizaje institucional.',
        },
      ],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Difusión efectiva de la Política GESCO+I.',
        'Reconocimiento de experiencias exitosas desarrolladas por diferentes dependencias.',
        'Sensibilización sobre la importancia de la cultura organizacional y el aprendizaje institucional.',
        'Generación de propuestas ciudadanas para la mejora de la gestión pública.',
        'El café se consolidó como un espacio clave para la integración institucional y permitió visibilizar iniciativas exitosas que aportan valor al servicio público.',
      ],
    },
  }),

  // Informe original: "Café del Conocimiento: La mejora continua y colaborativa de la Política de Integridad".
  crearCafe(2025, 5, {
    informeOriginal:
      'Café del Conocimiento: La mejora continua y colaborativa de la Política de Integridad',
    subtitle: 'La mejora continua y colaborativa de la Política de Integridad',
    date: '11 de septiembre de 2025',
    badges: [
      PRESENCIAL,
      { icon: '📍', label: 'Auditorio Andrés Páez de Sotomayor – 6° piso, Alcaldía de Bucaramanga' },
      { icon: '👥', label: '33 funcionarios públicos y contratistas' },
    ],
    introduccion:
      'Este Café del Conocimiento se llevó a cabo en el marco de la Política de Integridad, consolidándose como un espacio de diálogo y aprendizaje colectivo. Se impulsaron reflexiones sobre la relevancia de la transparencia, la responsabilidad y la coherencia en el quehacer institucional, aportando al fortalecimiento de la cultura organizacional y al compromiso de los servidores públicos con los valores de la integridad.',
    objetivo:
      'Fortalecer la cultura organizacional de la Alcaldía de Bucaramanga a través de un Café del Conocimiento en torno a la Política de Integridad, con el propósito de promover la reflexión, el aprendizaje y la apropiación de los valores éticos, de transparencia y de responsabilidad en el ejercicio de la gestión pública.',
    objetivosEspecificos: [
      'Sensibilizar a los servidores públicos acerca de la relevancia de la Política de Integridad como eje transversal de la gestión pública.',
      'Propiciar espacios de diálogo y reflexión orientados al fortalecimiento de la transparencia, la responsabilidad y la coherencia en el actuar institucional.',
      'Promover la interiorización y práctica de los valores y principios de integridad en el desempeño cotidiano.',
      'Aportar al fortalecimiento de la confianza ciudadana mediante una cultura organizacional fundamentada en la ética y la transparencia.',
    ],
    contenidosTitle: 'Temas abordados',
    contenidos: [
      'La integridad como práctica cotidiana.',
      'Valores institucionales del Código de Integridad de la Función Pública: honestidad, respeto, compromiso, diligencia y justicia.',
      'Fortalecimiento del valor institucional de la responsabilidad.',
    ],
    desarrollo: {
      intro:
        'El café se llevó a cabo en modalidad presencial, con una duración de dos horas, y asistieron 33 funcionarios públicos y contratistas de diversas secretarías, que participaron activamente en las dinámicas de aprendizaje aportando reflexiones, ideas y propuestas.',
      pasos: [],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Sensibilización de servidores y contratistas sobre la Política de Integridad.',
        'Fortalecimiento de la cultura organizacional y de los valores institucionales.',
        'Énfasis en la responsabilidad como nuevo valor institucional.',
        'Interiorización de los principios del Código de Integridad de la Función Pública.',
        'Aporte al fortalecimiento de la confianza ciudadana y del buen gobierno.',
      ],
    },
  }),

  // Informe original: "Café del Conocimiento: Manejo del estrés laboral y gestión emocional".
  crearCafe(2025, 6, {
    informeOriginal: 'Café del Conocimiento: Manejo del estrés laboral y gestión emocional',
    subtitle: 'Manejo del estrés laboral y gestión emocional',
    date: '26 de noviembre de 2025',
    badges: [VIRTUAL, { icon: '🎤', label: 'Invitada: psicóloga Natalia Pérez' }],
    introduccion:
      'El fortalecimiento de la cultura organizacional y el bienestar emocional de los servidores públicos es un eje estratégico para la mejora continua del servicio en la Administración Municipal de Bucaramanga. Este café se desarrolló como un espacio de formación y reflexión colectiva orientado a comprender el impacto del estrés laboral y la importancia de una adecuada gestión emocional, con la participación de una psicóloga invitada.',
    objetivo:
      'Fortalecer las competencias emocionales de los servidores públicos mediante la comprensión del estrés laboral y la implementación de estrategias efectivas para su manejo, contribuyendo al bienestar integral y al mejoramiento del clima organizacional.',
    objetivosEspecificos: [
      'Explicar la naturaleza del estrés laboral y su impacto en la salud física, psicológica y en el desempeño institucional.',
      'Presentar técnicas prácticas de regulación emocional aplicables en el entorno laboral.',
      'Promover la reflexión colectiva sobre el autocuidado y la importancia de los espacios de bienestar en la gestión pública.',
      'Sensibilizar sobre la influencia de las emociones en la calidad del servicio prestado y en la interacción con clientes internos y externos.',
    ],
    contenidosTitle: 'Técnicas para la gestión emocional',
    contenidos: ['Respiración consciente.', 'Pausas activas.', 'Organización del tiempo.'],
    desarrollo: {
      intro: 'La jornada se desarrolló en modalidad virtual en los siguientes momentos:',
      pasos: [
        {
          title: 'Pregunta orientadora',
          description:
            '¿El estrés es positivo o negativo? Esta reflexión permitió identificar percepciones diversas.',
        },
        {
          title: 'El estrés como respuesta fisiológica',
          description:
            'Se explicó que el estrés es una respuesta natural con una función adaptativa; en exceso, genera aumento de cortisol y puede impactar negativamente la salud y el rendimiento laboral.',
        },
        {
          title: 'Consecuencias del estrés mal gestionado',
          description:
            'La psicóloga invitada profundizó en su influencia en la actitud hacia los clientes internos y externos y en la calidad del servicio público.',
        },
      ],
    },
    resultados: {
      intro: 'Conclusiones del informe técnico:',
      items: [
        'El estrés es una respuesta natural y funcional, pero su exceso afecta la salud, la convivencia y el desempeño laboral.',
        'Los asistentes manifestaron su interés en promover el bienestar emocional, fortalecer la empatía y generar espacios colaborativos que faciliten la expresión y el diálogo dentro de las dependencias.',
        'La gestión emocional adecuada es clave para mejorar el clima organizacional y la atención a la ciudadanía.',
        'Las técnicas presentadas son herramientas de aplicación inmediata para mejorar el bienestar integral de los servidores públicos.',
        'El café contribuye al fortalecimiento de la cultura organizacional y la salud mental en la administración municipal.',
      ],
    },
  }),

  // Informe original: "Octavo Café del Conocimiento: Cultura en la medición de resultados".
  crearCafe(2025, 7, {
    informeOriginal: 'Octavo Café del Conocimiento: Cultura en la medición de resultados',
    subtitle: 'Cultura en la medición de resultados',
    date: '19 de diciembre de 2025',
    badges: [VIRTUAL, { icon: '🎤', label: 'Invitado: ingeniero Wilder Arguello' }],
    introduccion:
      'Este Café del Conocimiento se desarrolló como un espacio de aprendizaje orientado al fortalecimiento de la cultura en la medición de resultados dentro de la Alcaldía de Bucaramanga. La jornada permitió reflexionar sobre la importancia de medir, analizar y utilizar los resultados como insumo fundamental para la toma de decisiones, la mejora continua de los procesos y el fortalecimiento de la gestión institucional.',
    objetivo:
      'Fortalecer la cultura organizacional en torno a la medición de resultados, promoviendo el uso de indicadores, el seguimiento permanente de los procesos y la toma de decisiones basada en evidencias.',
    objetivosEspecificos: [
      'Sensibilizar a los participantes sobre la importancia de la medición de resultados como herramienta clave para la gestión institucional.',
      'Fortalecer el conocimiento sobre el uso de indicadores para el seguimiento, control y evaluación de los procesos.',
      'Promover la aplicación del ciclo PHVA (Planear, Hacer, Verificar y Actuar) como metodología de mejora continua orientada a resultados.',
      'Fomentar el análisis de los resultados obtenidos como insumo para la toma de decisiones y la definición de acciones de mejora.',
      'Impulsar una cultura organizacional basada en el seguimiento, la verificación y la auditoría de los procesos.',
    ],
    preguntaOrientadora: '¿Qué y cómo llegar a un resultado?',
    desarrollo: {
      intro:
        'La actividad se desarrolló bajo la metodología de Café de Conocimiento, con el ciclo de mejora continua PHVA como marco de referencia, enfocado en la gestión por resultados. A partir de la pregunta orientadora se analizó cada etapa del proceso:',
      pasos: [
        {
          title: 'Planear',
          description:
            'Definir objetivos claros, metas medibles e indicadores que permitan evaluar el desempeño de los procesos y el cumplimiento de los resultados esperados.',
        },
        {
          title: 'Hacer',
          description:
            'Ejecutar correctamente las actividades planificadas, asegurando la recolección oportuna y confiable de la información necesaria para medir los resultados.',
        },
        {
          title: 'Verificar',
          description:
            'Verificar como ejercicio de seguimiento y auditoría: revisar los resultados de cada proceso, analizar los indicadores y comparar los avances frente a las metas.',
        },
        {
          title: 'Actuar',
          description:
            'Actuar a partir de los resultados, estructurando decisiones y acciones de mejora continua que permitan corregir desviaciones y optimizar el desempeño institucional.',
        },
      ],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Sensibilización sobre la importancia de la cultura de medición de resultados en la gestión pública.',
        'Mayor comprensión del uso de indicadores como herramienta para el seguimiento y la toma de decisiones.',
        'Identificación de la verificación y la auditoría como elementos clave para evaluar el desempeño de los procesos.',
        'Fortalecimiento del enfoque de mejora continua orientada a resultados.',
        'Medir no solo implica recopilar información, sino analizarla y utilizarla para mejorar la gestión.',
      ],
    },
  }),
];

export const cafes2026: CafeDelConocimiento[] = [
  crearCafe(2026, 1, {
    informeOriginal: 'Primer Café del Conocimiento: Habilidades Blandas',
    subtitle: 'Primer Café del Conocimiento: “Habilidades Blandas”',
    date: '18 de marzo de 2026',
    badges: [
      { icon: '⏰', label: '7:00 a.m.' },
      PRESENCIAL,
      {
        icon: '👥',
        label: 'Dirigido al personal del Centro de Atención Municipal Especializado (CAME)',
      },
    ],
    introduccion:
      'Primer Café del Conocimiento, “Habilidades Blandas”, realizado con el personal del Centro de Atención Municipal Especializado (CAME) de la Alcaldía de Bucaramanga, como parte de las estrategias formativas del plan de acción del Proyecto Cultura Organizacional 2.0. Contó con la participación de una psicóloga invitada, que compartió su conocimiento sobre competencias socioemocionales en entornos laborales: autogestión emocional, comunicación efectiva y bienestar integral en la atención al ciudadano.',
    objetivo:
      'Fortalecer en los colaboradores del CAME el desarrollo y la comprensión de las habilidades blandas como herramienta clave para mejorar el desempeño laboral y la atención al ciudadano.',
    objetivosEspecificos: [
      'Socializar el concepto, el origen y la importancia de las habilidades blandas en el entorno organizacional.',
      'Describir las principales categorías: comunicación asertiva, trabajo en equipo, liderazgo positivo, resolución de conflictos, inteligencia emocional, adaptabilidad y gestión del tiempo.',
      'Promover la reflexión sobre fortalezas y oportunidades de mejora en la implementación de estas competencias.',
      'Presentar estrategias prácticas aplicables en el día a día laboral.',
      'Generar un espacio participativo de intercambio de experiencias y construcción colectiva de conocimientos.',
    ],
    contenidos: [
      'Diferencias entre habilidades blandas y habilidades duras.',
      'Comunicación asertiva.',
      'Resolución de conflictos.',
      'Trabajo en equipo.',
      'Liderazgo positivo.',
      'Inteligencia emocional.',
      'Adaptabilidad.',
      'Gestión del tiempo.',
      'Estrategias de fortalecimiento.',
      'Buenas prácticas de bienestar.',
    ],
    desarrollo: {
      intro:
        'El café se desarrolló en un ambiente participativo, facilitado por los profesionales del Proyecto Cultura Organizacional 2.0 y la intervención de la psicóloga invitada. La metodología incluyó:',
      pasos: [
        { title: 'Explicación conceptual sobre habilidades blandas y habilidades duras' },
        { title: 'Análisis de cada categoría con ejemplos aplicados al contexto del CAME' },
        { title: 'Actividades reflexivas sobre experiencias previas, fortalezas y retos cotidianos' },
        { title: 'Presentación de estrategias de fortalecimiento y buenas prácticas de bienestar' },
        { title: 'Cierre con conclusiones motivacionales y recomendaciones prácticas' },
      ],
    },
    resultados: {
      intro: 'Conclusiones del informe técnico:',
      items: [
        'El café permitió fortalecer la comprensión de las habilidades blandas y su impacto en la atención al ciudadano.',
        'Los colaboradores del CAME reconocieron la importancia de la inteligencia emocional, la comunicación asertiva y el trabajo conjunto como pilares de un servicio humano y eficiente.',
        'La actividad contribuyó al propósito del plan de acción del Proyecto Cultura Organizacional 2.0 de fortalecer el clima laboral, la convivencia y la excelencia institucional.',
        'El desarrollo de habilidades blandas es un proceso continuo que requiere práctica y compromiso.',
      ],
    },
  }),

  crearCafe(2026, 2, {
    informeOriginal: 'Segundo Café del Conocimiento: ¿Qué es el servicio al Ciudadano?',
    subtitle: 'Segundo Café del Conocimiento: “¿Qué es el servicio al ciudadano?”',
    date: '18 de marzo de 2026',
    badges: [
      { icon: '⏰', label: '1:00 p.m.' },
      PRESENCIAL,
      {
        icon: '👥',
        label: 'Dirigido al personal del CAME y de Talento Humano de la Alcaldía de Bucaramanga',
      },
      { icon: '🎤', label: 'Dirigido por: Dra. Estephania Castillo M.' },
    ],
    introduccion:
      'Como parte de las acciones de fortalecimiento institucional del Proyecto Cultura Organizacional 2.0, se llevó a cabo el segundo Café del Conocimiento con el personal del CAME y de Talento Humano. El encuentro fue dirigido por la líder del proyecto, quien orientó la sesión hacia la reflexión sobre la importancia del servicio al ciudadano como eje central de la administración pública, profundizando en los elementos conceptuales, actitudinales y operativos de una atención de calidad.',
    objetivo:
      'Fortalecer la comprensión y apropiación del concepto de servicio al ciudadano en el personal del CAME y de Talento Humano de la Alcaldía de Bucaramanga, con el fin de mejorar la calidad, oportunidad y calidez en la atención a la ciudadanía.',
    objetivosEspecificos: [
      'Socializar los fundamentos conceptuales del servicio al ciudadano como eje central de la gestión pública.',
      'Identificar las habilidades, actitudes y competencias necesarias para brindar una atención efectiva y humanizada.',
      'Analizar las expectativas del ciudadano frente a la prestación de servicios en el CAME.',
      'Promover la reflexión sobre la importancia de una cultura organizacional orientada al servicio.',
      'Fomentar la adopción de buenas prácticas y protocolos de atención que contribuyan a la mejora continua del servicio.',
    ],
    contenidos: [
      'Concepto de servicio al ciudadano.',
      'Atributos de calidad.',
      'Competencias del servidor público: amabilidad, sensibilidad, comprensión, paciencia, dinamismo, persuasión, escucha activa, orientación, autocontrol y creatividad.',
      'Expectativas del ciudadano.',
      'Visión de largo plazo.',
      'Modelo de gestión pública eficiente: confiabilidad, amabilidad, dignidad, efectividad, oportunidad y formación ciudadana.',
      'Protocolos del buen servicio.',
    ],
    desarrollo: {
      intro:
        'La sesión inició con una reflexión basada en una frase de Lewis Carroll. Luego se desarrollaron los conceptos fundamentales del servicio al ciudadano y se abrió un espacio de diálogo y análisis con los participantes: se revisaron situaciones reales del servicio en el CAME, se discutieron desafíos cotidianos y se generaron propuestas de mejora para fortalecer la experiencia de atención.',
      pasos: [],
    },
    resultados: {
      intro: 'Conclusiones del informe técnico:',
      items: [
        'El ciudadano es el eje de la gestión pública y su experiencia depende directamente de la calidad del servicio brindado.',
        'El servicio al ciudadano requiere vocación, actitud positiva y competencias blandas que permitan una atención humana, clara y respetuosa.',
        'La visión de largo plazo es fundamental para transformar procesos y mejorar la accesibilidad y calidad de los servicios municipales.',
      ],
    },
  }),

  crearCafe(2026, 3, {
    informeOriginal: 'Tercer Café del Conocimiento: InnovaAcción Pública',
    subtitle: 'Tercer Café del Conocimiento: “InnovaAcción Pública”',
    date: '30 de abril de 2026',
    badges: [
      { icon: '⏰', label: '2:00 p.m.' },
      PRESENCIAL,
      {
        icon: '📍',
        label: 'Auditorio Andrés Páez de Sotomayor – 6° piso, Alcaldía de Bucaramanga',
      },
    ],
    introduccion:
      'En cumplimiento del Plan de Acción del Proyecto Cultura Organizacional 2.0, se desarrolló el tercer Café del Conocimiento, enfocado en la estrategia InnovaAcción Pública, con la participación de funcionarios de la Alcaldía de Bucaramanga. Su propósito fue promover espacios de innovación, aprendizaje colaborativo, intercambio de ideas y construcción colectiva de soluciones frente a los retos de la gestión pública.',
    objetivo:
      'Fortalecer la cultura de innovación en la Alcaldía de Bucaramanga mediante el desarrollo del tercer Café del Conocimiento, en el marco del Proyecto Cultura Organizacional 2.0, promoviendo la generación de ideas colaborativas que contribuyan a la transformación de la gestión pública.',
    objetivosEspecificos: [
      'Fomentar la participación activa de funcionarios en procesos de innovación pública.',
      'Promover el intercambio de conocimientos y experiencias entre dependencias.',
      'Identificar problemáticas institucionales y oportunidades de mejora.',
      'Generar propuestas innovadoras para fortalecer procesos y servicios institucionales.',
    ],
    contenidos: [
      'Innovación pública.',
      'Estrategia InnovaAcción Pública.',
      'Co-creación y trabajo colaborativo.',
      'Retos y oportunidades de la gestión pública.',
      'Propuestas de mejora de procesos y servicios.',
    ],
    desarrollo: {
      intro: 'La metodología participativa tuvo cuatro momentos principales:',
      pasos: [
        {
          title: 'Bienvenida y contextualización de InnovaAcción Pública',
          description:
            'Se dio inicio con la bienvenida a los asistentes y la presentación del propósito del Café del Conocimiento, como una iniciativa orientada a la construcción colectiva de ideas para transformar lo público.',
        },
        {
          title: 'Organización de los participantes en grupos de trabajo',
          description:
            'Los participantes fueron organizados en grupos para promover el diálogo y la construcción colectiva de ideas en torno a la innovación pública.',
        },
        {
          title: 'Identificación de problemáticas, oportunidades y propuestas',
          description:
            'A través de preguntas orientadoras, los funcionarios identificaron problemáticas institucionales, analizaron oportunidades de mejora y plantearon propuestas innovadoras, aprovechando el conocimiento y la experiencia de cada participante.',
        },
        {
          title: 'Presentación de conclusiones y propuestas de cada grupo',
          description:
            'Cada grupo presentó las conclusiones y propuestas generadas, permitiendo consolidar los principales aportes del ejercicio.',
        },
      ],
    },
    resultados: {
      intro:
        'La participación de los funcionarios fue activa y comprometida. Entre los principales aportes se destacan:',
      items: [
        'Generación de ideas innovadoras aplicables a la gestión pública.',
        'Intercambio de experiencias entre diferentes dependencias.',
        'Identificación de problemáticas y oportunidades de mejora.',
        'Propuestas orientadas a mejorar la eficiencia, la transparencia y la calidad del servicio.',
      ],
    },
  }),

  crearCafe(2026, 4, {
    informeOriginal: 'Cuarto Café del Conocimiento: “Límites Laborales Saludables”',
    subtitle: 'Cuarto Café del Conocimiento: “Límites Laborales Saludables”',
    date: '12 de mayo de 2026',
    badges: [
      { icon: '⏰', label: '11:00 a.m.' },
      PRESENCIAL,
      { icon: '📍', label: 'Instituto de Cultura y Turismo – Biblioteca Gabriel Turbay – 5° piso' },
      { icon: '👥', label: 'Dirigido a profesionales de psicología de la Secretaría de Salud' },
    ],
    introduccion:
      'En el marco de las acciones orientadas al fortalecimiento del bienestar laboral y la consolidación de una cultura organizacional saludable, se desarrolló el Cuarto Café de Conocimiento “Límites Laborales Saludables: Cuidarnos para Seguir Cuidando”, dirigido a los profesionales de psicología de la Secretaría de Salud. Fue una estrategia participativa para promover la reflexión colectiva sobre los desafíos del ejercicio profesional, especialmente la sobrecarga emocional, la dificultad para establecer límites entre la vida laboral y personal, y la necesidad de fortalecer prácticas de autocuidado.',
    objetivo:
      'Generar un espacio de reflexión, aprendizaje colaborativo y construcción colectiva de estrategias orientadas al fortalecimiento de límites laborales saludables, promoviendo el bienestar emocional, la prevención del desgaste profesional y la corresponsabilidad en el cuidado de la salud mental de los equipos de trabajo.',
    objetivosEspecificos: [
      'Identificar factores asociados a la sobrecarga emocional y laboral presentes en el ejercicio profesional.',
      'Reconocer prácticas y comportamientos que favorecen el equilibrio entre las responsabilidades laborales y el bienestar personal.',
      'Fortalecer habilidades de comunicación asertiva para el establecimiento de límites saludables.',
      'Promover compromisos individuales y colectivos orientados al autocuidado y la salud mental.',
    ],
    contenidos: [
      'Concepto e importancia de los límites laborales saludables.',
      'Factores asociados al desgaste emocional y la fatiga por compasión.',
      'Identificación de señales de alerta relacionadas con la sobrecarga laboral.',
      'Estrategias de autocuidado y bienestar emocional.',
      'Comunicación asertiva en el contexto laboral.',
      'Corresponsabilidad en el cuidado de la salud mental de los equipos.',
      'Gestión adecuada de responsabilidades y carga laboral.',
      'Construcción de compromisos orientados al equilibrio entre bienestar y desempeño laboral.',
    ],
    desarrollo: {
      intro:
        'La jornada inició con una sensibilización sobre la importancia de establecer límites laborales saludables como mecanismo de protección frente al desgaste emocional y la sobrecarga derivada de las funciones profesionales. Luego, mediante la metodología de Café del Conocimiento, se favoreció el intercambio de experiencias y la construcción colectiva de conocimientos a través de cuatro estaciones temáticas:',
      pasos: [
        {
          title: 'Mochila Emocional',
          description:
            'Los participantes identificaron y compartieron situaciones laborales que generan desgaste emocional, emociones absorbidas durante la atención a usuarios y responsabilidades asumidas que exceden las funciones propias del cargo.',
          results: [
            'Identificación de factores de carga emocional.',
            'Reconocimiento de situaciones asociadas a sobrecarga laboral.',
            'Reflexión sobre responsabilidades asumidas fuera del alcance del rol profesional.',
          ],
        },
        {
          title: 'Semáforo Laboral',
          description:
            'A través de la clasificación de situaciones laborales en categorías de riesgo (verde, amarillo y rojo), los participantes analizaron factores protectores, alertas tempranas y condiciones que afectan el bienestar laboral.',
          results: [
            'Priorización de factores de riesgo psicosocial.',
            'Identificación de prácticas laborales saludables.',
            'Construcción de acciones de mejora relacionadas con la gestión del tiempo y la carga laboral.',
          ],
        },
        {
          title: 'Banco de Frases Asertivas',
          description:
            'Se construyeron colectivamente alternativas de comunicación asertiva para fortalecer la capacidad de establecer límites saludables frente a solicitudes, tareas y compromisos laborales.',
          results: [
            'Elaboración de un banco colectivo de frases asertivas.',
            'Generación de herramientas prácticas para la gestión adecuada de responsabilidades laborales.',
          ],
        },
        {
          title: 'Compromisos Personales',
          description:
            'Cada participante formuló compromisos concretos enfocados en el fortalecimiento de hábitos de autocuidado y el establecimiento de límites laborales saludables.',
          results: [
            'Definición de compromisos individuales de mejora.',
            'Identificación de acciones de aplicación inmediata en el entorno laboral.',
          ],
        },
      ],
    },
    resultados: {
      intro:
        'La participación de los profesionales en psicología fue activa y propositiva durante toda la jornada. Entre los principales aportes se destacan:',
      items: [
        'Reconocimiento de la necesidad de establecer límites claros frente a responsabilidades adicionales.',
        'Identificación de prácticas que favorecen la desconexión laboral y el equilibrio emocional.',
        'Construcción colectiva de herramientas de comunicación asertiva.',
        'Interés por fortalecer espacios institucionales de acompañamiento y bienestar.',
        'Generación de propuestas para promover una cultura organizacional centrada en el cuidado de las personas.',
      ],
    },
  }),

  crearCafe(2026, 5, {
    informeOriginal: 'Quinto Café del Conocimiento: Confianza, Empowerment y Trabajo Colaborativo',
    subtitle: 'Quinto Café del Conocimiento: “Confianza, Empowerment y Trabajo Colaborativo”',
    date: '29 de mayo de 2026',
    badges: [
      { icon: '⏰', label: '8:00 a.m.' },
      PRESENCIAL,
      {
        icon: '📍',
        label: 'Auditorio Andrés Páez de Sotomayor – 6° piso, Alcaldía de Bucaramanga',
      },
      { icon: '👥', label: 'Dirigido al equipo de calidad' },
    ],
    introduccion:
      'En el marco de la estrategia de fortalecimiento institucional de la Cultura Organizacional 2.0 de la Alcaldía de Bucaramanga, se realizó el quinto Café del Conocimiento, dirigido al equipo de calidad. La jornada se desarrolló bajo la metodología Design Thinking y espacios de co-creación, con un enfoque participativo y centrado en las personas. Se socializó el concepto de Cultura Organizacional 2.0 y sus tres líneas estratégicas (Servicio al Ciudadano, BIPAL y Gestión Archivística), el Plan de Acción 2026 y el rol del Nuevo Servidor Público 4.0.',
    objetivo:
      'Fortalecer la confianza laboral, la empatía, el empowerment y el trabajo colaborativo dentro del grupo de calidad, promoviendo la apropiación del rol, la comunicación asertiva y la corresponsabilidad en la toma de decisiones, alineados con el Decálogo del Buen Bumangués.',
    objetivosEspecificos: [
      'Identificar las situaciones que afectan la confianza y la comunicación dentro del equipo de trabajo.',
      'Promover espacios de diálogo, escucha activa y empatía entre los participantes.',
      'Construir acuerdos colectivos orientados al mejoramiento de la convivencia laboral y el trabajo colaborativo.',
      'Fortalecer la autonomía y la apropiación del rol mediante ejercicios prácticos de empowerment.',
      'Generar compromisos individuales y grupales enfocados en el fortalecimiento del clima organizacional y la cultura institucional.',
    ],
    contenidos: [
      'Cultura Organizacional 2.0 y su importancia en la administración pública.',
      'Líneas estratégicas: Servicio al Ciudadano, BIPAL y Gestión Archivística.',
      'Plan de Acción 2026 y rol del Nuevo Servidor Público 4.0.',
      'Confianza laboral.',
      'Empowerment y apropiación del rol.',
      'Comunicación asertiva, empatía y escucha activa.',
      'Trabajo colaborativo y corresponsabilidad en la toma de decisiones.',
      'Liderazgo y delegación.',
      'Decálogo del Buen Bumangués.',
      'Construcción de acuerdos colectivos y clima organizacional.',
    ],
    desarrollo: {
      intro:
        'Después de la socialización conceptual, se desarrollaron actividades estructuradas bajo las fases del Design Thinking:',
      pasos: [
        {
          title: 'Fase 1. Empatizar — “Así me siento en el equipo”',
          description:
            'Los participantes expresaron, mediante post-it de colores, situaciones que fortalecen o debilitan la confianza laboral y lo que necesitan para sentirse valorados dentro del equipo.',
        },
        {
          title: 'Fase 2. Definir — “El termómetro de la confianza”',
          description:
            'En grupos pequeños se identificaron las principales situaciones que afectan la dinámica laboral, construyendo frases problema orientadas a reconocer necesidades de fortalecimiento en comunicación, delegación y confianza.',
        },
        {
          title: 'Fase 3. Idear — “Cocreando acuerdos de confianza”',
          description:
            'Los equipos diseñaron propuestas y acciones prácticas para fortalecer la confianza, mejorar la comunicación, promover la delegación efectiva y aumentar el empowerment.',
        },
        {
          title: 'Dinámica central — “Yo también puedo decidir”',
          description:
            'Se analizaron situaciones reales del área y se reflexionó sobre las decisiones que se pueden asumir desde el rol y las condiciones necesarias para actuar con autonomía y seguridad.',
        },
        {
          title: 'Fase 4. Prototipar — “Construyamos nuestro pacto de confianza”',
          description:
            'De manera colectiva, el equipo construyó un pacto de confianza basado en compromisos de escucha activa, respeto, autonomía, resolución adecuada de conflictos y reconocimiento del trabajo de los compañeros.',
        },
        {
          title: 'Fase 5. Testear — “Semáforo del compromiso”',
          description:
            'Los participantes evaluaron su nivel de apropiación frente a los compromisos establecidos, identificando fortalezas, apoyos necesarios y barreras existentes.',
        },
        {
          title: 'Cierre — “El reconocimiento inesperado”',
          description:
            'Ejercicios de reconocimiento positivo entre compañeros, que fortalecieron el sentido de pertenencia, la empatía y el clima organizacional.',
        },
      ],
    },
    resultados: {
      intro: 'Conclusiones del informe técnico:',
      items: [
        'El café permitió generar un espacio seguro de diálogo y reflexión orientado al fortalecimiento de la confianza laboral y el trabajo colaborativo.',
        'La metodología Design Thinking facilitó la participación activa de los asistentes y la construcción colectiva de soluciones.',
        'Las actividades favorecieron la apropiación del rol y el reconocimiento de la importancia del empowerment en la toma de decisiones.',
        'El ejercicio fortaleció el sentido de pertenencia y la corresponsabilidad institucional, alineados con el Decálogo del Buen Bumangués y la Cultura Organizacional 2.0.',
      ],
    },
  }),

  crearCafe(2026, 6, {
    informeOriginal: 'Sexto Café del Conocimiento: Resolución de conflictos',
    subtitle: 'Sexto Café del Conocimiento: “Resolución de conflictos”',
    date: '23 de junio de 2026',
    badges: [
      { icon: '⏰', label: '9:00 a.m.' },
      PRESENCIAL,
      {
        icon: '👥',
        label: 'Dirigido al personal de la Secretaría de Educación de la Alcaldía de Bucaramanga',
      },
    ],
    introduccion:
      'El Sexto Café del Conocimiento, “Resolución de conflictos”, se realizó con el personal de la Secretaría de Educación de la Alcaldía de Bucaramanga como parte de las estrategias formativas del plan de acción del Proyecto Cultura Organizacional 2.0, orientado al fortalecimiento del bienestar laboral, el clima organizacional y la calidad en la prestación de servicios.',
    objetivo:
      'Fortalecer en los colaboradores de la Secretaría de Educación el proceso de resolución de conflictos como herramienta clave para mejorar el desempeño laboral y la atención al ciudadano.',
    objetivosEspecificos: [
      'Socializar el concepto de conflicto laboral, los tipos de conflictos laborales y el análisis de conflictos laborales en el entorno organizacional.',
      'Socializar el concepto de resolución de conflictos y aspectos clave para su fortalecimiento en el entorno laboral.',
      'Brindar un espacio participativo a los colaboradores focalizados en el proceso de resolución de conflictos.',
      'Brindar un espacio de reflexión sobre el proceso de resolución de conflictos.',
    ],
    contenidos: [
      'Conflictos laborales.',
      'Tipos de conflictos laborales.',
      'Análisis de conflictos.',
      'Resolución de conflictos.',
      'Comunicación.',
      'Clima laboral positivo.',
      'Empatía.',
      'Profesionalismo.',
      'Liderazgo.',
      'Trabajo en equipo.',
      'Confianza laboral.',
      'Buenas prácticas para prevenir conflictos.',
    ],
    desarrollo: {
      intro:
        'El café se desarrolló en un ambiente participativo, facilitado por los profesionales del Proyecto Cultura Organizacional 2.0. La metodología incluyó:',
      pasos: [
        {
          title: 'Explicación conceptual sobre conflictos laborales',
          description: 'Conflictos laborales, tipos de conflictos y análisis.',
        },
        { title: 'Explicación del proceso de resolución de conflictos' },
        {
          title: 'Dinámica “Árbol del Conflicto”',
          description:
            'Los asistentes se dividieron en seis equipos; cada uno recibió el gráfico de un árbol de conflictos y un conflicto laboral. En las raíces escribieron las causas, en el tronco el conflicto principal, en las ramas las consecuencias y, en otro apartado, las soluciones. Cada equipo socializó su ejercicio, poniendo en práctica los conceptos del café.',
        },
        {
          title: 'Actividad evaluativa mediante Kahoot',
          description:
            'En parejas, los participantes respondieron en la aplicación Kahoot preguntas relacionadas con los conceptos socializados durante el café. A los 10 ganadores se les entregaron incentivos, en una actividad motivacional y evaluativa.',
        },
        { title: 'Recomendaciones para fortalecer la resolución de conflictos' },
        { title: 'Cierre y conclusiones' },
      ],
    },
    resultados: {
      intro: 'Principales conclusiones del informe técnico:',
      items: [
        'El Café del Conocimiento permitió fortalecer la conceptualización del proceso de resolución de conflictos y los aspectos que influyen en él.',
        'Los colaboradores de la Secretaría de Educación reconocieron la importancia del proceso de resolución de conflictos en la gestión de la organización.',
        'La actividad contribuyó al propósito y cumplimiento del plan de acción del Proyecto Cultura Organizacional 2.0 de fortalecer el clima laboral, la convivencia y la excelencia institucional.',
      ],
    },
  }),

  crearCafe(2026, 7, {
    informeOriginal: 'Séptimo Café del Conocimiento: La Confianza laboral y el trabajo colaborativo',
    subtitle: 'Séptimo Café del Conocimiento: “La confianza laboral y el trabajo colaborativo”',
    date: '25 de junio de 2026',
    badges: [
      { icon: '⏰', label: '9:00 a.m.' },
      PRESENCIAL,
      {
        icon: '📍',
        label: 'Auditorio Andrés Páez de Sotomayor – 6° piso, Alcaldía de Bucaramanga',
      },
      { icon: '👥', label: 'Dirigido al equipo de la Oficina de Calidad de la Alcaldía de Bucaramanga' },
    ],
    introduccion:
      'Séptimo Café del Conocimiento, una iniciativa liderada por el equipo de Cultura Organizacional 2.0 de la Secretaría Administrativa, con la asistencia del equipo de la Oficina de Calidad. Su núcleo temático fue la sinergia entre la empatía, la confianza laboral, el empowerment y el trabajo colaborativo, entendidos como pilares organizacionales para consolidar el perfil del Servidor Público 4.0, capaz de dar una respuesta ágil, oportuna y humana a las necesidades de la ciudadanía.',
    objetivo:
      'Fortalecer la confianza laboral, la empatía, el empowerment y el trabajo colaborativo dentro del equipo de la oficina de calidad de la Alcaldía de Bucaramanga, promoviendo la apropiación del rol institucional, la comunicación asertiva y la corresponsabilidad en la toma de decisiones, en alineación con el decálogo del buen servidor público.',
    objetivosEspecificos: [
      'Conceptualizar el impacto de la Cultura Organizacional 2.0 y su importancia en la alineación con el servicio al ciudadano y la facilitación del cambio institucional.',
      'Identificar los componentes esenciales del Servidor Público 4.0: liderazgo transformador, adaptabilidad y aprendizaje continuo.',
      'Implementar dinámicas participativas para el análisis de casos y preguntas críticas orientadas a la resolución de conflictos y al fomento de la confianza laboral.',
      'Evaluar la apropiación conceptual inmediata de los temas expuestos mediante herramientas gamificadas de retroalimentación en tiempo real.',
    ],
    contenidosTitle: 'Núcleos temáticos',
    contenidos: [
      'Cultura Organizacional 2.0: alineación con el servicio al ciudadano, transparencia, control social y fortalecimiento del clima laboral.',
      'El Servidor Público 4.0: liderazgo transformador, adaptabilidad, agilidad, eficiencia, aprendizaje continuo e inclusión.',
      'Decálogo del Servidor Público: principios éticos aplicados al trato diario y a las dinámicas de equipo.',
      'Empowerment organizacional: objetivos, principios, beneficios y rol del líder orientado a la retroalimentación y la delegación.',
    ],
    desarrollo: {
      intro:
        'El café se ejecutó de forma secuencial, alternando la fundamentación conceptual con la participación activa de los asistentes, bajo un enfoque inspirado en metodologías ágiles y de innovación abierta (Design Thinking):',
      pasos: [
        {
          title: 'Apertura e introducción conceptual',
          description:
            'Exposición sobre los pilares de la Cultura Organizacional 2.0, el Plan de Acción 2026 y las dimensiones clave del Servidor Público 4.0.',
        },
        {
          title: 'Módulo temático interactivo (Empowerment)',
          description:
            'Proyección y discusión de un recurso audiovisual sobre delegación, autonomía y desarrollo del talento humano, y explicación de sus principios y del rol del líder como facilitador.',
        },
        {
          title: 'Taller grupal de análisis',
          description:
            'Los asistentes se organizaron en dos mesas de trabajo para debatir los desafíos cotidianos de la confianza y la empatía en el entorno público; cada mesa eligió un líder portavoz para socializar sus conclusiones.',
        },
        {
          title: 'Evaluación gamificada (Kahoot)',
          description:
            'Cierre lúdico mediante una competencia de conocimientos para consolidar los conceptos abordados de manera ágil y motivadora.',
        },
      ],
    },
    resultados: {
      intro: 'Resultados y conclusiones del informe técnico:',
      items: [
        'Las dos mesas de trabajo coincidieron en que la confianza mutua es la base indispensable del trabajo colaborativo: sin confianza, los procesos de delegación fallan y se genera sobrecarga laboral.',
        'Se resaltó la importancia del reconocimiento, de canales de comunicación alternos y de una delegación clara de responsabilidades con metas medibles.',
        'La participación en el Kahoot fue del 100%, con altos índices de apropiación conceptual.',
        'La adopción del rol del Servidor Público 4.0 es viable en la medida en que los líderes actúen como facilitadores, capacitando a sus equipos y fomentando una cultura de corresponsabilidad y mejora continua.',
      ],
    },
  }),
];

export const cafesPorAnio: { anio: AnioCafe; cafes: CafeDelConocimiento[] }[] = [
  { anio: 2025, cafes: cafes2025 },
  { anio: 2026, cafes: cafes2026 },
];

export const cafesBasePath = `${mecanismosCompartirContent.basePath}/cafes-del-conocimiento`;

export const rutaCafe = (cafe: Pick<CafeDelConocimiento, 'anio' | 'numero'>) =>
  `${cafesBasePath}/${cafe.anio}/${cafe.numero}`;

export function buscarCafe(anio?: string, numero?: string): CafeDelConocimiento | undefined {
  return cafesPorAnio
    .find((grupo) => String(grupo.anio) === anio)
    ?.cafes.find((cafe) => String(cafe.numero) === numero);
}
