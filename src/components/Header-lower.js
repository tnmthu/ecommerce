import React from 'react';
import Selection from './Selection.js'

class HeaderLower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="lower">
                <div className="selection">
                    <Selection/>
                    <Selection/>
                    <Selection/>
                    <Selection/>
                </div>
            </div>
            
         );
    }
}
 
export default HeaderLower;