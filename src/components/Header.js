import React from 'react';
import './Header.css';
import HeaderUpper from './Header-upper.js'
import HeaderLower from './Header-lower.js'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="header">
                <HeaderUpper/>
                <HeaderLower/>
            </div>
          );
    }
}
 
export default Header ;