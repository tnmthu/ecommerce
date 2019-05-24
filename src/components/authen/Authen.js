import React, { Component } from "react";
import Login from "./login/Login";
import "./Authen.css";

class Authen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="authen">
        <Login />
      </div>
    );
  }
}

export default Authen;
