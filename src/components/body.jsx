import React from "react";
import Articles from "../pages/Articles";
import Profile from "../pages/Profile";

const Body = () => {
  return (
    <div>
      <div className="wrapper flex items-center bg-gradient-to-br to-pink-700 from-indigo-700 py-28">
        <Profile />
        <Articles />
      </div>
    </div>
  );
};

export default Body;
