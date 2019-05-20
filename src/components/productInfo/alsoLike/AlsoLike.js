import React, { Component } from "react";
import Product from "./Product";

class AlsoLike extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="alsolike">
        <div className="alsolike_header" />
        <div className="alsolike_imgs">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default AlsoLike;
