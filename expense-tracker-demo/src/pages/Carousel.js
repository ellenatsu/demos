import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

export const Carousel = ({ images }) => {
  const [curIndex, setCurIndex] = useState(0); //track of current image index

  const handleNext = () => {
    setCurIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleIndexClick = (idx) => {
    setCurIndex(idx);
  };

  return (
    <>
      <Header />
      <h1>Image Carousel Demo</h1>
      <div className="carousel">
        <img key={curIndex} src={images[curIndex]} />
        <div className="slide_direction">
          <div className="left" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
          <div className="right" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${curIndex === index ? "active" : ""}`}
            onClick={() => handleIndexClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};
