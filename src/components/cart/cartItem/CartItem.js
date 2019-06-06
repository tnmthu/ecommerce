import React, { Component } from "react";
import img from "../../../images/clothes.png";
import "./CartItem.css";
import Quantity from "../Content/Quantity";
import UserProvider, { UserContext } from "../../../context/UserProvider";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: this.props.item.quantity };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(amount) {
    const { item, changeItemQuantity } = this.props;

    this.setState(
      { quantity: this.state.quantity + amount }
      //   , () => {
      //    changeItemQuantity(this.state.quantity, item._id);
      // }
    );
  }

  handleClick(event, deleteItemFromCart) {
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
    deleteItemFromCart(this.props.keyCartItem);
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
              <UserContext.Consumer>
                {({ deleteItemFromCart }) => {
                  return (
                    <button
                      type="button"
                      className="cart_item_product_txt_bot_btn"
                      onClick={event =>
                        this.handleClick(event, deleteItemFromCart)
                      }
                    >
                      Remove
                    </button>
                  );
                }}
              </UserContext.Consumer>
            </div>
          </div>
        </div>
        <div
          className="cart_item_color"
          style={{ backgroundColor: item.color }}
        />
        <p className="cart_item_size">{item.size}</p>
        <Quantity
          quantity={this.state.quantity}
          changeQuantity={this.changeQuantity}
          keyCartItem={this.props.keyCartItem}
        />
        <UserContext.Consumer>
          {({ cart }) => (
            <div className="cart_item_amount">
              $
              {cart[this.props.keyCartItem].quantity *
                cart[this.props.keyCartItem].price}
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default CartItem;
