import React, { Component } from "react";
import "./ProductInfo.css";
import Main from "./main/Main";
import Reviews from "./reviews/Reviews";
import AlsoLike from "./alsoLike/AlsoLike";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="productInfo">
        <div className="productInfo_location">
          Ladies / Dresses / Collete Stretch Linen Minidress
        </div>
        <Main />
        <Reviews />
        <AlsoLike />
      </div>
    );
  }
}

export default ProductInfo;
