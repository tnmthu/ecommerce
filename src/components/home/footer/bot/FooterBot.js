import React, { Component } from 'react';
import MenuItem from '../MenuItem';

class FooterBot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer__bot">
                <div className="footer__bot__left">
                    <MenuItem item="Home" size="13px"/>
                    <MenuItem item="Products" size="13px"/>
                    <MenuItem item="Services" size="13px"/>
                    <MenuItem item="About Us" size="13px"/>
                    <MenuItem item="Help" size="13px"/>
                    <MenuItem item="Contacts" size="13px"/>
                </div>
                <div className="footer__bot__right">
                    <MenuItem item="Privacy Policy" size="13px"/>
                    <MenuItem item={'Terms & conditions'} size="13px"/>
                </div>
            </div>
         );
    }
}
 
export default FooterBot;