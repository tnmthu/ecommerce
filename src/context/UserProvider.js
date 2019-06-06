import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";

export const UserContext = React.createContext();
function getTotal(cart) {
  // console.log(cart);
  return cart.reduce((x, y) => {
    // console.log(x, y);
    return x + y.price * y.quantity;
  }, 0);
}

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
      userId: "",
      userEmail: "",
      hasToken: false,
      cart: [],
      total: 0,
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
              cart: user_cart.cartItem,
              cartQuantity: user_cart.cartItem.length,
              total: getTotal(decoded.cart.cartItem)
            });
          } else {
            this.setState({
              cart: decoded.cart.cartItem,
              cartQuantity: decoded.cart.cartItem.length,
              total: getTotal(decoded.cart.cartItem)
            });
          }
        }

        // console.log("state", this.state);
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
      addToCart: cart => {
        console.log(cart);
        const apiUrl = "http://localhost:3005/cart";
        axios({
          method: "post",
          url: apiUrl,
          data: cart
        }).then(response => {
          // console.log("here", response.data.cart);
          // localStorage.setItem(
          //   payload.userId,
          //   JSON.stringify(response.data.cart)
          // );
          console.log(response);
          this.setState(state => {
            console.log("$");
            state.cart = response.data.cart;
            state.cartQuantity += 1;
            state.total = getTotal(response.data.cart || []);
            const newState = state;
            return newState;
          });
        });
      },
      dispatchCart: (userId, didCheckout) => {
        const user = jwt.decode(localStorage.getItem("user_token"));
        if (didCheckout === true) {
          // const cartToken = JSON.parse(localStorage.getItem(userId));
          localStorage.removeItem(userId);

          // console.log("user token", user);
          this.setState({
            cart: {},
            cartQuantity: 0,
            total: 0
          });
          // console.log("sau setstate", this.state.cart);
          // console.log("cart quan", this.state.cartQuantity);
          axios({
            method: "patch",
            url: `http://localhost:3005/user/${user.userId}`,
            data: {
              cart: {
                cartItem: []
              }
            }
          })
            .then(response => {
              console.log(response);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          // const cartToken = JSON.parse(localStorage.getItem(userId));
          // console.log("else", cartToken);
          axios({
            method: "get",
            url: `http://localhost:3005/cart`
          })
            .then(response => {
              this.setState({
                cart: response.data.cart.cartItem,
                cartQuantity: response.data.cart.cartItem.length,
                total: getTotal(response.data.cart.cartItem)
              });
            })
            .catch(err => {
              console.error();
            });
          // console.log("duma", this.state.cart);
        }
      },
      changeQuantityItem: (delta, itemId) => {
        // localStorage.removeItem(userId);
        const userId = jwt.decode(localStorage.getItem("user_token")).userId;
        this.setState(
          state => {
            state.cart[itemId].quantity += delta;
            state.total = getTotal(state.cart || []);
            const newState = state;
            return newState;
          },
          () => {
            axios({
              method: "patch",
              url: `http://localhost:3005/user/${userId}`,
              data: {
                cart: {
                  cartItem: this.state.cart
                }
              }
            })
              .then(response => {
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              });
          }
        );
      },
      deleteItemFromCart: index => {
        console.log("index", index);
        // localStorage.removeItem(userId);
        const userId = jwt.decode(localStorage.getItem("user_token")).userId;
        this.setState(
          state => {
            state.cart.splice(index, 1);
            state.cartQuantity -= 1;
            state.total = getTotal(state.cart);
            const newState = state;
            return newState;
          },
          () => {
            axios({
              method: "patch",
              url: `http://localhost:3005/user/${userId}`,
              data: {
                cart: {
                  cartItem: this.state.cart
                }
              }
            })
              .then(response => {})
              .catch(err => {
                console.log(err);
              });
            // this.setState(state => {
            //   const newState = state;
            //   return newState;
            // });
          }
        );
      }
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_token") !== null) {
      const decoded = jwt.decode(localStorage.getItem("user_token"));
      console.log("decoded", decoded);
      this.setState(
        {
          isLogin: true,
          userId: decoded.userId,
          userName: decoded.firstName + " " + decoded.lastName,
          userEmail: decoded.email,
          cart: decoded.cart.cartItem,
          cartQuantity: decoded.cart.cartItem.length,
          total: getTotal(decoded.cart.cartItem)
        },
        () => {
          axios({
            method: "get",
            url: `http://localhost:3005/user/${decoded.userId}`
          })
            .then(response => {
              // () => {
              //   for (let i = 0; i < localStorage.length; i++) {
              //     // console.log("asd", this.state.userId);
              //     if (this.state.userId === localStorage.key(i)) {
              //       const user_cart = JSON.parse(
              //         localStorage.getItem(localStorage.key(i))
              //       );
              //       // console.log("Usercart", user_cart);
              //       this.setState({
              //         cart: user_cart.cartItem,
              //         cartQuantity: user_cart.cartItem.length,
              //         total: getTotal(user_cart.cartItem)
              //       });
              //       break;
              //     } else {
              this.setState({
                cart: response.data.cart.cartItem,
                cartQuantity: response.data.cart.cartItem.length,
                total: getTotal(response.data.cart.cartItem)
              });
              //     }
              //   }
              // }
            })
            .catch(err => {
              console.log(err);
            });
        }
      );

      // console.log(this.state);
    }

    // console.log(this.state.cart);
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
