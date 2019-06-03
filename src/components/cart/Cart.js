import React, { Component } from "react";
import "./Cart.css";
import CartItem from "./cartItem/CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(amount) {
    this.setState({ quantity: this.state.quantity + amount });
  }

  render() {
    return (
      <div className="cart">
        <div className="cart_myBag">My Bag</div>
        <div className="cart_container">
          <div className="cart_body_left">
            <div className="cart_body_items">
              <p className="cart_body_items_header border_bot text_align_left">
                Product
              </p>
              <p className="cart_body_items_header border_bot">Color</p>
              <p className="cart_body_items_header border_bot">Size</p>
              <p className="cart_body_items_header border_bot">Quantity</p>
              <p className="cart_body_items_header border_bot text_align_right">
                Amount
              </p>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="cart_body_total">
            <p className="cart_body_total_header">Total</p>
            <div className="cart_body_total_info">
              <div className="cart_body_total_info_top">
                <div className="cart_body_total_info_top_right">
                  <p>{"Shipping & Handling"}</p>
                  <p>Total product</p>
                </div>
                <div className="cart_body_total_info_top_left">
                  <p>Free</p>
                  <p>$6.969</p>
                </div>
              </div>
              <div className="border_bot" />
              <div className="cart_body_total_info_bot">
                <p>Subtotal</p>
                <p>$6.969</p>
              </div>
            </div>
            <button type="button" className="cart_body_total_checkoutBtn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
