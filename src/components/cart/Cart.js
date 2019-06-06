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
      cart: [],
      didCheckout: false
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
      const user_cart = JSON.parse(localStorage.getItem(userId));
      if (user_cart !== null) {
        // console.log(user_cart.cartItem);
        let totalPrice = this.getTotal(user_cart.cartItem);
        this.setState(
          {
            cart: user_cart.cartItem,
            totalprice: totalPrice
          },
          () => {
            // console.log("here", Array.isArray(this.state.cart));
          }
        );
      }
    }
  }

  getTotal(cart) {
    // console.log(cart);
    return cart.reduce((x, y) => {
      // console.log(x, y);
      return x + y.price * y.quantity;
    }, 0);
  }

  changeItemQuantity(quantity, itemId) {
    // console.log(this.state.cart);
    const cartArr = this.state.cart.map(item => {
      if (item._id === itemId) {
        return {
          ...item,
          quantity
        };
      }
      return item;
    });
    const total = this.getTotal(cartArr);
    // console.log("cartArr", cartArr);
    this.setState(
      {
        totalprice: total,
        cart: cartArr
      },
      () => {
        // console.log("cart state", this.state);
      }
    );
  }

  handleClick(event, dispatchCart) {
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
      this.setState({ didCheckout: true });
      // console.log(response);
      const userId = jwt.decode(localStorage.getItem("user_token")).userId;
      // console.log("userId", userId);
      // for (let i = 0; i < localStorage.length; i++) {
      //   if (userId === localStorage.key(i)) {
      //     localStorage.removeItem(localStorage.key(i));
      //   }
      // }
      dispatchCart(userId, this.state.didCheckout);
    });
  }

  render() {
    // console.log(this.state.cart);
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
            {!this.state.didCheckout &&
            // this.state.cart &&
            this.state.cart.length > 0 ? (
              this.state.cart.map((item, index) => (
                <CartItem
                  item={item}
                  key={index}
                  changeItemQuantity={this.changeItemQuantity}
                />
              ))
            ) : (
              <p>Empty cart! Go shopping! </p>
            )}
          </div>
          {!this.state.didCheckout ? (
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
                  <div>Subtotal</div>
                  <div>${this.state.totalprice}</div>
                </div>
              </div>
              <UserContext.Consumer>
                {state => {
                  return (
                    <button
                      type="button"
                      className="cart_body_total_checkoutBtn"
                      onClick={event =>
                        this.handleClick(event, state.dispatchCart)
                      }
                    >
                      Checkout
                    </button>
                  );
                }}
              </UserContext.Consumer>
            </div>
          ) : (
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
                    <p>$0</p>
                  </div>
                </div>
                <div className="border_bot" />
                <div className="cart_body_total_info_bot">
                  <p>Subtotal</p>
                  <p>$0</p>
                </div>
              </div>
              <UserContext.Consumer>
                {state => (
                  <button
                    type="button"
                    className="cart_body_total_checkoutBtn"
                    onClick={event =>
                      this.handleClick(event, state.dispatchCart)
                    }
                    disabled
                  >
                    Checkout
                  </button>
                )}
              </UserContext.Consumer>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
