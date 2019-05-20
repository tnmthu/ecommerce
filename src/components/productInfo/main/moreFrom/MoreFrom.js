import React, { Component } from "react";

class MoreFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="more">
        <div className="more_header">
          More from
          <div className="more_brand">Zara</div>
        </div>

        <div className="more_imgs">
          <div className="more_imgs_imgs" />
          <div className="more_imgs_imgs" />
          <div className="more_imgs_imgs" />
          <div className="more_imgs_imgs" />
        </div>
      </div>
    );
  }
}

export default MoreFrom;
