import React, { Component } from 'react';
import Cate from './Cate/Cate'
import Filter from './Filter/Filter'

class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="ladies__body__side">
            <Cate />
            <div className="ladies__body__side__line"></div>
            <Filter />
        </div> );
    }
}
 
export default Side;