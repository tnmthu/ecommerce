import React from 'react';

class ShopBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button className="body__shopBtn" style={{width: this.props.width, height: this.props.height, bottom: this.props.bot}}>Shop now</button>
         );
    }
}
 
export default ShopBtn;