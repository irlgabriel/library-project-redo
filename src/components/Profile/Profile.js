import React from "react";
import {ProfileInfo, UserEmail} from "./Profile.elements"

export default function Profile({user}) {

  return (
    <>
      <ProfileInfo>
        <UserEmail>
          {user.email}
        </UserEmail>
      </ProfileInfo>
    </>
  )
}