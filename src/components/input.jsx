import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Input = ({
  id,
  children,
  type,
  reff,
  invalid,
  onChange,
  describedby,
  onFocus,
  onBlur,
  placeholder,
  value,
  valid,
  validation,
}) => {
  return (
    <div className="relative w-full sm:w-5/6 mx-auto">
      <input
        type={type}
        id={id}
        ref={reff}
        autoComplete="off"
        onChange={onChange}
        aria-invalid={invalid}
        aria-describedby={describedby}
        onFocus={onFocus}
        onBlur={onBlur}
        className="bg-transparent outline-none focus:outline-none p-2 border-b-2 border-gray-300  focus:border-rose-600 peer w-full font-commisioner placeholder-transparent"
        placeholder={placeholder}
        value={value}
      />
      <label
        htmlFor={id}
        className="font-commisioner font-medium text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 transition-all duration-300 peer-focus:text-sm peer-focus:-top-3.5 peer-focus:left-0"
      >
        {children}{" "}
        <span
          className={
            valid && value ? "ml-2 text-green-600 text-base" : "hidden"
          }
        >
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
        <span
          className={
            valid || !value || !validation
              ? "hidden"
              : "ml-2 text-red-500 text-base"
          }
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </label>
    </div>
  );
};

export default Input;
