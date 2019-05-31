import React, { Component } from "react";

class Quantity extends Component {
  constructor(props) {
    super(props);
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
          disabled={this.props.quantity === 1}
          onClick={() => this.props.changeQuantity(-1)}
        >
          -
        </button>
        <div className="cart_body_quantity_num">{this.props.quantity}</div>
        <button
          type="button"
          className="cart_body_quantity_plus"
          onClick={() => this.props.changeQuantity(1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Quantity;
