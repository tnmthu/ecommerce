import React from 'react';
import ShopBtn from '../ShopBtn';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body__tags__container" style={{backgroundImage: "url(" + this.props.bgimg + ")"}}>
                <div className="body__tags__container__cateName">{this.props.item}</div>
                <div className="body__tags__container__line"></div>
                <ShopBtn width="140px" height="40px" bot="23px"/>
            </div>
         );
    }
}
 
export default Category;