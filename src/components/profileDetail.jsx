import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProfileDetail = ({ onClick }) => {
  return (
    <div className="div flex justify-between items-center w-full">
      <div className="font-commisioner font-medium text-lg text-white flex flex-col gap-2 text-left">
        <h3>Nama : </h3>
        <h3>Bio : </h3>
        <h3>Following : </h3>
      </div>
      <div className="add text-6xl text-white cursor-pointer" onClick={onClick}>
        <FontAwesomeIcon icon={faUserPen} />
      </div>
    </div>
  );
};

export default ProfileDetail;
