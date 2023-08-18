import React from "react";
import "./category.css";
import { category } from "../../assets/data";

export const Category = () => {
  return (
    <>
      <section className="category">
        <div className="content">
          {category.map((item) => (
            <div className="boxs" key={item.id}>
                <div className="box">
                    <img src={item.cover} alt=""></img>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
