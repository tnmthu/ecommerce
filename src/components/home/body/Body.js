import React from 'react';
import './Body.css'
import ShopBtn from './ShopBtn';
import Category from './categories/Category';
import boys from '../../../images/boys.jpg';
import men from '../../../images/men.jpg';
import ladies from '../../../images/ladies.jpg';
import girls from '../../../images/girls.jpg'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="body__banner">
                    <div className="body__banner__text">OUTFIT OF THE WEEK</div>
                    <ShopBtn/>
                </div>
                <div className="body__tags">
                    <Category item="Men" bgimg={men}/>
                    <Category item="Ladies" bgimg={ladies}/>
                    <Category item="Girls" bgimg={girls}/>
                    <Category item="Boys" bgimg={boys}/>
                </div>
            </div>
         );
    }
}
 
export default Body;