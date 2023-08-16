// MainPage.js
import React from "react";
import { Navbar } from "../components/Common/Navbar";
import { ImageGallery } from "../components/Common/ImageGallery";

export const MainPage = () => {
  const images = [
    "https://i.ibb.co/SX5DKdX/4.jpg",
    "https://i.ibb.co/BtjRLF9/3.jpg",
    "https://i.ibb.co/Yd4S0z7/2.jpg",
  ];
  return (
    <div className="main-page">
      <Navbar />
      <h2>Welcome to the sweet home</h2>
      <ImageGallery images={images} />
    </div>
  );
};
