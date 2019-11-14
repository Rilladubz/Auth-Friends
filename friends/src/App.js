import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import "./App.css";

// components
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import FriendProfile from "./components/FriendProfile";

class App extends React.Component {
  state = {
    friends: [],
    clickedFriend: {
      friendData: [],
      visible: false
    }
  };

  componentDidMount() {
    this.getData();
  }

  componentWillMount() {}

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({
          friends: data
        });
      })
      .catch(err => console.log(err));
  };

  loadProfile = id => {
    // console.log(id);
    axiosWithAuth()
      .get(`friends/${id}`)
      .then(res => {
        const data = res.data;
        this.setState({
          clickedFriend: {
            friendData: data,
            visible: true
          }
        });
      })
      .catch(err => console.log(err));
  };

  addFriend = friend => {
    axiosWithAuth()
      .post("friends", friend)
      .then(res => {
        // const data = res.data;
        this.setState({
          ...this.state,
          friends: [...this.state.friends, friend],
          ...this.state.clickedFriend,
          friendData: [],
          visible: false
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axiosWithAuth()
      .delete(`friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    console.log("APP STATE", this.state.friends, this.state.clickedFriend);

    // if(this.state.friend ? ){
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute
              path="/protected"
              component={() => (
                <FriendsList
                  friends={this.state.friends}
                  clickedFriend={this.state.clickedFriend}
                  loadProfile={this.loadProfile}
                  addFriend={this.addFriend}
                  deleteFriend={this.deleteFriend}
                />
              )}
            />
            <Route exact path="/login" component={Login} />
            <Route
              path={`/user/${this.state.clickedFriend.id}`}
              component={FriendProfile}
            />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
// }

export default App;
