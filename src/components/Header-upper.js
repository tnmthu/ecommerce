import React from 'react';
import SearchBox from './SearchBox.js';
import logo from '../images/logo.png';
import HeaderLeft from './Header-left.js'

class HeaderUpper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="upper">
                <SearchBox/>
                <div className="logo">
                  <img width='96px' height='20px' src={logo}></img>
                </div>
                <HeaderLeft/>
            </div>
         );
    }
}
 
export default HeaderUpper;