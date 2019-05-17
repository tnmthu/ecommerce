import React, { Component } from 'react';
import CateItem from './CateItem';

class Cate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body__side__cate">
                <div className="ladies__body__side__cate__name">Category</div>
                <CateItem item="Lorem" />
                <CateItem item="Lorem" />
                <CateItem item="Lorem" />
                <CateItem item="Lorem" />
                <CateItem item="Lorem" />
                <CateItem item="Lorem" />
            </div>
         );
    }
}
 
export default Cate;