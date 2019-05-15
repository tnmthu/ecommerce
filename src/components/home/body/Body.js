import React from 'react';
import './Body.css'
import ShopBtn from '../../ShopBtn';
import Category from './categories/Category';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="banner">
                    <div className="text">OUTFIT OF THE WEEK</div>
                    <ShopBtn/>
                </div>
                <div className="tags">
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </div>
            </div>
         );
    }
}
 
export default Body;