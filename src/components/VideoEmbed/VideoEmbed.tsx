import './VideoEmbed.css';

interface Props {
  /** URL de YouTube (watch, youtu.be o embed). Vacía o inválida → muestra el placeholder. */
  url: string;
  title: string;
  placeholder: string;
  /** Video vertical (YouTube Shorts, 9:16): marco angosto centrado que lo muestra completo. */
  vertical?: boolean;
  /**
   * Usa `youtube-nocookie.com` (modo de privacidad mejorada, por defecto). Con
   * `false` se incrusta desde `youtube.com/embed`.
   */
  privacyEnhanced?: boolean;
}

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, '');
    let id: string | null = null;
    if (host === 'youtu.be') {
      id = parsed.pathname.slice(1).split('/')[0];
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') id = parsed.searchParams.get('v');
      else id = parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ?? null;
    }
    return id && /^[\w-]{6,}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

/**
 * Video de YouTube responsive (16:9). Si todavía no hay URL válida, muestra
 * un placeholder con el mensaje indicado.
 */
function VideoEmbed({ url, title, placeholder, vertical = false, privacyEnhanced = true }: Props) {
  const id = getYouTubeId(url);
  const className = `video-embed ${vertical ? 'video-embed--vertical' : ''}`;
  const host = privacyEnhanced ? 'www.youtube-nocookie.com' : 'www.youtube.com';

  if (!id) {
    return (
      <div className={`${className} video-embed--placeholder`} role="img" aria-label={placeholder}>
        <span className="video-embed__icon" aria-hidden="true">
          ▶
        </span>
        <p>{placeholder}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        src={`https://${host}/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed;
