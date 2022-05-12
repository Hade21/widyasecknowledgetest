import React from "react";
import Input from "./input";
import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import {
  setBio,
  setImage,
  setPass,
  setUpdateProfile,
  setUser,
} from "../app/features/pages/active";

const ProfileUpdate = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.active.username);
  const bio = useSelector((state) => state.active.bio);
  const image = useSelector((state) => state.active.image);
  const password = useSelector((state) => state.active.password);

  const handleSubmit = async () => {
    dispatch(setUpdateProfile());
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
