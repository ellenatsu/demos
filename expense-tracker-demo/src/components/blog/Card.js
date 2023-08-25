import React from "react";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./blog.css";
import { useFetchPosts } from "../../hooks/blog";

export const Card = () => {
  const { postData } = useFetchPosts();

  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {postData.map((item) => (
            <div className="box boxItems" key={item.id}>
              {/* <div className="img">
                <img src={item.cover} alt="" />
              </div> */}
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.tags}</a>
                </div>
                <Link to={`/blog/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: item.content.slice(0,180) }}></p>
                
                <div className="date">
                  <AiOutlineClockCircle className="icon" />
                  <label htmlFor="">{item.date}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
