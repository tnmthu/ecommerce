import React from 'react';

class HeaderLower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header__lower">
                <div className="header__lower__selection">
                    <div className="header__lower__selection__item">
                        <div className="header__lower__selection__item__name">Men</div>
                        <div className="header__lower__selection__item__arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="header__lower__selection__item">
                        <div className="header__lower__selection__item__name">Ladies</div>
                        <div className="header__lower__selection__item__arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="header__lower__selection__item">
                        <div className="header__lower__selection__item__name">Boys</div>
                        <div className="header__lower__selection__item__arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="header__lower__selection__item">
                        <div className="header__lower__selection__item__name">Girls</div>
                        <div className="header__lower__selection__item__arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default HeaderLower;