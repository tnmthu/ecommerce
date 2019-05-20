import React, { Component } from "react";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="imgs">
        <div className="imgs_small">
          <div className="imgs_small_img" />
          <div className="imgs_small_img" />
          <div className="imgs_small_img" />
          <div className="imgs_small_img" />
        </div>
        <div className="imgs_large" />
      </div>
    );
  }
}

export default Images;
