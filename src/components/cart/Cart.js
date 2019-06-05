import React, { Component } from "react";
import "./Cart.css";
import CartItem from "./cartItem/CartItem";
import { UserContext } from "../../context/UserProvider";
import jwt from "jsonwebtoken";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      totalprice: 0,
      cart: {}
    };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.changeItemQuantity = this.changeItemQuantity.bind(this);
  }

  changeQuantity(amount) {
    this.setState({ quantity: this.state.quantity + amount });
  }

  componentDidMount() {
    if (localStorage.getItem("user_token") !== null) {
      const userId = jwt.decode(localStorage.getItem("user_token")).userId;
      for (let i = 0; i < localStorage.length; i++) {
        if (userId === localStorage.key(i)) {
          const user_cart = JSON.parse(
            localStorage.getItem(localStorage.key(i))
          );
          let totalPrice = this.getTotal(user_cart.cartItem);
          console.log(user_cart, totalPrice);
          this.setState(
            {
              cart: user_cart,
              totalprice: totalPrice
            },
            () => {
              console.log(this.state);
            }
          );
        }
      }
    }
  }

  getTotal(cart) {
    return cart.reduce((x, y) => {
      return x + y.price * y.quantity;
    }, 0);
  }

  changeItemQuantity(quantity, itemId) {
    // console.log(quantity);
    const cartArr = this.state.cart.cartItem.map(item => {
      // console.log(itemId, item._id);
      if (item._id === itemId) {
        return {
          ...item,
          quantity
        };
      }
      return item;
    });
    // console.log(cartArr);
    const total = this.getTotal(cartArr);
    this.setState(
      {
        totalprice: total,
        "cart.cartItem": cartArr
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  handleClick(event) {
    const apiUrl = "http://localhost:3005/order/";
    const payload = {
      userMail: jwt.decode(localStorage.getItem("user_token")).email,
      totalPrice: this.state.totalprice
    };
    axios({
      method: "post",
      url: apiUrl,
      data: payload
    }).then(response => {
      alert("Your order have been placed!");
      console.log(response);
    });
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
            <UserContext.Consumer>
              {state => {
                return state.cartQuantity > 0 ? (
                  <div>
                    {state.cart.cartItem.map((item, index) => (
                      <CartItem
                        item={item}
                        key={index}
                        changeItemQuantity={this.changeItemQuantity}
                      />
                    ))}
                  </div>
                ) : (
                  <h5>Empty cart!</h5>
                );
              }}
            </UserContext.Consumer>
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
                  <p>${this.state.totalprice}</p>
                </div>
              </div>
              <div className="border_bot" />
              <div className="cart_body_total_info_bot">
                <p>Subtotal</p>
                <p>${this.state.totalprice}</p>
              </div>
            </div>
            <button
              type="button"
              className="cart_body_total_checkoutBtn"
              onClick={event => this.handleClick(event)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
