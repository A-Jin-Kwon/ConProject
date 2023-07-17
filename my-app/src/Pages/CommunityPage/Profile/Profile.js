import React from "react";
import styled from "styled-components";

import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";

const Profile = ({ src }) => {
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <ProfileContent></ProfileContent>
    </>
  );
};

export default Profile;
