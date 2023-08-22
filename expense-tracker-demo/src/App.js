// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ExpenseTrackerPage } from "./pages/ExpenseTrackerPage";
import { BlogPage } from "./pages/BlogPage";
import { LoginPage } from "./pages/LoginPage";
import { Details } from "./components/BlogComponents/Details";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};
