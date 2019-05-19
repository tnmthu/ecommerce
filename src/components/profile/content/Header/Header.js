import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile_content_header">
        <p id="info">Information</p>
        <p id="edit">Edit</p>
      </div>
    );
  }
}

export default Header;
