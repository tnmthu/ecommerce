import React, { Component } from 'react';
import logo from '../../../../images/logo.png';
import ins from '../../../../images/instagram-6-icon@2x.png';
import fb from '../../../../images/facebook-icon@2x.png';
import tw from '../../../../images/twitter-icon@2x.png';

class FooterTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer__top">
                <div className="footer__top__logo"><img width='96px' height='20px' src={logo}></img></div>
                <div className="footer__top__menu">
                    <div className="footer__top__menu__item">Home</div>
                    <div className="footer__top__menu__item">Products</div>
                    <div className="footer__top__menu__item">Services</div>
                    <div className="footer__top__menu__item">About Us</div>
                    <div className="footer__top__menu__item">Help</div>
                    <div className="footer__top__menu__item">Contacts</div>
                </div>
                <div className="footer__top__socmed">
                    <div className="footer__top__socmed__item"><img width="24px" height="24px" src={ins}></img></div>
                    <div className="footer__top__socmed__item"><img width="24px" height="24px" src={fb}></img></div>
                    <div className="footer__top__socmed__item"><img width="24px" height="24px" src={tw}></img></div>
                </div>
            </div>
         );
    }
}
 
export default FooterTop;