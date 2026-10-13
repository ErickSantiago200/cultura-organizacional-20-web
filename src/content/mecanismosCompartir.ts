const BASE = '/mecanismos-para-compartir-el-conocimiento';

export interface MecanismosCard {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
}

export const mecanismosCompartirContent = {
  title: 'Grupos transversales',
  // El video corta esta frase en el borde derecho del encuadre; se conserva
  // únicamente el fragmento confirmado hasta el primer punto seguro, sin
  // completar ni marcar visualmente la parte que no se pudo leer.
  subtitle: 'Espacios diseñados para promover el intercambio de experiencias.',
  basePath: BASE,
  backLabel: 'Volver a Grupos transversales',
  // Tarjetas de acceso con el mismo patrón visual (blanco) que "Conoce
  // nuestros módulos" en Inicio — se reutiliza ModuleCard.
  cards: [
    {
      icon: '☕',
      title: 'Cafés del conocimiento',
      description: 'Espacios para el intercambio de experiencias, aprendizajes y saberes de la entidad.',
      ctaLabel: 'Conoce más →',
      to: `${BASE}/cafes-del-conocimiento`,
    },
    {
      icon: '🏆',
      title: 'Premiaciones',
      description:
        'Espacio destinado a reconocer y visibilizar los logros, aportes y experiencias destacadas de los servidores y equipos de la entidad.',
      ctaLabel: 'Conoce más →',
      to: `${BASE}/premiaciones`,
    },
  ] satisfies MecanismosCard[],
};
