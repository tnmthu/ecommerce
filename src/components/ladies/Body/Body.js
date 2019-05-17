import React, { Component } from 'react';
import Side from './Side/Side';
import Content from './Content/Content';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body">
                <Side />
                <Content />
            </div>
         );
    }
}
 
export default Body;