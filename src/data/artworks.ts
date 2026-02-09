import type { Artwork, ArtStyle } from '../types';

export const artStyles: ArtStyle[] = [
  'Affection',
  'Gentle',
  'Lucid-dream',
  'Royal',
  'Seasons',
];

export const artworks: Artwork[] = [
  // Affection Series
  {
    id: 'affection-1',
    title: 'Crush',
    image: '/images/art/Affection/Affection1-Crush.png',
    style: 'Affection',
  },
  {
    id: 'affection-2',
    title: 'Chivalry',
    image: '/images/art/Affection/Affection2-Chivalry.png',
    style: 'Affection',
  },
  {
    id: 'affection-3',
    title: 'Together',
    image: '/images/art/Affection/Affection3-Together.PNG',
    style: 'Affection',
  },
  {
    id: 'affection-4',
    title: 'Heartburn',
    image: '/images/art/Affection/Affection4-Heartburn.png',
    style: 'Affection',
  },
  {
    id: 'affection-5',
    title: 'Afterlight',
    image: '/images/art/Affection/Affection5-Afterlight.PNG',
    style: 'Affection',
  },

  // Gentle Series
  {
    id: 'gentle-1',
    title: 'Gentle 1',
    image: '/images/art/Gentle/Gentle1.png',
    style: 'Gentle',
  },
  {
    id: 'gentle-2',
    title: 'Gentle 2',
    image: '/images/art/Gentle/Gentle2.jpeg',
    style: 'Gentle',
  },
  {
    id: 'gentle-3',
    title: 'Gentle 3',
    image: '/images/art/Gentle/Gentle3.jpeg',
    style: 'Gentle',
  },
  {
    id: 'gentle-4',
    title: 'Gentle 4',
    image: '/images/art/Gentle/Gentle4.jpeg',
    style: 'Gentle',
  },

  // Lucid-dream Series
  {
    id: 'lucid-dream-1',
    title: 'Lucid-dream 1',
    image: '/images/art/Lucid-dream/Lucid-dream1.PNG',
    style: 'Lucid-dream',
  },
  {
    id: 'lucid-dream-2',
    title: 'Lucid-dream 2',
    image: '/images/art/Lucid-dream/Lucid-dream2.jpeg',
    style: 'Lucid-dream',
  },
  {
    id: 'lucid-dream-3',
    title: 'Lucid-dream 3',
    image: '/images/art/Lucid-dream/Lucid-dream3.jpeg',
    style: 'Lucid-dream',
  },
  {
    id: 'lucid-dream-4',
    title: 'Lucid-dream 4',
    image: '/images/art/Lucid-dream/Lucid-dream4.PNG',
    style: 'Lucid-dream',
  },

  // Royal Series
  {
    id: 'royal-1',
    title: 'Royal 1',
    image: '/images/art/Royal/Royal-1.jpeg',
    style: 'Royal',
  },
  {
    id: 'royal-2',
    title: 'Royal 2',
    image: '/images/art/Royal/Royal2.jpg',
    style: 'Royal',
  },
  {
    id: 'royal-3',
    title: 'Royal 3',
    image: '/images/art/Royal/Royal3.png',
    style: 'Royal',
  },
  {
    id: 'royal-4',
    title: 'Royal 4',
    image: '/images/art/Royal/Royal4.jpeg',
    style: 'Royal',
  },

  // Seasons Series
  {
    id: 'seasons-1',
    title: 'Seasons 1',
    image: '/images/art/Seasons/Seasons1.png',
    style: 'Seasons',
  },
  {
    id: 'seasons-2',
    title: 'Seasons 2',
    image: '/images/art/Seasons/Seasons2.png',
    style: 'Seasons',
  },
  {
    id: 'seasons-3',
    title: 'Seasons 3',
    image: '/images/art/Seasons/Seasons3.jpg',
    style: 'Seasons',
  },
  {
    id: 'seasons-4',
    title: 'Seasons 4',
    image: '/images/art/Seasons/Seasons4.jpeg',
    style: 'Seasons',
  },
];

export const getArtworksByStyle = (style: ArtStyle): Artwork[] => {
  return artworks.filter((artwork) => artwork.style === style);
};
