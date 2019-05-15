import React from 'react';

class HeaderLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="left-container">
                <div className="Register">Register</div>
                <div className="loginBtn"><p>Log In</p></div>
                <div className="cart">
                    <div className="cartLogo"><i className="fa fa-shopping-cart fa-lg"></i></div>
                    <div className="numLogo"><i className="fa fa-circle"></i></div>
                </div>
            </div>
         );
    }
}
 
export default HeaderLeft;