import './MapEmbed.css';

interface Props {
  query: string;
  title?: string;
}

function MapEmbed({ query, title = 'Ubicación' }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="map-embed">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export default MapEmbed;
