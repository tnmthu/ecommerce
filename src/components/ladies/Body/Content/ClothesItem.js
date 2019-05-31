import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClothesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, price, _id } = this.props.item;
    return (
      <div className="ladies__body__content__shop__clothesItem">
        <div className="ladies__body__content__shop__clothesItem__img" />
        <Link to={`/product/${_id}`}>
          <div className="ladies__body__content__shop__clothesItem__descr">
            {name}
            <div className="ladies__body__content__shop__clothesItem__descr__price">
              {price}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ClothesItem;
