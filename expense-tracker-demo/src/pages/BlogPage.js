import React from "react";
import { Header } from "../components/header/Header";
import { Category } from "../components/blog/Category";
import { Card } from "../components/blog/Card";
import { Routes, Route } from "react-router-dom";
import { Details } from "../components/blog/PostDetail";

export const BlogPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <Card />
    </div>
  );
};
