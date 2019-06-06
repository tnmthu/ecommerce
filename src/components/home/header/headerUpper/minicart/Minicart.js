import React, { Component } from "react";
import MinicartItem from "./minicartItem/MinicartItem";
import "./Minicart.css";
import { Link } from "react-router-dom";
import { UserContext } from "../.././../../../context/UserProvider";

class Minicart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="out">
        <UserContext.Consumer>
          {state =>
            this.props.cartQuantity > 0 ? (
              <div className="minicart">
                {this.props.cart.map((item, index) => (
                  <MinicartItem
                    key={index}
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
            ) : state.isLogin ? (
              <Link
                to="/cart"
                className="viewcart absolute-right link-no-decor"
              >
                View cart
              </Link>
            ) : (
              <div className="viewcart absolute-right">
                Please log in to add item to cart!
              </div>
            )
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Minicart;
