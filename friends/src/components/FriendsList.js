import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <input />
          <button></button>
        </form>
      </div>
    );
  }
}

export default FriendList;
