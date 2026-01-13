import { useEffect, useCallback } from 'react';
import type { Artwork } from '../../types';
import './Lightbox.css';

interface LightboxProps {
  artwork: Artwork | null;
  artworks: Artwork[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function Lightbox({
  artwork,
  artworks,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    },
    [isOpen, onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!artwork) return null;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < artworks.length - 1;

  return (
    <div
      className={`lightbox ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        Close
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {hasPrevious && (
          <button
            className="lightbox-nav prev"
            onClick={onPrevious}
            aria-label="Previous image"
          >
            &#8249;
          </button>
        )}

        <img
          src={artwork.image}
          alt={artwork.title}
          className="lightbox-image"
        />

        {hasNext && (
          <button
            className="lightbox-nav next"
            onClick={onNext}
            aria-label="Next image"
          >
            &#8250;
          </button>
        )}
      </div>

      <h2 className="lightbox-title">{artwork.title}</h2>
    </div>
  );
}

export default Lightbox;
