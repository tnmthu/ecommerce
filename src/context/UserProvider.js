import React from "react";
import { withRouter } from "react-router-dom";
const jwt = require("jsonwebtoken");

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
      userId: "",
      userEmail: "",
      hasToken: false,
      dispatchUser: token => {
        const decoded = jwt.decode(token);
        // console.log(decoded);
        this.setState({
          isLogin: true,
          userName: decoded.firstName + " " + decoded.lastName,
          userId: decoded.userId,
          userEmail: decoded.email
        });
      },
      logoutUser: () => {
        this.setState({ isLogin: false });
        localStorage.clear();
        this.props.history.push("/");
      }
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_token") !== null) {
      const decoded = jwt.decode(localStorage.getItem("user_token"));
      this.setState({
        isLogin: true,
        userName: decoded.firstName + " " + decoded.lastName,
        userEmail: decoded.email
      });
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withRouter(UserProvider);
