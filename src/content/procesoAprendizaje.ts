const BASE = '/proceso-de-aprendizaje-organizacional';

export interface CompartirSeccion {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  /**
   * Sin contenido oficial todavía: la tarjeta apunta a `BASE/:id`, que muestra
   * el aviso de "próximamente". Las que tienen página propia (Laboratorio
   * Pedagógico y Feria del Conocimiento) no llevan esta marca.
   */
  pending?: boolean;
}

export const mensajeSeccionPendiente =
  'Próximamente encontrarás aquí información, contenidos y recursos relacionados con este espacio.';

const descripcionPendiente = 'Próximamente encontrarás aquí más información.';

export const procesoAprendizajeContent = {
  title: 'Compartir conocimiento',
  // Texto confirmado, visible completo en el video.
  subtitle:
    'Fortalecemos las capacidades institucionales mediante espacios de formación, intercambio de experiencias y gestión del conocimiento.',
  basePath: BASE,
  sectionBackLabel: 'Volver a Compartir conocimiento',
};

/**
 * Tarjetas de Compartir conocimiento, en el orden en que se muestran. Mismo
 * patrón visual (tarjeta blanca) que "Conoce nuestros módulos" en Inicio —
 * se reutiliza ModuleCard. Memoria Expo Conocimiento solo tiene la estructura
 * de navegación: no hay contenido oficial todavía, así que no se inventa
 * ninguno.
 */
export const compartirSecciones: CompartirSeccion[] = [
  {
    id: 'laboratorio-pedagogico',
    icon: '🧪',
    title: 'Laboratorio Pedagógico',
    description: 'Cocreación y Centro de Estudios.',
    ctaLabel: 'Conoce más →',
  },
  {
    id: 'feria-del-conocimiento',
    icon: '🎪',
    title: 'Feria del Conocimiento',
    description: 'Espacios de reflexión, integración y aprendizaje experiencial.',
    ctaLabel: 'Conoce más →',
  },
  {
    id: 'memoria-expo-conocimiento',
    icon: '🗂️',
    title: 'Memoria Expo Conocimiento',
    description: descripcionPendiente,
    ctaLabel: 'Conoce más →',
    pending: true,
  },
];
