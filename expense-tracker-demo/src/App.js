// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ExpenseTrackerPage } from "./pages/ExpenseTrackerPage";
import { BlogPage } from "./pages/BlogPage";
import { LoginPage } from "./pages/LoginPage";
import { PostDetail } from "./components/blog/PostDetail";
import { AccountInfo } from "./components/account/AccountInfo";
import { NewPost } from "./components/blog/NewPost";
import { Carousel } from "./pages/Carousel";
import { AnimateCatPage } from "./pages/AnimateCatPage";

export const App = () => {
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/image-gallery" element={<Carousel images={images} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details/:id" element={<PostDetail />} />
        <Route path="/blog/create" element={<NewPost />} />
        <Route path="/animate" element={<AnimateCatPage />} />
      </Routes>
    </div>
  );
};
