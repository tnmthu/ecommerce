import React, { Component } from "react";

class SizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="size">
        <button type="button" className="size_selection">
          S
        </button>
        <button type="button" className="size_selection">
          M
        </button>
        <button type="button" className="size_selection">
          L
        </button>
      </div>
    );
  }
}

export default SizeSelection;
