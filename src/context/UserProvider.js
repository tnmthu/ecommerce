import React from "react";
import { withRouter } from "react-router-dom";
const jwt = require("jsonwebtoken");

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
      userId: "",
      userEmail: "",
      hasToken: false,
      cart: {},
      cartQuantity: 0,
      dispatchUser: token => {
        const decoded = jwt.decode(token);
        // console.log(decoded);
        this.setState({
          isLogin: true,
          userId: decoded.userId,
          userName: decoded.firstName + " " + decoded.lastName,
          userId: decoded.userId,
          userEmail: decoded.email,
          cart: decoded.cart
        });
        for (let i = 0; i < localStorage.length; i++) {
          if (this.state.userId === localStorage.key(i)) {
            const user_cart = JSON.parse(
              localStorage.getItem(localStorage.key(i))
            );
            this.setState({
              cart: user_cart,
              cartQuantity: user_cart.cartItem.length
            });
          } else {
            this.setState({
              cart: decoded.cart,
              cartQuantity: decoded.cart.cartItem.length
            });
          }
        }
        console.log("state", this.state);
      },
      logoutUser: () => {
        this.setState({
          isLogin: false,
          cart: {},
          cartQuantity: 0
        });
        localStorage.removeItem("user_token");
        this.props.history.push("/");
      },
      dispatchCart: userId => {
        const cartToken = JSON.parse(localStorage.getItem(userId));
        this.setState({
          cart: cartToken,
          cartQuantity: cartToken.cartItem.length
        });
        // console.log(cartToken);
      }
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_token") !== null) {
      const decoded = jwt.decode(localStorage.getItem("user_token"));
      // console.log("decoded", decoded);
      this.setState({
        isLogin: true,
        userId: decoded.userId,
        userName: decoded.firstName + " " + decoded.lastName,
        userEmail: decoded.email,
        cart: decoded.cart,
        cartQuantity: decoded.cart.cartItem.length
      });
      // console.log(this.state);
      for (let i = 0; i < localStorage.length; i++) {
        if (this.state.userId === localStorage.key(i)) {
          const user_cart = JSON.parse(
            localStorage.getItem(localStorage.key(i))
          );
          this.setState({
            cart: user_cart,
            cartQuantity: user_cart.cartItem.length
          });
        } else {
          this.setState({
            cart: decoded.cart,
            cartQuantity: decoded.cart.cartItem.length
          });
        }
      }
    }
    console.log(this.state.cart);
    // if (this.state.cart.cartItem.length !== 0) {
    //   console.log("here");
    // const cartToken = JSON.parse(localStorage.getItem("user_cart"));
    // this.setState({
    //   cart: cartToken,
    //   cartQuantity: cartToken.cartItem.length
    // });
    // }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withRouter(UserProvider);
