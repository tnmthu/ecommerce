import React, { Component } from 'react';
import Header from '../home/header/Header';
import Footer from '../home/footer/footer';
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cart">
                <Header />
                <div className="cart_body">
                    <div className="cart_body_myBag">My Bag</div>
                    <div className="cart_body_content">
                        <div className="cart_body_content_product">
                            
                        </div>
                        <div className="cart_body_content_total">huhuhu</div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Cart;