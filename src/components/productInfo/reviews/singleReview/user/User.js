import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="user">
        <div className="user_name">Osama Bin Laden</div>
        <div className="user_time">31 Jul</div>
      </div>
    );
  }
}

export default User;
