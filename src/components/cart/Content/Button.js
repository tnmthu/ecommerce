import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button type="button" className="cart_body_product_txt_bot_btn">
        {this.props.type}
      </button>
    );
  }
}

export default Button;
