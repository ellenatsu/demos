import React, { useState } from "react";
import { Header } from "../Header/Header";
import { useParams } from "react-router";
import { useEffect } from "react";
import { blog } from "../../assets/data";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import "./details.css";

export const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <div>
      <Header />
      {blogs ? (
        <section className="singlePost">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
            <div className="right">
              <div className="buttons">
                <button>
                  <BsPencilSquare />
                </button>
              </div>

              <div className="buttons">
                <button>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : (
        <div>Post not found!</div>
      )}
    </div>
  );
};
