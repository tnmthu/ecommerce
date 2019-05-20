import React, { Component } from "react";
import User from "./user/User";
import Comment from "./comment/Comment";

class SingleReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="singleReview">
        <User />
        <Comment />
      </div>
    );
  }
}

export default SingleReview;
