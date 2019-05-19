import React, { Component } from "react";
import Side from "../side/Side";
import Header from "../content/Header/Header";
import Button from "../content/Button";
import Input from "../content/Input";

class AccSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="accsetting">
        <Side />
        <div className="accsetting_content">
          <Header txt="Information" />
          <div className="accsetting_content_inside">
            <Input header="NAME" placeholder="Enter your name" />
            <Input
              header="E-MAIL"
              placeholder="Enter your e-mail"
              type="email"
            />
            <div className="accsetting_content_inside_btn">
              <Button txt="Cancel" />
              <Button txt="Save" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccSetting;
