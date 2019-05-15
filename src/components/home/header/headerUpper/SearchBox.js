import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="searchBox">
                <div className="searchIcon"><i className="fa fa-search fa-lg"></i></div>
            </div>
         );
    }
}
 
export default SearchBox;