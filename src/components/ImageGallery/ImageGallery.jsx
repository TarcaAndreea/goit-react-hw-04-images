import React from 'react';
import '../ImageGallery/ImageGalery-module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          image={img}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
