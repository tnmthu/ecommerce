import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import SizeSelection from "../../utilities/SizeSelection";
import Color from "../../utilities/Color";
import Quantity from "../../../cart/Content/Quantity";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="info">
        <div className="info_name">Collete Stretch Linen Minidress</div>
        <div className="info_price">$69.00</div>
        <div className="info_rate">
          <div className="info_rate_star">
            <StarRatings
              rating={3.7}
              starRatedColor={"rgb(255, 223, 95)"}
              starDimension={"15px"}
              starSpacing={"1px"}
            />
          </div>
          <div className="info_rate_reviewNum">| 0 reviews</div>
        </div>
        <div className="info_size">
          <div className="info_size_header">Size</div>
          <div className="info_size_selection">
            <SizeSelection />
          </div>
        </div>
        <div className="info_color">
          <div className="info_color_header">Color</div>
          <div className="info_color_colors">
            <Color color="#ff5f6d" />
            <Color color="#ff5f6d" />
            <Color color="#ff5f6d" />
          </div>
        </div>
        <div className="info_quantity">
          <div className="info_quantity_header">Quantity</div>
          <div className="info_quantity_box">
            <Quantity />
          </div>
        </div>
        <div className="info_add">
          <button type="button" className="info_add_btn">
            Add to cart
          </button>
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
