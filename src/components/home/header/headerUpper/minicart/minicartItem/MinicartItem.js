import React, { Component } from "react";
import "./MinicartItem.css";

class MinicartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item">
        <div className="item_container">
          <div className="item_img" />
          <div className="item_info">
            <div className="item_info_top">{this.props.name}</div>
            <div className="item_info_bot">
              <div className="item_info_bot_left">${this.props.price}</div>
              <div className="item_info_bot_right">
                {this.props.size}-{this.props.color}-{this.props.quantity} pcs
              </div>
            </div>
          </div>
        </div>
        <div className="item_botline" />
      </div>
    );
  }
}

export default MinicartItem;
