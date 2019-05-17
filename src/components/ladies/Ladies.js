import React, { Component } from 'react';  
import './Ladies.css';
import Header from '../home/header/Header';
import Body from './Body/Body';
import Footer from '../home/footer/footer';

class Ladies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ladies">
                <Header />
                <div className="ladies__location">Ladies / Dresses</div>
                <Body />
                <Footer />
            </div> 
        );
    }
}
 
export default Ladies;