import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="comment">
        <div className="comment_title">Lorem</div>
        <div className="comment_rate">
          <StarRatings
            rating={3.7}
            starRatedColor={"rgb(255, 223, 95)"}
            starDimension={"15px"}
            starSpacing={"1px"}
          />
        </div>

        <div className="comment_content">
          I love the vintage pattern of the black dress. I got a size 6 and it
          fits well without being too tight. I can't tell if it's "tru to size"
          because everything fits a bit differently from store to store and
          brand to brand. I'm 5'4" with a 34D chest and it hit about mid thigh,
          which I like. I also like the material and structured shape of the
          dress because it's easy to dress up or down.
        </div>
      </div>
    );
  }
}

export default Comment;
