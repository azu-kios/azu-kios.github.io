import type { Artwork } from '../../types';
import './ArtworkCard.css';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <article className="artwork-card" onClick={onClick}>
      <img
        src={artwork.image}
        alt={artwork.title}
        className="artwork-image"
        loading="lazy"
      />
      <h3 className="artwork-title">{artwork.title}</h3>
    </article>
  );
}

export default ArtworkCard;
