import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button type="button" className="button">
        {this.props.txt}
      </button>
    );
  }
}

export default Button;
