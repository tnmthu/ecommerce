import React, { Component } from 'react';

class FilterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body__side__filter__item">
                {this.props.item}
            </div>
         );
    }
}
 
export default FilterItem;