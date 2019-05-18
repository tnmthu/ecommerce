import React, { Component } from "react";
import "./Cart.css";
import "./Product/Product";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cart">
        <div className="cart_body">
          <div className="cart_body_myBag">My Bag</div>
          <div className="cart_body_content">
            <div className="cart_body_content_product">
              <div className="cart_body_content_product_header">
                <p>Product</p>
                <p>Color</p>
                <p>Size</p>
                <p>Quantity</p>
                <p>Amount</p>
              </div>
              <div className="cart_body_content_product_list" />
            </div>
            <div className="cart_body_content_total">
              <div className="cart_body_content_total_header">
                <p>Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
