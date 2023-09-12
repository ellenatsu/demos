import React, { useState, Component } from "react";
import Slider from "react-slick";
import { Header } from "../components/header/Header";
import "./carousel.css";
import { render } from "@testing-library/react";

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

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <Header />
      {/* <div className="carousel">
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
      </div> */}
      <div className="line-container">
        <svg
          width="376"
          height="132"
          viewBox="0 0 376 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 104C11.6667 89.9999 41.2 62.9999 82 66.9999C133 71.9999 142 97.0001 160 82C178 66.9999 183 37.4996 189 18C195 -1.49968 209.5 3.09944e-05 217 8.99996C224.5 17.9999 224.5 17.0001 241 42C257.5 66.9999 277.333 101 293 118C300.333 126.333 320 138 340 118C360 98 372.333 93 376 93"
            stroke="black"
            stroke-opacity="0.49"
            stroke-width="4"
          />
        </svg>
      </div>

      <div className="slider-section">
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          className="slider-1"
        >
          {images.map((item) => (
            <img src={item} />
          ))}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider-2"
        >
          {images.map((item) => (
            <img src={item} />
          ))}
        </Slider>
      </div>
    </>
  );
};
