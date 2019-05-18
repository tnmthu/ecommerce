import React, { Component } from "react";
import logo from "../../../../images/logo.png";
import ins from "../../../../images/instagram-6-icon@2x.png";
import fb from "../../../../images/facebook-icon@2x.png";
import tw from "../../../../images/twitter-icon@2x.png";
import MenuItem from "../MenuItem";

class FooterTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer__top">
        <div className="footer__top__logo">
          <img width="96px" height="20px" src={logo} alt="aware logo" />
        </div>
        <div className="footer__top__menu">
          <MenuItem item="Home" />
          <MenuItem item="Products" />
          <MenuItem item="Services" />
          <MenuItem item="About Us" />
          <MenuItem item="Help" />
          <MenuItem item="Contacts" />
        </div>

        <div className="footer__top__socmed">
          <div className="footer__top__socmed__item">
            <img width="24px" height="24px" src={ins} alt="instagram logo" />
          </div>
          <div className="footer__top__socmed__item">
            <img width="24px" height="24px" src={fb} alt="facebook logo" />
          </div>
          <div className="footer__top__socmed__item">
            <img width="24px" height="24px" src={tw} alt="twitter logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTop;
