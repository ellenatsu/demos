import React from "react";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div className="profile">
      <button className="img">Avatar</button>

      <div className="openProfile boxItems">
        <Link to="/account"></Link>
      </div>
    </div>
  );
};
