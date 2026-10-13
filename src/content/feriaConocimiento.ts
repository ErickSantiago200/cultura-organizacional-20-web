import type { CarouselPhoto } from '../components/PhotoCarousel/PhotoCarousel';
import serBuenBumangues1 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-1.jpg';
import serBuenBumangues2 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-2.jpg';
import serBuenBumangues3 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-3.jpg';
import serBuenBumangues4 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-4.jpg';
import serBuenBumangues5 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-5.jpg';
import serBuenBumangues6 from '../assets/images/feria-del-conocimiento/ser-buen-bumangues-6.jpg';

export interface InfoBadgeData {
  icon: string;
  label: string;
  pending?: boolean;
}

/**
 * Fotografías reales del evento "Ser Buen Bumangués" para el carrusel
 * "Momentos de la Jornada" (Feria del Conocimiento, dentro de Compartir
 * conocimiento). Para agregar más fotos en el futuro: importa la imagen y
 * añade un nuevo objeto `{ id, src, alt }` al arreglo — no hace falta tocar
 * ningún componente.
 */
export const momentosJornada: CarouselPhoto[] = [
  { id: 1, src: serBuenBumangues1, alt: 'Evento Ser Buen Bumangués — momento 1' },
  { id: 2, src: serBuenBumangues2, alt: 'Evento Ser Buen Bumangués — momento 2' },
  { id: 3, src: serBuenBumangues3, alt: 'Evento Ser Buen Bumangués — momento 3' },
  { id: 4, src: serBuenBumangues4, alt: 'Evento Ser Buen Bumangués — momento 4' },
  { id: 5, src: serBuenBumangues5, alt: 'Evento Ser Buen Bumangués — momento 5' },
  { id: 6, src: serBuenBumangues6, alt: 'Evento Ser Buen Bumangués — momento 6' },
];

export const feriaConocimientoContent = {
  title: 'Feria del Conocimiento',
  // Nombre original de la actividad, trasladada desde el antiguo Banco de
  // Buenas Prácticas (Memoria de la entidad) sin perder ninguna información.
  subtitle: 'Módulo de Buenas Prácticas',
  backTo: '/proceso-de-aprendizaje-organizacional',
  backLabel: 'Volver a Compartir conocimiento',
  badges: [
    { icon: '📍', label: 'Neomundo' },
    { icon: '📅', label: 'Marzo 2026' },
    { icon: '🎤', label: 'José Ordóñez' },
    { icon: '⭐', label: 'SerBuenBumangués' },
  ] as InfoBadgeData[],
  objetivo:
    'Promover la apropiación de los valores institucionales y ciudadanos mediante espacios de reflexión, integración y aprendizaje experiencial, fortaleciendo el sentido de pertenencia, la convivencia y el compromiso de los colaboradores con la cultura organizacional.',
  descripcion: [
    'El Módulo de Buenas Prácticas se desarrolló en las instalaciones de Neomundo como un espacio de encuentro orientado al fortalecimiento de la cultura organizacional y la promoción de los principios de Ser Buen Bumangués.',
    'Durante la jornada se contó con la participación de invitados especiales, entre ellos el conferencista y humorista José Ordóñez, quien compartió reflexiones sobre valores, comportamiento ciudadano y construcción de comunidad a través de una presentación dinámica y participativa.',
    'Asimismo, se realizaron actividades de integración, reconocimiento y sensibilización que permitieron fortalecer el trabajo en equipo, la comunicación y el compromiso de los participantes con el desarrollo de una cultura basada en el respeto, la corresponsabilidad y el servicio a la ciudadanía.',
  ],
  galleryTitle: 'Momentos de la Jornada',
};
