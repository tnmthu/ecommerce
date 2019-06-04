import React, { Component } from "react";
import Input from "../../profile/content/Input";
import { Modal } from "reactstrap";
// import { Redirect } from "react-router";
import "../Authen.css";
import { UserContext } from "../../../context/UserProvider";
const axios = require("axios");

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
      // redirectToHome: false
    };
  }
  onChange = type => e => {
    this.setState({ [type]: e.target.value });
  };
  handleClick(event, dispatchUser) {
    const apiUrl = "http://localhost:3005/user/";
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    axios({
      method: "post",
      url: apiUrl + "login",
      data: payload
    }).then(response => {
      localStorage.setItem("user_token", response.data.token);
      // if (localStorage.getItem("user_cart") !== null) {
      //   const cartToken = JSON.parse(localStorage.getItem("user_cart"));
      //   this.setState({
      //     cart: cartToken,
      //     cartQuantity: cartToken.cartItem.length
      //   });
      // }
      // localStorage.setItem("user_id", response.data.userId);
      // this.setState({ redirectToHome: true });
      dispatchUser(response.data.token);
      // console.log("cart", localStorage.getItem("user_cart"));
    });
  }

  render() {
    const { isOpen, toggle, className } = this.props;
    // const { redirectToHome } = this.state;
    // if (redirectToHome) return <Redirect to="/" />;
    return (
      <div className="modal">
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          className={className}
          centered={true}
        >
          <div className="login">
            <div className="login_header">Log In</div>
            <div className="login_inside">
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
                value={this.state.password}
                onChange={this.onChange("password")}
                required
              />
              <div className="login_inside_mid">
                <div className="login_inside_mid_pw">Remember password</div>
                <div className="login_inside_mid_forgot">
                  Forgot your password?
                </div>
              </div>
              <UserContext.Consumer>
                {state => (
                  <button
                    className="login_inside_btn"
                    type="submit"
                    onClick={event =>
                      this.handleClick(event, state.dispatchUser)
                    }
                  >
                    Log In
                  </button>
                )}
              </UserContext.Consumer>
              <div className="login_inside_bot">
                <p>
                  Don't have an account? <strong>Register</strong>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
