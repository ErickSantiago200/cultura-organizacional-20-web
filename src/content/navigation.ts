export interface NavItem {
  label: string;
  path: string;
}

export const siteName = 'Cultura Organizacional 2.0';

export const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Memoria de la entidad', path: '/memoria-de-la-entidad' },
  {
    label: 'Compartir conocimiento',
    path: '/proceso-de-aprendizaje-organizacional',
  },
  {
    label: 'Grupos transversales',
    path: '/mecanismos-para-compartir-el-conocimiento',
  },
];
