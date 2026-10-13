export interface HomeModule {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
}

export const homeContent = {
  heroTitle: 'Cultura Organizacional 2.0',
  // Texto institucional entregado por el equipo de Cultura Organizacional 2.0.
  heroParagraphs: [
    'La Cultura Organizacional 2.0 es una estrategia de la Alcaldía de Bucaramanga orientada a fortalecer las capacidades de la entidad, promover nuevas formas de colaboración y consolidar una cultura basada en el aprendizaje, el intercambio de conocimiento y la mejora continua. Esta estrategia busca reconocer las experiencias de la organización y convertirlas en conocimiento útil para fortalecer la gestión institucional.',
    'Su implementación contribuye a una Alcaldía más articulada, participativa y orientada a resultados, al facilitar que el conocimiento generado en las diferentes dependencias pueda ser identificado, compartido y aprovechado. En este marco, el reconocimiento y divulgación de buenas prácticas permite preservar la memoria institucional, promover el aprendizaje entre equipos y aprovechar experiencias que pueden aportar a una gestión pública más eficiente y efectiva.',
    'En el corto plazo, el principal reto será lograr la apropiación de la estrategia por parte de las dependencias y servidores públicos, promoviendo su participación activa y el intercambio de experiencias. De igual manera, será necesario consolidar contenidos de calidad, mantener la información actualizada y fortalecer los mecanismos de comunicación y difusión, de manera que Cultura Organizacional 2.0 se convierta en una herramienta incorporada a la gestión cotidiana de la Alcaldía.',
  ],
  institutionalPhotoAlt: 'Equipo de Cultura Organizacional 2.0 — Alcaldía de Bucaramanga',
  modulesSectionTitle: 'Conoce nuestros módulos',
  modulesSectionSubtitle:
    'Explora los espacios de aprendizaje y colaboración de Cultura Organizacional 2.0',
  modules: [
    {
      id: 'memoria-de-la-entidad',
      icon: '🏛️',
      title: 'Memoria de la entidad',
      description: 'Conservamos y compartimos la historia, experiencias y buenas prácticas de nuestra entidad.',
      ctaLabel: 'Conoce más →',
      to: '/memoria-de-la-entidad',
    },
    {
      id: 'compartir-conocimiento',
      icon: '🔄',
      title: 'Compartir conocimiento',
      description: 'Espacios para el intercambio de experiencias, aprendizajes y saberes de la entidad.',
      ctaLabel: 'Conoce más →',
      to: '/proceso-de-aprendizaje-organizacional',
    },
    {
      id: 'grupos-transversales',
      icon: '🧩',
      title: 'Grupos transversales',
      description:
        'Grupos donde se fomenta la conversación y la transferencia del conocimiento entre áreas y entidades.',
      ctaLabel: 'Conoce más →',
      to: '/mecanismos-para-compartir-el-conocimiento',
    },
  ] satisfies HomeModule[],
};
