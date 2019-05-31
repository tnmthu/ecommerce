import React, { Component } from "react";
import ClothesItem from "./ClothesItem";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ladies__body__content">
        <div className="ladies__body__content__header">
          <div className="left">Sort by</div>
          <div className="right">1/100</div>
        </div>
        <div className="ladies__body__content__shop">
          {this.props.list &&
            this.props.list.map((item, index) => {
              return <ClothesItem item={item} key={index} />;
            })}
        </div>
        <div className="ladies__body__content__footer">1/100</div>
      </div>
    );
  }
}

export default Content;
