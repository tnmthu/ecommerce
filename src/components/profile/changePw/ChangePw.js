import React, { Component } from "react";
import Side from "../side/Side";
import Header from "../content/Header/Header";
import Input from "../content/Input";
import Button from "../content/Button";

class ChangePw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="changePw">
        <Side />
        <div className="changePw_content">
          <Header txt="Change password" />
          <div className="changePw_content_inside">
            <Input
              header="CURRENT PASSWORD"
              placeholder="Enter your password"
              type="password"
            />
            <Input
              header="NEW PASSWORD"
              placeholder="Enter your password"
              type="password"
            />
            <Input
              header="RE-ENTER NEW PASSWORD"
              placeholder="Enter your password"
              type="password"
            />
            <div className="changePw_content_inside_btn">
              <Button txt="Save" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePw;
