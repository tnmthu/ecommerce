import React, { Component } from "react";

class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="header__lower__selection__item__dropdown__type"
        type="button"
      >
        {this.props.type}
      </button>
    );
  }
}

export default DropdownItem;
