import React from 'react';
import './ImageGalleryItem-module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="gallery-item" onClick={() => onImageClick(image)}>
      <img className="gallery-item-image" src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
