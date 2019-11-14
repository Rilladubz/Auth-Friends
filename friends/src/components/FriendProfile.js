import React from "react";

const FriendProfile = props => {
  //   console.log("Profile", props);
  const friend = props.clickedFriend.friendData;
  return (
    <div>
      <h1>Details!</h1>
      <p>
        {`Hello my name is ${friend.name}. I am ${friend.age} years old. If you need to reach me my email is ${friend.email}`}
      </p>
    </div>
  );
};

export default FriendProfile;
