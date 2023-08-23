// MainPage.js
import React from "react";
import { Header } from "../components/header/Header";
import { ImageGallery } from "../components/common/ImageGallery";

export const MainPage = () => {
  const images = [
    "https://i.ibb.co/SX5DKdX/4.jpg",
    "https://i.ibb.co/BtjRLF9/3.jpg",
    "https://i.ibb.co/Yd4S0z7/2.jpg",
  ];
  return (
    <div className="main-page">
      <Header />
      <h2>Welcome to the sweet home</h2>
      {/* <ImageGallery images={images} /> */}

      <br />
      <h1>TBD:</h1>
      <ul>
        <li>
          List editor, home page pictures + agenda editor, gallery upload
          &editor
        </li>
        <li>users: admin, readonly, no access</li>
        <li>
          cool effects to display agenda + reminder + gallery in home page
        </li>
      </ul>
    </div>
  );
};
