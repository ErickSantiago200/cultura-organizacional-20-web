export interface HitoLineaTiempo {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  /**
   * Ruta completa cuando el hito apunta a una sección que ya existe en otro
   * lugar (se reutiliza la misma página, sin duplicarla). Si no se define, el
   * hito tiene su página en `/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad/:id`.
   */
  to?: string;
}

/**
 * Hitos de la línea de tiempo general de Cultura Organizacional 2.0, en el
 * orden en que se muestran. Se presentan con el mismo patrón visual de
 * tarjeta blanca que "Conoce nuestros módulos" (componente ModuleCard); cada
 * hito tiene su página en `/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad/:id`.
 * Para agregar un nuevo hito en el futuro basta con añadir un objeto aquí
 * (y, si ya se cuenta con contenido oficial, crear su página dedicada) — no
 * hace falta modificar el resto de la estructura.
 *
 * El hito "Banco de Información de Perfiles Académicos y Laborales" abre una
 * sección propia (BancoInformacion) con las tarjetas BIPAL, LINKA y Sistemas
 * de reuniones.
 */
export const hitosLineaTiempo: HitoLineaTiempo[] = [
  {
    id: 'historia-y-evolucion-de-la-administracion',
    icon: '1',
    title: 'Historia y evolución de la Administración',
    description: 'Recorrido por la historia, evolución y principales acontecimientos de la Administración.',
    ctaLabel: 'Conoce más →',
  },
  {
    id: 'cultura-organizacional-2-0',
    icon: '2',
    title: 'Cultura Organizacional 2.0',
    description: 'Presentación del proyecto Cultura Organizacional 2.0, sus componentes y principales avances.',
    ctaLabel: 'Conoce más →',
  },
  {
    id: 'banco-de-informacion-de-perfiles-academicos-y-laborales',
    icon: '3',
    title: 'Banco de Información de Perfiles Académicos y Laborales',
    description:
      'Plataforma institucional desarrollada como parte de Cultura Organizacional 2.0 para la gestión de información de perfiles académicos y laborales.',
    ctaLabel: 'Conoce más →',
  },
  {
    id: 'entrevistas-a-servidores-publicos',
    icon: '4',
    title: 'Entrevistas a servidores públicos',
    description:
      'Conoce las experiencias y conocimientos de servidores que han aportado a la construcción de la entidad.',
    ctaLabel: 'Conoce más →',
    to: '/memoria-de-la-entidad/entrevistas-a-servidores',
  },
];

export const lineaDeTiempoContent = {
  title: 'Línea de tiempo de la entidad',
};
