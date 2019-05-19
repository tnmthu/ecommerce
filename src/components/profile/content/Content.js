import React, { Component } from "react";
import Header from "./Header/Header";
import Inside from "./inside/Inside";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile_content">
        <Header />
        <Inside />
      </div>
    );
  }
}

export default Content;
