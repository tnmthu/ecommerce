import React, { Component } from "react";
import Button from "./Button";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cart_body_product">
        <div className="cart_body_product_img" />
        <div className="cart_body_product_txt">
          <div className="cart_body_product_txt_top">
            Collete Stretch Linen Minidress
          </div>
          <div className="cart_body_product_txt_bot">
            <Button type="Change" />
            <p className="cart_body_product_txt_bot_dash">|</p>
            <Button type="Remove" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
