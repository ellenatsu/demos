import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { navItems } from "../../assets/data";
import { User } from "./User";

export const Header = () => {
  return (
    <header>
      <div className="scontatiner flex">
        <div className="logo">LOGO</div>
      </div>
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
    </header>
  );
};
