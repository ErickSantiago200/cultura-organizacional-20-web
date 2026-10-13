export interface EntrevistaApartado {
  number: number;
  title: string;
  to: string;
}

export const entrevistasServidoresContent = {
  title: 'Entrevistas a servidores públicos',
  // Sin contenido oficial todavía; se dejan los dos sub-apartados
  // solicitados, listos para recibir entrevistas, videos, fotografías o
  // textos más adelante.
  apartados: [
    {
      number: 1,
      title: 'Servidores que se retiran',
      to: '/memoria-de-la-entidad/entrevistas-a-servidores/servidores-que-se-retiran',
    },
    {
      number: 2,
      title: 'Ex-directores o servidores con amplia experiencia sobre la entidad',
      to: '/memoria-de-la-entidad/entrevistas-a-servidores/ex-directores',
    },
  ] satisfies EntrevistaApartado[],
};
