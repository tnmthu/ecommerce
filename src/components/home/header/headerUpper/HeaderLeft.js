import React from "react";

class HeaderLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header__upper__authen">
        <button className="header__upper__authen__register" type="button">
          Register
        </button>
        <button className="header__upper__authen__loginBtn" type="button">
          Log In
        </button>
        <div className="header__upper__authen__cart">
          <div className="header__upper__authen__cart__logo">
            <div className="header__upper__authen__cart__oval" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLeft;
