import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setEmail,
  setEmailFocus,
  setErrMsg,
  setPwd,
  setPassFocus,
  setUser,
  setUserFocus,
  validateMatch,
  validatePass,
  validateUser,
  setMatch,
  setMatchFocus,
} from "../../app/features/register/register";
import Button from "../../components/button";
import Input from "../../components/input";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const username = useSelector((state) => state.register.username);
  const userFocus = useSelector((state) => state.register.userFocus);
  const validUser = useSelector((state) => state.register.validUser);
  const email = useSelector((state) => state.register.email);
  const emailFocus = useSelector((state) => state.register.emailFocus);
  const password = useSelector((state) => state.register.pwd);
  const validPass = useSelector((state) => state.register.validPwd);
  const passFocus = useSelector((state) => state.register.pwdFocus);
  const matchPwd = useSelector((state) => state.register.matchPwd);
  const matchFocus = useSelector((state) => state.register.matchFocus);
  const errMsg = useSelector((state) => state.register.errMsg);

  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    dispatch(validateUser(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    dispatch(validatePass(password));
    dispatch(validateMatch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, matchPwd]);

  useEffect(() => {
    dispatch(setErrMsg(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, email, password, matchPwd]);

  return (
    <section className="bg-gradient-to-br from-purple-700 to-pink-900 h-screen w-screen flex justify-center items-center">
      <div className="register w-4/5 max-w-md bg-sky-700 rounded-xl px-6 py-6 text-white shadow-lg shadow-slate-700">
        <p
          ref={errRef}
          className={errMsg ? "text-base" : "fixed -top-[1024px]"}
        >
          {errMsg}
        </p>
        <h1 className="text-4xl font-merriewether mb-7">Register</h1>
        <form className="flex flex-col gap-7">
          <Input
            type="text"
            id="username"
            reff={userRef}
            onChange={(e) => dispatch(setUser(e.target.value))}
            invalid={validUser ? "false" : "true"}
            describedby="uidnote"
            onFocus={() => dispatch(setUserFocus(true))}
            onBlur={() => dispatch(setUserFocus(false))}
            placeholder="Username"
          >
            Username
          </Input>
          <p id="uidnote" className={userFocus ? "block" : "hidden"}>
            4 to 24 characters. <br /> Must begin with a letter. <br />
            Letters, numbers, underscores, hyphens allowed
          </p>
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
          <Input
            type="password"
            id="password"
            reff={userRef}
            onChange={(e) => dispatch(setPwd(e.target.value))}
            invalid={validPass ? "false" : "true"}
            describedby="passnote"
            onFocus={() => dispatch(setPassFocus(true))}
            onBlur={() => dispatch(setPassFocus(false))}
            placeholder="Password"
          >
            Password
          </Input>
          <Input
            type="password"
            id="matchPwd"
            reff={userRef}
            onChange={(e) => dispatch(setMatch(e.target.value))}
            invalid={validUser ? "false" : "true"}
            describedby="uidnote"
            onFocus={() => dispatch(setMatchFocus(true))}
            onBlur={() => dispatch(setMatchFocus(false))}
            placeholder="Confirm Password"
          >
            Confirm Password
          </Input>
          <div className="subit">
            <Button>Register</Button>
            <p className="text-center italic text-sm mt-2">
              Already have account?{" "}
              <Link to="/login" className="font-semibold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
