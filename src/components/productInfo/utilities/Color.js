import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="color" style={{ backgroundColor: this.props.color }} />
    );
  }
}

export default Color;
