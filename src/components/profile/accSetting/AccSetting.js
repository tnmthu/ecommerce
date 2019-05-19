import React, { Component } from "react";
import Side from "../side/Side";
import Header from "../content/Header/Header";
import Button from "../content/Button";

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
          <Header />
          <div className="accsetting_content_inside">
            <div className="accsetting_content_inside_header">NAME</div>
            <div className="accsetting_content_inside_input">
              <input placeholder="Enter your name" />
            </div>
            <div className="accsetting_content_inside_header">E-MAIL</div>

            <div className="accsetting_content_inside_input">
              <input placeholder="Enter your e-mail" />
            </div>
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
