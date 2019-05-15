import React from 'react';
import ShopBtn from './ShopBtn';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body__tags__container">
                <div className="body__tags__container__cateName">Men</div>
                <div className="body__tags__container__line"></div>
                <ShopBtn/>
            </div>
         );
    }
}
 
export default Category;