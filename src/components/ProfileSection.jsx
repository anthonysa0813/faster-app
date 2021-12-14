import React from "react";
import "./profileSection.css";
import user from "../images/user-profile.png";

const ProfileSection = () => {
  return (
    <div className="profileSectionContainer ">
      <div className="wrapper profile-info ">
        <img src={user} alt="" />
        <h1 className="title">Less logging in, more checking out</h1>
        <p className="text">
          No more unique logins or pAsSw0rds! With one click, Fast lets you
          securely log in, check out, and get on with your day.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
