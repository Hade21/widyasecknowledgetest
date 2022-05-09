import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input type={props.type} />
    </div>
  );
};

export default Input;
