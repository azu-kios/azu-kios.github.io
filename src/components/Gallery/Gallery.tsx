import type { Artwork } from '../../types';
import ArtworkCard from '../ArtworkCard';
import './Gallery.css';

interface GalleryProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork, index: number) => void;
  isSwitching?: boolean;
}

function Gallery({ artworks, onArtworkClick, isSwitching = false }: GalleryProps) {
  return (
    <div className={`art-gallery ${isSwitching ? 'switching' : ''}`}>
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onClick={() => onArtworkClick(artwork, index)}
        />
      ))}
    </div>
  );
}

export default Gallery;
