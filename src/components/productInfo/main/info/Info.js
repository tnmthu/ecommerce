import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import SizeSelection from "../../utilities/SizeSelection";
import Quantity from "../../../cart/Content/Quantity";
import axios from "axios";
import jwt from "jsonwebtoken";
import { UserContext } from "../../../../context/UserProvider";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "S",
      color: "",
      quantity: 1
    };
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(amount) {
    this.setState({ quantity: this.state.quantity + amount });
  }

  handleChangeSize(size) {
    this.setState({ size: size });
  }

  handleChangeColor(color) {
    this.setState({ color: color });
  }

  handleClick(event, dispatchCart) {
    if (localStorage.getItem("user_token") !== null) {
      const apiUrl = "http://localhost:3005/cart";
      const payload = {
        size: this.state.size,
        color: this.state.color,
        quantity: this.state.quantity,
        name: this.props.data.name,
        userId: jwt.decode(localStorage.getItem("user_token")).userId,
        item: this.props.data._id,
        price: this.props.data.price
      };
      axios({
        method: "post",
        url: apiUrl,
        data: payload
      }).then(response => {
        // console.log("here", response.data.cart);
        localStorage.setItem(
          payload.userId,
          JSON.stringify(response.data.cart)
        );
        dispatchCart(payload.userId);
      });
    } else {
      alert("Please log in first!");
    }
  }

  render() {
    return (
      <div className="info">
        <div className="info_name">{this.props.data.name}</div>
        <div className="info_price">{`$ ${this.props.data.price}`}</div>
        <div className="info_rate">
          <div className="info_rate_star">
            <StarRatings
              rating={this.props.data.rating}
              starRatedColor={"rgb(255, 223, 95)"}
              starDimension={"15px"}
              starSpacing={"1px"}
            />
          </div>
          <div className="info_rate_reviewNum">
            | {this.props.data.reviews && this.props.data.reviews.length}{" "}
            reviews
          </div>
        </div>
        <div className="info_size">
          <div className="info_size_header">Size</div>
          <div className="info_size_selection">
            <SizeSelection
              available={this.props.data.available}
              size={this.state.size}
              handleChangeSize={this.handleChangeSize}
            />
          </div>
        </div>
        <div className="info_color">
          <div className="info_color_header">Color</div>
          <div className="info_color_colors">
            <div
              className="color"
              style={{ backgroundColor: "#aaa" }}
              onClick={() => this.handleChangeColor("#aaa")}
            />
            <div
              className="color"
              style={{ backgroundColor: "#ff5f6d" }}
              onClick={() => this.handleChangeColor("#ff5f6d")}
            />
          </div>
        </div>
        <div className="info_quantity">
          <div className="info_quantity_header">Quantity</div>
          <div className="info_quantity_box">
            <Quantity
              quantity={this.state.quantity}
              changeQuantity={this.changeQuantity}
            />
          </div>
        </div>
        <div className="info_add">
          <UserContext.Consumer>
            {state => (
              <button
                type="submit"
                className="info_add_btn"
                onClick={event => this.handleClick(event, state.dispatchCart)}
              >
                Add to cart
              </button>
            )}
          </UserContext.Consumer>
        </div>
        <div className="info_line" />
        <div className="info_model">
          <div className="info_model_header">Model wearing size S</div>
          <div className="info_model_info">- Chest: 36"</div>
          <div className="info_model_info">- Length: 25.75"</div>
        </div>
      </div>
    );
  }
}

export default Info;
