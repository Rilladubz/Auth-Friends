import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = props => {
  const [friend, setFriend] = useState({
    id: Date.now()
  });

  const handleChange = e => {
    console.log(e.target.value);
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(friend);
  };

  console.log("ADD:", friend);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>ADD A FRIEND</h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
