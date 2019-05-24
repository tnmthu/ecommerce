import React, { Component } from "react";
import DropdownType from "./DropdownType";
import onClickOutside from "react-onclickoutside";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.type = this.props.type;
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  handleClickOutside = evt => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div
        className="header__lower__selection__item"
        onClick={this.toggleShow.bind(this)}
      >
        <div className="header__lower__selection__item__name">
          {this.props.type}
        </div>
        <div className="header__lower__selection__item__arrow">
          {this.state.show && (
            <div className="header__lower__selection__item__dropdown">
              {this.props.items.map(item => (
                <DropdownType type={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Item);
