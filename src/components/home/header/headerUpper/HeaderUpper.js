import React from 'react';
import SearchBox from './SearchBox';
import logo from '../../../../images/logo.png';
import HeaderLeft from './HeaderLeft'

class HeaderUpper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header__upper">
                <SearchBox/>
                <div className="header__upper__logo">
                  <img width='96px' height='20px' src={logo}></img>
                </div>
                <HeaderLeft/>
            </div>
         );
    }
}
 
export default HeaderUpper;