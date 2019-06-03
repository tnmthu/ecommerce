import React, { Component } from "react";
import img from "../../../images/item.jpg";
import "./CartItem.css";
import Quantity from "../Content/Quantity";

class CartItem extends Component {
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
      <div className="cart_item">
        <div className="cart_item_product">
          <img className="cart_item_product_image" src={img} alt="product" />
          <div className="cart_item_product_txt">
            <div className="cart_item_product_txt_top">
              Collete Stretch Linen Minidress
            </div>
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
        <button type="button" className="cart_item_color" />
        <p className="cart_item_size">S</p>
        <Quantity
          quantity={this.state.quantity}
          changeQuantity={this.changeQuantity}
        />
        <div className="cart_item_amount">$69.69</div>
      </div>
    );
  }
}

export default CartItem;
