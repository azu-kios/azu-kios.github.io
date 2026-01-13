import type { Exhibition, Publication, ContactInfo } from '../types';

export const artistInfo = {
  name: 'Ki (Azukios)',
  title: 'Artist',
  profileImage: '/images/about/Azukios-ProfilePicture-rose.jpeg',
  signatureImage: '/images/about/Azukios-Signature.PNG',
  bio: `Currently based in London and studying Product and Industrial Design at Central Saint Martins. Her practice spans digital painting, oil painting, ink painting, and furniture design. She focuses on emotional and inner worlds, with a hazy, dreamlike use of color.`,
};

export const exhibitions: Exhibition[] = [
  {
    work: 'Affection',
    event: 'Co-Cocoon Collection, FIRST International Film Festival × Geometry Bookstore',
    date: 'July 20–28, 2025',
    location: 'Xining, China',
  },
  {
    work: 'Taurin Chair',
    event: 'Co-Domain Collection, The Handbag Factory',
    date: 'May 31–June 2, 2025',
    location: 'London, UK',
  },
];

export const publications: Publication[] = [
  {
    work: 'Ancient Wormhole',
    publication: 'Urchamber: Prototype Chamber, Paris-based non-profit magazine focusing on feminist thought and contemporary art',
    date: 'October 2025',
    location: 'Paris, France',
  },
];

export const contactInfo: ContactInfo = {
  email: 'azukios.co@gmail.com',
  instagram: '@azukios',
  instagramUrl: 'https://instagram.com/azukios',
};
