import React, { Component } from "react";
import { UserContext } from "../../../context/UserProvider";

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
    this.changeQuantity.bind(this);
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  decrementQuantity() {
    this.setState({ quantity: this.state.quantity - 1 });
  }
  changeQuantity(delta, functioncall, cart) {
    console.log("ddd");
    this.setState({ quantity: this.state.quantity + delta });
    if (cart[this.props.keyCartItem] !== undefined) {
      functioncall(delta, this.props.keyCartItem);
    } else {
      this.props.changeQuantity(this.state.quantity);
    }
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ changeQuantityItem, cart }) => (
          <div className="cart_body_quantity">
            <button
              type="button"
              className="cart_body_quantity_minus"
              disabled={this.state.quantity === 1}
              onClick={() => this.changeQuantity(-1, changeQuantityItem)}
            >
              -
            </button>
            <div className="cart_body_quantity_num">
              {(cart[this.props.keyCartItem] &&
                cart[this.props.keyCartItem].quantity) ||
                this.state.quantity}
            </div>
            <button
              type="button"
              className="cart_body_quantity_plus"
              onClick={() => this.changeQuantity(1, changeQuantityItem, cart)}
            >
              +
            </button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Quantity;
