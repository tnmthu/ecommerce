import React, { Component } from "react";
import "./Ladies.css";
import Body from "./Body/Body";
// import axios from "axios";
class Ladies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:3000/",
  //     data: {
  //       name: "123"
  //     }
  //   }).then(result => {
  //     console.log(result);
  //   });
  // }
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
