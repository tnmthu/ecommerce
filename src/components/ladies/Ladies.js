import React, { Component } from "react";
import "./Ladies.css";
import Body from "./Body/Body";

class Ladies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ladies">
        <div className="ladies__location">Ladies / Dresses</div>
        <Body />
      </div>
    );
  }
}

export default Ladies;
