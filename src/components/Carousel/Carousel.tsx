import { useState, useEffect, useCallback } from 'react';
import type { CarouselImage } from '../../types';
import './Carousel.css';

interface CarouselProps {
  images: CarouselImage[];
  autoAdvanceInterval?: number;
}

function Carousel({ images, autoAdvanceInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance effect
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(goToNext, autoAdvanceInterval);

    return () => clearInterval(timer);
  }, [isPaused, goToNext, autoAdvanceInterval, images.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div
        className="carousel-indicators"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
