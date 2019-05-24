import React, { Component } from "react";
import Input from "../../profile/content/Input";
// import Button from "../../profile/content/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <div className="login_header">Log In</div>
        <div className="login_inside">
          <Input header="E-MAIL" placeholder="Enter your e-mail" type="email" />
          <Input
            header="PASSWORD"
            placeholder="Enter your password"
            type="password"
          />
          <button className="login_inside_btn" type="button">
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
