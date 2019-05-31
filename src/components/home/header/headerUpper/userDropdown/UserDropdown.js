import React, { Component } from "react";
// import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../context/UserProvider";

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event, logoutUser) {
    logoutUser();
  }

  render() {
    return (
      <div className="user_drop">
        <Link to="/profile" className="user_drop_accset item link-no-decor">
          Account setting
        </Link>
        <UserContext.Consumer>
          {state => (
            <div
              className="user_drop_logout item link-no-decor"
              onClick={event => this.handleClick(event, state.logoutUser)}
            >
              Log out
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserDropdown;
