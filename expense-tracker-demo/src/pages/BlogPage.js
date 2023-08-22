import React from "react";
import { Header } from "../components/Header/Header";
import { Category } from "../components/BlogComponents/Category";
import { Card } from "../components/BlogComponents/Card";
import { Routes, Route } from "react-router-dom";
import { Details } from "../components/BlogComponents/Details";

export const BlogPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <Card />
    </div>
  );
};
