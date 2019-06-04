import React, { Component } from "react";
import img from "../../../images/item.jpg";
import "./CartItem.css";
import Quantity from "../Content/Quantity";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: this.props.quantity };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(amount) {
    this.setState({ quantity: this.state.quantity + amount });
  }

  render() {
    return (
      <div className="cart_item">
        <div className="cart_item_product">
          <img className="cart_item_product_image" src={img} alt="product" />
          <div className="cart_item_product_txt">
            <div className="cart_item_product_txt_top">{this.props.name}</div>
            <div className="cart_item_product_txt_bot">
              <button type="button" className="cart_item_product_txt_bot_btn">
                Change
              </button>
              <p className="cart_item_product_txt_bot_dash">|</p>
              <button type="button" className="cart_item_product_txt_bot_btn">
                Remove
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="cart_item_color"
          sytle={{ backgroundColor: this.props.color }}
        />
        <p className="cart_item_size">{this.props.size}</p>
        <Quantity
          quantity={this.state.quantity}
          changeQuantity={this.changeQuantity}
        />
        <div className="cart_item_amount">
          ${this.props.price * this.state.quantity}
        </div>
      </div>
    );
  }
}

export default CartItem;
