import React from 'react';
import './Header.css';
import HeaderUpper from './headerUpper/HeaderUpper'
import HeaderLower from './headerLower/HeaderLower'

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