const LINEA_DE_TIEMPO = '/memoria-de-la-entidad/linea-de-tiempo-de-la-entidad';
const HUB = `${LINEA_DE_TIEMPO}/banco-de-informacion-de-perfiles-academicos-y-laborales`;

export interface BancoItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  /**
   * Ruta de la página con contenido. Si no se define, la tarjeta queda
   * preparada: apunta a `HUB/:id`, que muestra el aviso de "próximamente"
   * hasta que se cuente con contenido oficial para esa sección.
   */
  to?: string;
}

export const bancoInformacionContent = {
  title: 'Banco de Información de Perfiles Académicos y Laborales',
  basePath: HUB,
  backTo: LINEA_DE_TIEMPO,
  backLabel: 'Volver a la línea de tiempo',
  sectionBackLabel: 'Volver a Banco de Información de Perfiles Académicos y Laborales',
};

/**
 * Secciones del Banco de Información de Perfiles Académicos y Laborales.
 * BIPAL, LINKA y Sistemas de reuniones tienen su propia página (ver `to`).
 */
export const bancoItems: BancoItem[] = [
  {
    id: 'bipal',
    icon: '1',
    title: 'BIPAL',
    description: 'Banco de Información de Perfiles Académicos y Laborales de la Alcaldía de Bucaramanga.',
    ctaLabel: 'Conoce más →',
    to: `${LINEA_DE_TIEMPO}/bipal`,
  },
  {
    id: 'linka',
    icon: '2',
    title: 'LINKA',
    description: 'Gestión de cuentas de cobro para contratistas.',
    ctaLabel: 'Conoce más →',
    to: `${LINEA_DE_TIEMPO}/linka`,
  },
  {
    id: 'sistemas-de-reuniones',
    icon: '3',
    title: 'Sistemas de reuniones',
    description: 'Registro de asistencia en línea, actas y seguimiento de compromisos de las reuniones institucionales.',
    ctaLabel: 'Conoce más →',
    to: `${HUB}/sistemas-de-reuniones`,
  },
];
