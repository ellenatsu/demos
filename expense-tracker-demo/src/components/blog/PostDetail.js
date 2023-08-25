import React, { useState } from "react";
import { Header } from "../header/Header";
import { useParams } from "react-router";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import "./details.css";
import { useFetchPost } from "../../hooks/blog";

export const PostDetail = () => {
  const { id } = useParams();

  const { post } = useFetchPost(id);

  return (
    <div>
      <Header />
      {post ? (
        <section className="singlePost">
          <div className="container">
            {/* <div className="left">
              <img src={blogs.cover} alt="" />
            </div> */}
            <div className="right">
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>
      ) : (
        <div>Post not found!</div>
      )}
    </div>
  );
};
