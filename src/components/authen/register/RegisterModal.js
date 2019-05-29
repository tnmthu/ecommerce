import React, { Component } from "react";
import Input from "../../profile/content/Input";
import { Modal } from "reactstrap";
const axios = require("axios");

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onChange = type => e => {
    this.setState({ [type]: e.target.value });
  };

  handleClick(event) {
    const apiUrl = "http://localhost:3005/user/";
    const payload = {
      firstName: this.state.name.split(" ")[0],
      lastName: this.state.name.split(" ")[1],
      email: this.state.email,
      password: this.state.password
    };
    console.log(payload);
    axios({
      method: "post",
      url: apiUrl + "signup",
      data: payload
    }).then(response => {
      console.log(response);
    });
  }

  render() {
    const { isOpen, toggle, className } = this.props;
    return (
      <div className="modal">
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          className={className}
          centered="true"
        >
          <div className="register">
            <div className="register_header">Register</div>
            <div className="register_inside">
              <Input
                header="NAME"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.onChange("name")}
                required
              />
              <Input
                header="E-MAIL"
                placeholder="Enter your e-mail"
                type="email"
                value={this.state.email}
                onChange={this.onChange("email")}
                required
              />
              <Input
                header="PASSWORD"
                placeholder="Enter your password"
                type="password"
                value={this.state.email}
                onChange={this.onChange("password")}
                required
              />
              <div className="register_inside_mid">
                <div className="register_inside_mid_content">
                  <p>
                    By creating an account you agree to the{" "}
                    <strong>Terms of Services</strong> and{" "}
                    <strong>Privacy Policy</strong>
                  </p>
                </div>
              </div>
              <button
                className="register_inside_btn"
                type="button"
                onClick={event => this.handleClick(event)}
              >
                Register
              </button>
              <div className="register_inside_bot">
                <p>
                  Do you have an account? <strong>Log in</strong>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
