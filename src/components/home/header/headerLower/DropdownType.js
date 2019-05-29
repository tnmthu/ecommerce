import React, { Component } from "react";
import { Link } from "react-router-dom";

class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link
        className="header__lower__selection__item__dropdown__type link-no-decor"
        to={
          "/" +
          this.props.type.toLowerCase() +
          "/" +
          this.props.item.toLowerCase()
        }
      >
        {this.props.item}
      </Link>
    );
  }
}

export default DropdownItem;
