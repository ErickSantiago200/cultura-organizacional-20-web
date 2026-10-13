export interface MemoriaApartado {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
}

export const memoriaEntidadContent = {
  title: 'Memoria de la entidad',
  // Apartados en el orden pedido. "Entrevistas a servidores públicos" ya no
  // es una tarjeta de esta pantalla: se accede desde la Línea de tiempo
  // (ver content/lineaDeTiempo.ts). Mismo patrón visual (tarjeta blanca) que "Conoce nuestros módulos" en
  // Inicio — se reutiliza el componente ModuleCard.
  apartados: [
    {
      icon: '🕰️',
      title: 'Línea de tiempo de la entidad',
      description:
        'Conoce los principales acontecimientos, hitos y evolución de la entidad a través del tiempo.',
      ctaLabel: 'Conoce más →',
      to: '/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad',
    },
    {
      icon: '🌟',
      title: 'Banco de Buenas Prácticas',
      description:
        'Consulta experiencias y prácticas institucionales que pueden ser compartidas y replicadas.',
      ctaLabel: 'Conoce más →',
      to: '/memoria-de-la-entidad/buenas-practicas',
    },
  ] satisfies MemoriaApartado[],
};
