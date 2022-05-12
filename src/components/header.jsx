import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-screen fixed top-0 left-0 px-14 py-6 font-commisioner bg-gray-300 shadow-md z-10">
      <div className="logo">
        <img
          src="https://widyasecurity.com/wp-content/uploads/2022/01/logo-Tag.png"
          alt="logo"
          className="w-40"
        />
      </div>
      <div className="items">
        <ul className="flex gap-3">
          <Link to="/login">
            <li className="text-base px-6 py-2 bg-rose-600 rounded-lg text-white font-medium">
              Login
            </li>
          </Link>
          <Link to="/register">
            <li className="text-base px-6 py-2 bg-indigo-600 rounded-lg text-white font-medium">
              Register
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
