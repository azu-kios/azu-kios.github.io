import { useState, useEffect } from 'react';
import { StyleTabs, Gallery, Lightbox } from '../components';
import { artStyles, getArtworksByStyle } from '../data';
import type { ArtStyle, Artwork } from '../types';
import './Art.css';

function Art() {
  const [activeStyle, setActiveStyle] = useState<ArtStyle>('Affection');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isSwitching, setIsSwitching] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState<Artwork | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load artworks for the active style
  useEffect(() => {
    setArtworks(getArtworksByStyle(activeStyle));
  }, [activeStyle]);

  // Handle style change with fade transition
  const handleStyleChange = (style: ArtStyle) => {
    if (style === activeStyle) return;

    setIsSwitching(true);

    setTimeout(() => {
      setActiveStyle(style);
      setIsSwitching(false);
    }, 300);
  };

  // Lightbox handlers
  const openLightbox = (artwork: Artwork, index: number) => {
    setCurrentArtwork(artwork);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentArtwork(artworks[newIndex]);
    }
  };

  const goToNext = () => {
    if (currentIndex < artworks.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentArtwork(artworks[newIndex]);
    }
  };

  return (
    <main className="art-page page-enter">
      <div className="art-page-header">
        <h1 className="page-title">Art</h1>
      </div>

      <StyleTabs
        styles={artStyles}
        activeStyle={activeStyle}
        onStyleChange={handleStyleChange}
      />

      <Gallery
        artworks={artworks}
        onArtworkClick={openLightbox}
        isSwitching={isSwitching}
      />

      <Lightbox
        artwork={currentArtwork}
        artworks={artworks}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </main>
  );
}

export default Art;
