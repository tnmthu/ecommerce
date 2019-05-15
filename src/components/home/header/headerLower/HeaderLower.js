import React from 'react';

class HeaderLower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="lower">
                <div className="selection">
                    <div className="item">
                        <div className="name">Men</div>
                        <div className="arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="item">
                        <div className="name">Ladies</div>
                        <div className="arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="item">
                        <div className="name">Girls</div>
                        <div className="arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                    <div className="item">
                        <div className="name">Boys</div>
                        <div className="arrow"><i class="fa fa-chevron-down fa-xs"></i></div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default HeaderLower;