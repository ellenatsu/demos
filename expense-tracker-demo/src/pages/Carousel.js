import React, { useState, Component } from "react";
import Slider from "react-slick";
import { Header } from "../components/header/Header";
import "./carousel.css";
import { render } from "@testing-library/react";

export const Carousel = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <Header />
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
