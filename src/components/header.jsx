import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuth } from "../app/features/register/register";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.register.setAuth);

  const setLogout = () => {
    dispatch(setAuth(null));
    navigate("/");
  };
  console.log(authUser);
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
        {!authUser ? (
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
        ) : (
          <div className="logout">
            <button
              onClick={setLogout}
              className="text-base px-6 py-2 bg-rose-600 rounded-lg text-white font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
