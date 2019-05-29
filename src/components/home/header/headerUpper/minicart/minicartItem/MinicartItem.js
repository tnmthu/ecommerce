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
            <div className="item_info_top">
              New Balance Men's Street Backpack
            </div>
            <div className="item_info_bot">
              <div className="item_info_bot_left">$485</div>
              <div className="item_info_bot_right">S-Black-1 pcs</div>
            </div>
          </div>
        </div>
        <div className="item_botline" />
      </div>
    );
  }
}

export default MinicartItem;
