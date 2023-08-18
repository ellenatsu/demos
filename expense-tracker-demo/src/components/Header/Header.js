import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { navItems } from "../../assets/data";
import { User } from "./User";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="scontatiner flex">
          <div className="logo">LOGO</div>

          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
      <section></section>
    </>
  );
};
