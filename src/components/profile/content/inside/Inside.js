import React, { Component } from "react";

class Inside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile_content_inside">
        <div className="profile_content_inside_header">Name</div>
        <div className="profile_content_inside_content">Johnnie Kennedy</div>
        <div className="profile_content_inside_header">E-mail</div>
        <div className="profile_content_inside_content">
          johnniekennedy@gmail.com
        </div>
      </div>
    );
  }
}

export default Inside;
