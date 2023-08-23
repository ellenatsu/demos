import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import "./Header.css";
import { BiLogOut } from "react-icons/bi";

export const User = () => {
  const user = true;

  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };
  return (
    <div className="profile">
      {user ? (
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img src="https://i.ibb.co/XCBbpD6/avatar.jpg" alt="avatar"></img>
          </button>
          {profileOpen && (
            <div className="openProfile boxItems">
              <Link to="/account">
                <div className="image">
                  <div className="img">
                    <img
                      src="https://i.ibb.co/XCBbpD6/avatar.jpg"
                      alt="avatar"
                    ></img>
                  </div>
                  <div className="text">
                    <h4>Ellen Wang</h4>
                  </div>
                </div>
              </Link>
              <Link to="/blog/create">
                <button className="box">
                  <RiImageAddLine className="icon" />
                  <h4>Create Post</h4>
                </button>
              </Link>
              <button className="box">
                <BiLogOut className="icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : (
        <Link to="/login">
          <button>My Account</button>
        </Link>
      )}
    </div>
  );
};
