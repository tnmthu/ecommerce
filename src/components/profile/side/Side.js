import React, { Component } from "react";

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile_side">
        <div className="profile_side_header">My account</div>
        <div className="profile_side_choice">
          <div className="profile_side_choice_btn">Account setting</div>
          <div className="profile_side_choice_btn">Change password</div>
        </div>
      </div>
    );
  }
}

export default Side;
