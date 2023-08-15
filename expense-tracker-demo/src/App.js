// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ExpenseTrackerPage } from "./pages/ExpenseTrackerPage";
import { BlogPage } from "./pages/BlogPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/expense-tracker" component={<ExpenseTrackerPage />} />
      <Route path="/blog" component={<BlogPage />} />
      <Route path="/" component={<MainPage />} />
    </Routes>
  );
};
