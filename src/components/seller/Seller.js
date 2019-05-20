import React, { Component } from "react";
import SellerLogin from "./seller_login/SellerLogin";
import "./Seller.css";

class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="seller">
        <SellerLogin />
      </div>
    );
  }
}

export default Seller;
