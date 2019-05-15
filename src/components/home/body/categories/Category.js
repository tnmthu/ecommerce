import React from 'react';
import ShopBtn from './ShopBtn';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="cateName">Men</div>
                <div className="line"></div>
                <ShopBtn/>
            </div>
         );
    }
}
 
export default Category;