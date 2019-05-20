import React, { Component } from "react";
import SingleReview from "./singleReview/SingleReview";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="reviews">
        <div className="reviews_header" />
        <div className="review_content">
          <SingleReview />
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </div>
      </div>
    );
  }
}

export default Reviews;
