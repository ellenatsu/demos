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

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details/:id" element={<PostDetail />} />
        <Route path="/blog/create" element={<NewPost />} />
      </Routes>
    </div>
  );
};
