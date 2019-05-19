import React, { Component } from "react";
import "./Profile.css";
import Side from "./side/Side";
import Content from "./content/Content";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile">
        <Side />
        <Content />
      </div>
    );
  }
}

export default Profile;
