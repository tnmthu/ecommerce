import React, { Component } from "react";
import { Link } from "react-router-dom";

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile_side">
        <Link to="/profile" className="profile_side_header link-no-decor">
          My account
        </Link>
        <div className="profile_side_choice">
          <Link
            to="/profile/accsetting"
            className="profile_side_choice_btn link-no-decor"
          >
            Account setting
          </Link>
          <Link
            to="/profile/changepw"
            className="profile_side_choice_btn link-no-decor"
          >
            Change password
          </Link>
        </div>
      </div>
    );
  }
}

export default Side;
