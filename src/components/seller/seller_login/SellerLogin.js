import React, { Component } from "react";
import Input from "../../profile/content/Input";

class SellerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="seller_login">
        <div className="seller_login_box">
          <div className="seller_login_box_container">
            <div className="seller_login_box_header">Login</div>
            <Input
              header="EMAIL"
              placeholder="Enter your email"
              className="seller_login_box_input"
              color="white"
            />
            <Input
              header="PASSWORD"
              placeholder="Enter your password"
              className="seller_login_box_input"
              color="white"
            />
            <button type="button" className="seller_login_box_container_btn">
              Log in
            </button>
            <div className="seller_login_box_container_forgotpw">
              <button
                type="button"
                className="seller_login_box_container_btn_forgotpw"
              >
                Forgot password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerLogin;
