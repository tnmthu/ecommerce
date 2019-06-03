import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ladies__body__side__filter">
        <div className="ladies__body__side__filter__name">Filter</div>
        <div className="ladies__body__side__filter__item">Size</div>
        <div className="ladies__body__side__filter__item">Color</div>
        <div className="ladies__body__side__filter__item">Brand</div>
        <div className="ladies__body__side__filter__item">Price</div>
        <div className="ladies__body__side__filter__item">Available</div>
      </div>
    );
  }
}

export default Filter;
