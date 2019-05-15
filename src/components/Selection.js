import React from 'react'

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="item">
                <div className="name">Women</div>
                <div className="arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
            </div>
         );
    }
}
 
export default Selection;