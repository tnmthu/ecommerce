import React, { Component } from "react";

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  decrementQuantity() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  render() {
    return (
      <div className="cart_body_quantity">
        <button
          type="button"
          className="cart_body_quantity_minus"
          disabled={this.state.quantity === 1}
          onClick={this.decrementQuantity.bind(this)}
        >
          -
        </button>
        <div className="cart_body_quantity_num">{this.state.quantity}</div>
        <button
          type="button"
          className="cart_body_quantity_plus"
          onClick={this.incrementQuantity.bind(this)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Quantity;
