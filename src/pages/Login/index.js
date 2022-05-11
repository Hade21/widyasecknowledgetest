import React, { useEffect, useRef } from "react";
import axios from "../../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setEmail,
  setEmailFocus,
  setErrMsg,
  setPwd,
  setPassFocus,
  validatePass,
  validatePassLogin,
  validateEmail,
  reset,
} from "../../app/features/register/register";
import Button from "../../components/button";
import Input from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.register.email);
  const validEmail = useSelector((state) => state.register.validEmail);
  const password = useSelector((state) => state.register.pwd);
  const validPassLogin = useSelector((state) => state.register.validPwdLogin);
  const errMsg = useSelector((state) => state.register.errMsg);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    dispatch(validateEmail(email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    dispatch(validatePassLogin(password));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  useEffect(() => {
    dispatch(setErrMsg(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate1 = dispatch(validateEmail(email));
    const validate2 = dispatch(validatePass(password));
    if (!validate1 || !validate2) {
      dispatch(setErrMsg("Invalid Entry"));
      return;
    }
    try {
      const response = await axios.post("/users/login", {
        user: { email: email, password: password },
      });
      console.log(response, response.data);
      dispatch(reset());
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        dispatch(setErrMsg("No Server response"));
      } else if (error.response?.status === 403) {
        dispatch(setErrMsg("You have no access!"));
      } else {
        dispatch(setErrMsg("Login Failed"));
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-700 to-pink-900 h-screen w-screen flex justify-center items-center">
      <div className="register w-4/5 max-w-md bg-sky-700 rounded-xl px-6 py-6 text-white shadow-lg shadow-slate-700">
        <p
          ref={errRef}
          className={
            errMsg
              ? "text-base font-commisioner text-center bg-red-500 rounded-lg font-bold px-4 py-2 transition-all duration-300"
              : "fixed -top-[1024px] transition-all duration-300"
          }
          aria-live="assertive"
        >
          {errMsg}{" "}
          <span>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </span>
        </p>
        <h1 className="text-4xl font-merriewether mb-7">Login</h1>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            reff={userRef}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            describedby="emailnote"
            onFocus={() => dispatch(setEmailFocus(true))}
            onBlur={() => dispatch(setEmailFocus(false))}
            placeholder="Email"
          >
            Email
          </Input>
          <div className="password">
            <Input
              type="password"
              id="password"
              reff={userRef}
              onChange={(e) => dispatch(setPwd(e.target.value))}
              invalid={validPassLogin ? "false" : "true"}
              describedby="passnote"
              onFocus={() => dispatch(setPassFocus(true))}
              onBlur={() => dispatch(setPassFocus(false))}
              placeholder="Password"
            >
              Password
            </Input>
          </div>
          <div className="submit z-10">
            <Button disable={!validEmail || !validPassLogin ? true : false}>
              Login
            </Button>
            <p className="text-center italic text-sm mt-2">
              Don't have account?{" "}
              <Link to="/register" className="font-semibold z-10">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
