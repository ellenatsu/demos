import React, { useRef } from "react";
import "./ImageGallery.css";

export const ImageGallery = ({ images }) => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollLeft -= 300; // Adjust the scroll amount
  };

  const scrollRight = () => {
    galleryRef.current.scrollLeft += 300; // Adjust the scroll amount
  };

  return (
    <div className="image-gallery-container">
      <button className="scroll-button" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="image-gallery" ref={galleryRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <button className="scroll-button" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};
