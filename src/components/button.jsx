import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="px-14 py-3 bg-rose-600 rounded-lg w-fit font-commisioner font-bold mx-auto"
    >
      {children}
    </button>
  );
};

export default Button;
