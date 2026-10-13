import { Navigate, generatePath, useParams } from 'react-router-dom';

interface Props {
  /** Ruta nueva; puede incluir parámetros (`/…/:id`) tomados de la ruta antigua. */
  to: string;
}

/**
 * Redirige una URL antigua a su nueva ubicación, para que los enlaces ya
 * compartidos o guardados sigan funcionando.
 */
function LegacyRedirect({ to }: Props) {
  const params = useParams();
  return <Navigate to={generatePath(to, params as Record<string, string>)} replace />;
}

export default LegacyRedirect;
