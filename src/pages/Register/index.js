import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.pwd);
  const matchPwd = useSelector((state) => state.register.matchPwd);
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      Register Page
      <br />
      {username}
      <br />
      {email}
      <br />
      {password}
      <br />
      {matchPwd}
    </div>
  );
};

export default Register;
