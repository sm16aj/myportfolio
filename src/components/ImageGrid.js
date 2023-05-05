import React from 'react';
import "../App.css"

const images = [
  {
    src: '/images/patrick.jpg',
    alt: 'depth',
  },
  {
    src: '/images/apple.jpg',
    alt: 'magnified',
  },
  {
    src: '/images/tree.jpg',
    alt: 'pixel',
  },
  {
    src: '/images/stem.png',
    alt: 'icons',
  },
  {
    src: '/images/school.png',
    alt: 'powerpoint',
  },
  {
    src: '/images/balsamiq.png',
    alt: 'wireframe',
  },
  {
    src: '/images/dreamz.jpg',
    alt: 'quote',
  },
  {
    src: '/images/principles.gif',
    alt: 'design',
  },
  {
    src: '/images/ducky.jpg',
    alt: 'without',
  },
  {
    src: '/images/shades.jpg',
    alt: 'with',
  },
  {
    src: '/images/goth.jpg',
    alt: 'phase',
  },
  {
    src: '/images/stomp.gif',
    alt: 'scene',
  },
  {
    src: '/images/martini.jpg',
    alt: 'kilter',
  },
  {
    src: '/images/cartoon.png',
    alt: 'me',
  },
  {
    src: '/images/clouds.png',
    alt: 'first',
  },
  {
    src: '/images/name.png',
    alt: 'last',
  },
];

const ImageGrid = () => (
  <div className="grid-container">
    {images.map((image) => (
      <img key={image.src} className="grid-item" src={image.src} alt={image.alt} />
    ))}
  </div>
);

export default ImageGrid;
