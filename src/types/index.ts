// Type definitions for Azukios Portfolio

export interface Artwork {
  id: string;
  title: string;
  image: string;
  style: ArtStyle;
}

export type ArtStyle =
  | 'Affection'
  | 'Gentle'
  | 'Lucid-dream'
  | 'Royal'
  | 'Seasons';

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

export interface Exhibition {
  work: string;
  event: string;
  date: string;
  location: string;
}

export interface Publication {
  work: string;
  publication: string;
  date: string;
  location: string;
}

export interface ContactInfo {
  email: string;
  instagram: string;
  instagramUrl: string;
}
