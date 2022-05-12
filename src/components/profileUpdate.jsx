import React from "react";
import Input from "./input";
import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import {
  resetProfile,
  setBio,
  setEmail,
  setImage,
  setPass,
  setProfilDetail,
  setUpdateProfile,
  setUser,
} from "../app/features/pages/active";
import axios from "../api/axios";

const ProfileUpdate = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.active.username);
  const email = useSelector((state) => state.active.email);
  const bio = useSelector((state) => state.active.bio);
  const image = useSelector((state) => state.active.image);
  const password = useSelector((state) => state.active.password);
  const authUser = useSelector((state) => state.register.setAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = `Token ${authUser.token}`;
    try {
      const res = await axios.put(
        "/user",
        {
          user: {
            bio,
            email,
            image,
            password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
          },
        }
      );
      if (res.status === 200) {
        dispatch(setProfilDetail(res.data.profile));
        dispatch(setUpdateProfile());
        dispatch(resetProfile());
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="text-white flex flex-col gap-7 mt-12"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          id="username"
          onChange={(e) => dispatch(setUser(e.target.value))}
          placeholder="username"
        >
          Username
        </Input>
        <Input
          type="text"
          id="email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="email"
        >
          Email
        </Input>
        <Input
          type="text"
          id="bio"
          onChange={(e) => dispatch(setBio(e.target.value))}
          placeholder="Bio"
        >
          Bio
        </Input>
        <Input
          type="text"
          id="image"
          onChange={(e) => dispatch(setImage(e.target.value))}
          placeholder="image"
        >
          Image
        </Input>
        <Input
          type="password"
          id="password"
          onChange={(e) => dispatch(setPass(e.target.value))}
          placeholder="password"
        >
          Password
        </Input>
        <Button
          disable={!username || !password || !bio || !image ? true : false}
        >
          Simpan
        </Button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
