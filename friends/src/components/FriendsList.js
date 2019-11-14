import React from "react";
import FriendsCard from "./FriendsCard";
import AddFriendForm from "../components/AddFriendForm";
import FriendProfile from "./FriendProfile";

const FriendList = props => {
  const data = props.friends;
  //   console.log("LIST:", props);
  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <AddFriendForm addFriend={props.addFriend} />

      {props.clickedFriend.visible ? (
        <FriendProfile clickedFriend={props.clickedFriend} />
      ) : (
        <p>Click 'Show Details' for more Info...</p>
      )}

      {data.map(friend => (
        <FriendsCard
          key={friend.id}
          data={friend}
          loadProfile={props.loadProfile}
          clickedFriend={props.clickedFriend}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
