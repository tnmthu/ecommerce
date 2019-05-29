import React, { Component } from "react";
import MinicartItem from "./minicartItem/MinicartItem";
import "./Minicart.css";
import { Link } from "react-router-dom";

class Minicart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="out">
        <div className="minicart">
          <MinicartItem />
          <MinicartItem />
          <MinicartItem />
          <Link to="/cart" className="viewcart link-no-decor">
            View cart
          </Link>
        </div>
      </div>
    );
  }
}

export default Minicart;
