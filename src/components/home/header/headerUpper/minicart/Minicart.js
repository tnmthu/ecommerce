import React, { Component } from "react";
import MinicartItem from "./minicartItem/MinicartItem";
import "./Minicart.css";
import { Link } from "react-router-dom";
// import { UserContext } from "../.././../../../context/UserProvider";

class Minicart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="out">
        {this.props.cartQuantity > 0 ? (
          <div className="minicart">
            {this.props.cart.cartItem.map(item => (
              <MinicartItem
                name={item.name}
                price={item.price}
                size={item.size}
                color={item.color}
                quantity={item.quantity}
              />
            ))}
            <Link to="/cart" className="viewcart link-no-decor">
              View cart
            </Link>
          </div>
        ) : (
          <div className="viewcart with-translate">
            Please log in to add items to cart!
          </div>
        )}
      </div>
    );
  }
}

export default Minicart;
