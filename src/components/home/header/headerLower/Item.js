import React, { Component } from 'react';
import DropdownType from './DropdownType'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.Men = ["Tops", "Bottoms", "Jackets", "Shoes", "Sales"];
        this.Ladies = ["Tops", "Bottoms", "Dresses", "Jackets", "Shoes", "Accessories", "Sales"];
        let type = this.props.type;
    }
        render() { 
        return ( 
            <div className="header__lower__selection__item">
                <div className="header__lower__selection__item__name">{this.props.type}</div>
                <div className="header__lower__selection__item__arrow">
                    <i class="fa fa-chevron-down fa-xs"></i>
                    <div className="header__lower__selection__item__dropdown">
                        {
                            // this.type.map((item) => <DropdownType type={item} />)
                        }
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Item;