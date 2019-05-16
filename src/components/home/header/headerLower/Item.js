import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header__lower__selection__item">
                <div className="header__lower__selection__item__name">{this.props.type}</div>
                <div className="header__lower__selection__item__arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
            </div>
         );
    }
}
 
export default Item;