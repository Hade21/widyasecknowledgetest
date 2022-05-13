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
  setProfileUpdated,
  setUpdateProfile,
} from "../app/features/pages/active";
import axios from "../api/axios";

const ProfileUpdate = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.active.email);
  const bio = useSelector((state) => state.active.bio);
  const image = useSelector((state) => state.active.image);
  const password = useSelector((state) => state.active.password);
  const authUser = useSelector((state) => state.register.setAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyConfig = {
      user: {
        bio,
        email,
        image,
        password,
      },
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${authUser.token}`,
      },
    };
    try {
      const res = await axios.put("/user", bodyConfig, header);
      if (res.status === 200) {
        dispatch(setProfileUpdated());
        dispatch(setUpdateProfile());
        dispatch(resetProfile());
      }
    } catch (error) {
      if (error.response?.status === 403) {
        alert("You have no access to change data!");
      } else {
        alert("Gagal mengupdate data!");
      }
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
        <Button disable={password ? false : true}>Simpan</Button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
