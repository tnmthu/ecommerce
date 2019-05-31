import React, { Component } from "react";
import { UserContext } from "../../../../context/UserProvider";

class Inside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: ""
    };
  }

  render() {
    return (
      <div className="profile_content_inside">
        <UserContext.Consumer>
          {state => (
            <div>
              <div className="profile_content_inside_header">NAME</div>
              <div className="profile_content_inside_content">
                {state.userName}
              </div>
              <div className="profile_content_inside_header">E-MAIL</div>
              <div className="profile_content_inside_content">
                {state.userEmail}
              </div>
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Inside;
