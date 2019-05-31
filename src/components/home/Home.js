import React, { Component } from "react";
import Body from "./body/Body";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Body />
      </div>
    );
  }
}

export default Home;
