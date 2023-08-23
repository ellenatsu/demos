import React from "react";
import "./AccountInfo.css";
import image from "../../assets/images/default.png";
import { BiImageAdd } from "react-icons/bi";

export const AccountInfo = () => {
  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <h1>Need to replace hints with default information!</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="img" />
                <img src={image} alt="default" />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
