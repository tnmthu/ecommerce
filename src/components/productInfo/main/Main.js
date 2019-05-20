import React, { Component } from "react";
import Images from "./images/Images";
import Info from "./info/Info";
import MoreFrom from "./moreFrom/MoreFrom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="productInfo_main">
        <Images />
        <Info />
        <MoreFrom />
      </div>
    );
  }
}

export default Main;