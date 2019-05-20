import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product">
        <div className="product_img" />
        <div className="product_title">Collete Stretch Linen Minidress</div>
      </div>
    );
  }
}

export default Product;
