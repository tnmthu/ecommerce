import React from "react";
import RegisterModal from "../../../authen/register/RegisterModal";
import LoginModal from "../../../authen/login/LoginModal";
import cart from "../../../../images/cart.png";
import ava from "../../../../images/ladies.jpg";
import onClickOutside from "react-onclickoutside";
import Minicart from "../../header/headerUpper/minicart/Minicart";
import UserDropdown from "../headerUpper/userDropdown/UserDropdown";
import { UserContext } from "../../../../context/UserProvider";

class HeaderLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegModal: false,
      showMinicart: false,
      showAccInfo: false
    };

    this.toggleShowMinicart.bind(this);
    this.toggleShowAccInfo.bind(this);
  }

  toggleLoginModal = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal
    });
  };

  toggleRegModal = () => {
    this.setState({
      showRegModal: !this.state.showRegModal
    });
  };

  toggleShowMinicart = () => {
    this.setState({ showMinicart: !this.state.showMinicart });
  };

  toggleShowAccInfo = () => {
    this.setState({ showAccInfo: !this.state.showAccInfo });
  };

  handleClickOutside = evt => {
    this.setState({
      showMinicart: false
    });
  };

  render() {
    const { showLoginModal } = this.state;
    const { showRegModal } = this.state;
    const { showMinicart } = this.state;
    const { showAccInfo } = this.state;

    return (
      <div className="header__upper__authen">
        <UserContext.Consumer>
          {state => {
            return state.isLogin ? (
              <div className="userinfo">
                <img
                  className="userinfo_ava"
                  src={ava}
                  alt="avatar"
                  onClick={this.toggleShowAccInfo}
                />
                <div className="userinfo_name">{state.userName}</div>
                {showAccInfo && <UserDropdown />}
              </div>
            ) : (
              <div>
                <button
                  className="header__upper__authen__register"
                  type="button"
                  onClick={this.toggleRegModal}
                >
                  Register
                </button>
                <button
                  className="header__upper__authen__loginBtn"
                  type="button"
                  onClick={this.toggleLoginModal}
                >
                  Log In
                </button>
              </div>
            );
          }}
        </UserContext.Consumer>
        <div className="cart" onClick={this.toggleShowMinicart}>
          <img className="cart_icon" src={cart} alt="cart icon" />
          <div className="cart_oval">
            <div className="cart_oval_num">1</div>
          </div>
          {showMinicart && <Minicart />}
        </div>

        <RegisterModal isOpen={showRegModal} toggle={this.toggleRegModal} />
        <LoginModal isOpen={showLoginModal} toggle={this.toggleLoginModal} />
      </div>
    );
  }
}

export default onClickOutside(HeaderLeft);
