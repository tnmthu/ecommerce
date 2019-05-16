import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input className="header__upper__searchBox" type="text" placeholder="Search">
                {/* <div className="header__upper__searchBox__searchIcon"><i className="fa fa-search fa-lg"></i></div> */}
            </input>
         );
    }
}
 
export default SearchBox;