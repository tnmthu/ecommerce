import React, { Component } from "react";
import FooterTop from "./top/FooterTop";
import FooterBot from "./bot/FooterBot";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <FooterTop />
        <div className="footer__midLine" />
        <FooterBot />
      </div>
    );
  }
}

export default Footer;
