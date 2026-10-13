import './VideoEmbed.css';

interface Props {
  /** URL de YouTube (watch, youtu.be o embed). Vacía o inválida → muestra el placeholder. */
  url: string;
  title: string;
  placeholder: string;
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
function VideoEmbed({ url, title, placeholder }: Props) {
  const id = getYouTubeId(url);

  if (!id) {
    return (
      <div className="video-embed video-embed--placeholder" role="img" aria-label={placeholder}>
        <span className="video-embed__icon" aria-hidden="true">
          ▶
        </span>
        <p>{placeholder}</p>
      </div>
    );
  }

  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
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
