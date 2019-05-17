import React, { Component } from 'react';   

class ClothesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies__body__content__shop__clothesItem">
                <div className="ladies__body__content__shop__clothesItem__img"></div>
                <div className="ladies__body__content__shop__clothesItem__descr">dcm chua vcl
                    <div className="ladies__body__content__shop__clothesItem__descr__price">$69.00</div>
                </div>
            </div>
         );
    }
}
 
export default ClothesItem;