import React from 'react';
import Item from './Item';

class HeaderLower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header__lower">
                <div className="header__lower__selection">
                    <Item type="Men"/>
                    <Item type="Ladies"/>
                    <Item type="Girls"/>
                    <Item type="Boys"/>
                </div>
            </div>
            
         );
    }
}
 
export default HeaderLower;