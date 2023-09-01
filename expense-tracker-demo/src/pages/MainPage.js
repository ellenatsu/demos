// MainPage.js
import React from "react";
import { Header } from "../components/header/Header";
import { ImageGallery } from "../components/common/ImageGallery";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <img src="../assets/images/cat-2.jpeg" alt="cat"></img>
      <h2> Under Construction ... </h2>

      <br />
      <ul>
        Blog page
        <li>1. edit & delete blog</li>
        <li>2. add pictures in blog, store in firestorage</li>
      </ul>

      <ul>
        Gallery page
        <li>1. upload images</li>
        <li>2. create album?</li>
      </ul>

      <ul>
        User
        <li>1. user access, user name, store user in other database</li>
      </ul>

      <ul>
        Home + Agenda
        <li>1. Home makes like 3-4 slide vertical scroll</li>
        <li>
          2. make an agenda page.... temperally as home page... Construction
          Progress...
        </li>
      </ul>
    </div>
  );
};
