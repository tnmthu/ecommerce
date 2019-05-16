import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer__menu__item" style={{fontSize:this.props.size}}>{this.props.item}</div>
         );
    }
}
 
export default MenuItem;