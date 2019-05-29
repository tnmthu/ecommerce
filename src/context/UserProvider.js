import React from "react";
const jwt = require("jsonwebtoken");

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
      dispatchUser: token => {
        var decoded = jwt.decode(token);
        console.log(decoded);
        this.setState({
          isLogin: true,
          userName: decoded.firstName
        });
      },
      logoutUser: () => {
        this.setState({ isLogin: false });
      }
    };
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
