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
  setUser,
  setUserFocus,
  validateMatch,
  validatePass,
  validateUser,
  validateEmail,
  setMatch,
  setMatchFocus,
  reset,
} from "../../app/features/register/register";
import Button from "../../components/button";
import Input from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useSelector((state) => state.register.username);
  const userFocus = useSelector((state) => state.register.userFocus);
  const validUser = useSelector((state) => state.register.validUser);
  const email = useSelector((state) => state.register.email);
  const validEmail = useSelector((state) => state.register.validEmail);
  const password = useSelector((state) => state.register.pwd);
  const validPass = useSelector((state) => state.register.validPwd);
  const passFocus = useSelector((state) => state.register.pwdFocus);
  const matchPwd = useSelector((state) => state.register.matchPwd);
  const validMatch = useSelector((state) => state.register.validMatch);
  const matchFocus = useSelector((state) => state.register.matchFocus);
  const errMsg = useSelector((state) => state.register.errMsg);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    dispatch(validateUser(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    dispatch(validateEmail(email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    dispatch(validatePass(password));
    dispatch(validateMatch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, matchPwd]);

  useEffect(() => {
    dispatch(setErrMsg(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, email, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate1 = dispatch(validateUser(username));
    const validate2 = dispatch(validatePass(password));
    if (!validate1 || !validate2) {
      dispatch(setErrMsg("Invalid Entry"));
      return;
    }
    try {
      const response = await axios.post("/users", {
        user: { username: username, email: email, password: password },
      });
      console.log(response, response.data);
      dispatch(reset());
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        dispatch(setErrMsg("No Server response"));
      } else if (error.response?.status === 422) {
        dispatch(setErrMsg("Attempt to Write a Readonly Database"));
      } else {
        dispatch(setErrMsg("Registration Failed"));
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
        <h1 className="text-4xl font-merriewether mb-7">Register</h1>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="username">
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
              value={username}
              valid={validUser}
            >
              Username
            </Input>
            <p
              id="uidnote"
              className={
                userFocus && !validUser && username
                  ? "transition-all duration-500 bg-black text-[10px] text-left border-2 border-white rounded-lg mt-1 p-2 w-5/6 mx-auto opacity-100"
                  : "w-1/2 mx-auto h-1/2 text-left opacity-0 text-[0px] transition-all duration-500"
              }
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>
                4 to 24 characters. <br /> Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed
              </span>
            </p>
          </div>
          <Input
            type="email"
            id="email"
            reff={userRef}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            describedby="emailnote"
            onFocus={() => dispatch(setEmailFocus(true))}
            onBlur={() => dispatch(setEmailFocus(false))}
            placeholder="Email"
            value={email}
            valid={validEmail}
          >
            Email
          </Input>
          <div className="password">
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
              value={password}
              valid={validPass}
            >
              Password
            </Input>
            <p
              id="passnote"
              className={
                passFocus && !validPass && password
                  ? "transition-all duration-500 bg-black text-[10px] text-left border-2 border-white rounded-lg mt-1 p-2 w-5/6 mx-auto opacity-100"
                  : "w-1/2 mx-auto h-1/2 text-left opacity-0 text-[0px] transition-all duration-500"
              }
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>
                8 to 24 characters. <br /> Must include uppercase and lowercase
                letters, numbers, and special characters. <br />
                Allowed special characters:
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at mark">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </span>
            </p>
          </div>
          <div className="confirm">
            <Input
              type="password"
              id="matchPwd"
              reff={userRef}
              onChange={(e) => dispatch(setMatch(e.target.value))}
              invalid={validUser ? "false" : "true"}
              describedby="confnote"
              onFocus={() => dispatch(setMatchFocus(true))}
              onBlur={() => dispatch(setMatchFocus(false))}
              placeholder="Confirm Password"
              valid={validMatch}
              value={matchPwd}
            >
              Confirm Password
            </Input>
            <p
              id="confnote"
              className={
                matchFocus && !validMatch && matchPwd
                  ? "transition-all duration-500 bg-black text-[10px] text-left border-2 border-white rounded-lg mt-1 p-2 w-5/6 mx-auto opacity-100"
                  : "w-1/2 mx-auto h-1/2 text-left opacity-0 text-[0px] transition-all duration-500"
              }
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>Password didn't match</span>
            </p>
          </div>
          <div className="submit z-10">
            <Button
              disable={
                !validUser || !validEmail || !validPass || !validMatch
                  ? true
                  : false
              }
            >
              Register
            </Button>
            <p className="text-center italic text-sm mt-2">
              Already have account?{" "}
              <Link to="/login" className="font-semibold z-10">
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
