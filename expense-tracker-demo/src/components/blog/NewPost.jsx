import React from "react";
import "./newpost.css";

export const NewPost = () => {
  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <img src="" alt="" />
          <form action="">
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input type="text" placeholder="Title" />

            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
