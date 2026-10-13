import { procesoAprendizajeContent } from './procesoAprendizaje';

const BASE = `${procesoAprendizajeContent.basePath}/laboratorio-pedagogico`;

export interface LaboratorioSeccion {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Sin contenido oficial todavía: muestra el aviso de "próximamente". */
  pending?: boolean;
}

export const laboratorioPedagogicoContent = {
  title: 'Laboratorio Pedagógico',
  basePath: BASE,
  backTo: procesoAprendizajeContent.basePath,
  backLabel: 'Volver a Compartir conocimiento',
  sectionBackLabel: 'Volver a Laboratorio Pedagógico',
};

/**
 * Opciones del Laboratorio Pedagógico. Solo tienen la estructura de
 * navegación: no hay contenido oficial todavía, así que no se inventa
 * ninguno. Para completarlas basta con crear su página y quitar `pending`.
 */
export const laboratorioSecciones: LaboratorioSeccion[] = [
  {
    id: 'cocreacion',
    icon: '🤝',
    title: 'Cocreación',
    description: 'Próximamente encontrarás aquí más información.',
    ctaLabel: 'Conoce más →',
    pending: true,
  },
  {
    id: 'centro-de-estudios',
    icon: '📖',
    title: 'Centro de Estudios',
    description: 'Próximamente encontrarás aquí más información.',
    ctaLabel: 'Conoce más →',
    pending: true,
  },
];
