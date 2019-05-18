import React, { Component } from "react";
import "./Cart.css";
import Product from "./Content/Product";
import Color from "./Content/Color";
import Quantity from "./Content/Quantity";
import Amount from "./Content/Amount";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cart">
        <div className="cart_myBag">My Bag</div>
        <div className="cart_body">
          <p className="cart_body_header border_bot text_align_left">Product</p>
          <p className="cart_body_header border_bot">Color</p>
          <p className="cart_body_header border_bot">Size</p>
          <p className="cart_body_header border_bot">Quantity</p>
          <p className="cart_body_header border_bot text_align_right">Amount</p>
          <p className="cart_body_header"> </p>
          <p className="cart_body_header text_align_left">Total</p>
          <Product />
          <Color />
          <p className="cart_body_size">S</p>
          <Quantity />
          <Amount />
        </div>
      </div>
    );
  }
}

export default Cart;
