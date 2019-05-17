import React, { Component } from 'react';

class CateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body__side__cate__item">
                {this.props.item}
            </div>
         );
    }
}
 
export default CateItem;