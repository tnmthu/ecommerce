import React, { Component } from "react";
import img from "../../../images/item.jpg";
import "./CartItem.css";
import Quantity from "../Content/Quantity";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: this.props.item.quantity };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(amount) {
    const { item, changeItemQuantity } = this.props;

    this.setState({ quantity: this.state.quantity + amount }, () => {
      changeItemQuantity(this.state.quantity, item._id);
    });
  }

  handleClick(event) {
    // const apiUrl = "http://localhost:3005/cart/";
    // const payload = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    // axios({
    //   method: "post",
    //   url: apiUrl + "removeItem",
    //   data: payload
    // }).then(response => {});
  }

  render() {
    const { item } = this.props;
    return (
      <div className="cart_item">
        <div className="cart_item_product">
          <img className="cart_item_product_image" src={img} alt="product" />
          <div className="cart_item_product_txt">
            <div className="cart_item_product_txt_top">{item.name}</div>
            <div className="cart_item_product_txt_bot">
              <button type="button" className="cart_item_product_txt_bot_btn">
                Change
              </button>
              <div className="cart_item_product_txt_bot_dash">|</div>
              <button
                type="button"
                className="cart_item_product_txt_bot_btn"
                onClick={event => this.handleClick(event)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="cart_item_color"
          sytle={{ backgroundColor: item.color }}
        />
        <p className="cart_item_size">{item.size}</p>
        <Quantity
          quantity={this.state.quantity}
          changeQuantity={this.changeQuantity}
        />
        <div className="cart_item_amount">
          ${item.price * this.state.quantity}
        </div>
      </div>
    );
  }
}

export default CartItem;
