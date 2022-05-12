import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  setProfileActive,
  setUpdateProfile,
} from "../../app/features/pages/active";
import ProfileDetail from "../../components/profileDetail";
import ProfileUpdate from "../../components/profileUpdate";

const Profile = () => {
  const dispatch = useDispatch();

  const update = useSelector((state) => state.active.updateProfile);
  const profile = useSelector((state) => state.active.profile);
  const articles = useSelector((state) => state.active.articles);

  const handleFullScreen = () => {
    dispatch(setProfileActive());
  };

  const handleSwitch = () => {
    dispatch(setUpdateProfile());
  };

  return (
    <div
      className={
        profile
          ? "w-full px-24 py-8 h-full border-0 transition-all duration-300"
          : articles
          ? "w-0 text-[0px] h-full opacity-0 transition-all duration-300 border-0"
          : "w-2/5 p-24 h-full border-r-2 border-gray-300 transition-all duration-300"
      }
    >
      {profile ? (
        <h1 className="font-merriewether font-bold text-5xl text-white">
          Profile
        </h1>
      ) : null}
      <div className={profile ? "flex items-center" : "content"}>
        <span
          className={`text-[200px] text-white ${profile ? "w-2/6" : "w-full"}`}
        >
          <img src="" alt="profile" className="hidden" />
          <FontAwesomeIcon icon={faUserCircle} />
          <p className="text-white font-commisioner font-medium text-xl ">
            Username
          </p>
        </span>
        <div
          className={
            profile
              ? "w-4/6 transition-all duration-300"
              : "w-0 transition-all duration-300"
          }
        >
          {profile ? (
            update ? (
              <ProfileUpdate onSubmit={handleSwitch} />
            ) : (
              <ProfileDetail onClick={handleSwitch} />
            )
          ) : null}
        </div>
      </div>
      <p
        className="text-white cursor-pointer font-commisioner font-medium flex gap-4 items-center justify-center mt-8"
        onClick={handleFullScreen}
      >
        {profile ? "Hide Profile" : "See Profile"}
        <FontAwesomeIcon icon={profile ? faArrowLeft : faArrowRight} />
      </p>{" "}
    </div>
  );
};

export default Profile;
