import React, { Component } from 'react';  
import FilterItem from './FilterItem';  

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body__side__filter">
                <div className="ladies__body__side__filter__name">Filter</div>
                <FilterItem item="Lorem" />
                <FilterItem item="Lorem" />
                <FilterItem item="Lorem" />
                <FilterItem item="Lorem" />
                <FilterItem item="Lorem" />
                <FilterItem item="Lorem" />
            </div>
         );
    }
}
 
export default Filter;