import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  setProfilDetail,
  setProfileActive,
  setUpdateProfile,
} from "../../app/features/pages/active";
import ProfileDetail from "../../components/profileDetail";
import ProfileUpdate from "../../components/profileUpdate";
import axios from "../../api/axios";

const Profile = () => {
  const dispatch = useDispatch();

  const update = useSelector((state) => state.active.updateProfile);
  const profile = useSelector((state) => state.active.profile);
  const articles = useSelector((state) => state.active.articles);
  const authUser = useSelector((state) => state.register.setAuth);
  const profileDetail = useSelector((state) => state.active.profileDetail);
  const profileUpdated = useSelector((state) => state.active.profileUpdated);

  useEffect(() => {
    async function GetDetail() {
      const token = `Token ${authUser.token}`;
      try {
        const res = await axios.get(`/profiles/${authUser.username}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
          },
        });
        if (res.status === 200) {
          dispatch(setProfilDetail(res.data.profile));
        }
      } catch (error) {
        console.log(error);
      }
    }
    GetDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileUpdated]);

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
          Profile{" "}
        </h1>
      ) : null}{" "}
      <div className={profile ? "flex items-center" : "content"}>
        <span
          className={`text-[200px] text-white ${profile ? "w-2/6" : "w-full"}`}
        >
          {profileDetail ? (
            <img
              src={profileDetail.image}
              alt="profile"
              className="w-[200px] h-[200px] rounded-full mb-4"
            />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} />
          )}{" "}
          {profile ? null : (
            <p className="text-white font-commisioner font-medium text-xl">
              {" "}
              {profileDetail ? profileDetail.username : "Username"}{" "}
            </p>
          )}{" "}
        </span>{" "}
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
              <ProfileDetail onClick={handleSwitch} profile={profileDetail} />
            )
          ) : null}{" "}
        </div>{" "}
      </div>{" "}
      <p
        className="text-white cursor-pointer font-commisioner font-medium flex gap-4 items-center justify-center mt-8"
        onClick={handleFullScreen}
      >
        {profile ? "Hide Profile" : "See Profile"}{" "}
        <FontAwesomeIcon icon={profile ? faArrowLeft : faArrowRight} />{" "}
      </p>{" "}
    </div>
  );
};

export default Profile;
