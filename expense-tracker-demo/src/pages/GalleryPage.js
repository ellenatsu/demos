import React from "react";
import { ImageGallery } from "../components/common/ImageGallery";
import { Header } from "../components/header/Header";

export const GalleryPage = () => {
  const images = [
    "https://i.ibb.co/Yd4S0z7/2.jpg",
    "https://i.ibb.co/SX5DKdX/4.jpg",
  ];
  return (
    <div>
      <Header />
      <h1>GalleryPage</h1>
      <ImageGallery images={images} />
    </div>
  );
};
