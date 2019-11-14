import React from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Route, Redirect, Link } from "react-router-dom";

const FriendsCard = props => {
  const data = props.data;
  //   console.log("IN CARD:", data);

  return (
    <div className="cardContainer">
      <h3>{data.name}</h3>
      <button onClick={() => props.loadProfile(data.id)}>
        Show {data.name} Details
      </button>
      <button onClick={() => props.deleteFriend(data.id)} className="btn">
        Delete Friend
      </button>
    </div>
  );
};

export default FriendsCard;
