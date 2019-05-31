import React, { Component } from "react";
import Side from "../side/Side";
import Header from "../content/Header/Header";
import Input from "../content/Input";
// import { UserContext } from "../../../context/UserProvider";

const axios = require("axios");

class AccSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      userId: ""
      // user_token: localStorage.getItem("user_token")
    };
  }

  onChange = type => e => {
    this.setState({ [type]: e.target.value });
  };

  handleClick(event) {
    const apiUrl = "http://localhost:3005/user/";
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    axios({
      method: "patch",
      url: apiUrl + "login",
      data: payload
    }).then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="accsetting">
        <Side />
        <div className="accsetting_content">
          <Header txt="Information" />
          <div className="accsetting_content_inside">
            <Input
              header="NAME"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onChange("name")}
              required
            />
            {/* <p>{this.state.user_token}</p> */}
            <Input
              header="E-MAIL"
              placeholder="Enter your e-mail"
              type="email"
              value={this.state.email}
              onChange={this.onChange("email")}
            />
            <div className="accsetting_content_inside_btn">
              <button type="button" className="button">
                Cancel
              </button>
              {/* <UserContext.Consumer> */}
              <button
                type="submit"
                className="button"
                onClick={event => this.handleClick(event)}
              >
                Save
              </button>
              {/* </UserContext.Consumer> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccSetting;
