import documentoMetodologicoPdf from '../assets/documentos/cultura-organizacional/documento-metodologico-cultura-organizacional-2-0.pdf';

export interface DocumentoBloque {
  icon: string;
  title: string;
  text: string;
}

// Resumen breve del "Documento Metodológico – Cultura Organizacional 2.0".
// Los bloques siguen las secciones reales del documento (su tabla de
// contenido); el detalle completo queda en el PDF descargable. La estrategia
// del Banco de Información de Perfiles Académicos y Laborales (BIPAL), que
// también aparece en el documento, tiene su propia página en la línea de
// tiempo y no se mezcla aquí.
export const culturaOrganizacionalContent = {
  title: 'Cultura Organizacional 2.0',
  subtitle: 'Documento metodológico',
  backTo: '/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad',
  backLabel: 'Volver a la línea de tiempo',
  queEs: {
    title: '¿Qué es Cultura Organizacional 2.0?',
    paragraphs: [
      'La Cultura Organizacional 2.0 es una estrategia de la Alcaldía de Bucaramanga orientada a fortalecer la gestión institucional, modernizar los procesos y promover una cultura basada en la colaboración, el aprendizaje y la mejora continua.',
      'Su implementación busca aprovechar el conocimiento, las capacidades y las experiencias de quienes hacen parte de la entidad para mejorar la gestión pública, fortalecer la atención al ciudadano y facilitar la adaptación a nuevas formas de trabajo y herramientas tecnológicas.',
      'A corto plazo, el reto es lograr la apropiación y participación activa de las dependencias y servidores públicos, fortaleciendo la comunicación, el intercambio de conocimiento y el uso de las herramientas que hacen parte de la estrategia.',
    ],
  },
  contenido: {
    title: '¿Qué encontrarás en este documento?',
    items: [
      {
        icon: '📜',
        title: 'Marco legal',
        text: 'Normogramas de atención al ciudadano y de gestión institucional y archivística.',
      },
      {
        icon: '🎯',
        title: 'Misión, visión y objetivos',
        text: 'Misión y visión de la entidad, y el objetivo general y los objetivos específicos de la estrategia.',
      },
      {
        icon: '🔍',
        title: 'Diagnóstico actual',
        text: 'Diagnóstico de la atención al ciudadano y de la gestión institucional y archivística.',
      },
      {
        icon: '📣',
        title: 'Estrategia de comunicaciones',
        text: 'Justificación, referente teórico, alcance y marco normativo de la estrategia de comunicaciones de Cultura Organizacional 2.0.',
      },
      {
        icon: '🧭',
        title: 'Propuesta metodológica',
        text: 'Propuestas para fortalecer la atención al ciudadano y la gestión institucional y archivística.',
      },
      {
        icon: '📊',
        title: 'Impacto poblacional',
        text: 'Metodología y resultados de la encuesta aplicada al personal, con su conclusión general.',
      },
      {
        icon: '✅',
        title: 'Conclusiones y glosario',
        text: 'Conclusiones por línea de trabajo y glosario de terminología.',
      },
    ] satisfies DocumentoBloque[],
  },
  documento: {
    title: 'Documento metodológico completo',
    text: 'Consulta y descarga el documento metodológico completo de Cultura Organizacional 2.0.',
    note: 'Documento en PDF de 425 páginas.',
    buttonLabel: 'Descargar documento metodológico',
    pdf: documentoMetodologicoPdf,
    fileName: 'Documento Metodológico Cultura Organizacional 2.0.pdf',
  },
};
