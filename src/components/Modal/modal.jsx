import React, { useEffect } from 'react';
import './modal-module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);
  console.log(largeImageURL);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={largeImageURL} alt="Large View" />
      </div>
    </div>
  );
};

export default Modal;
