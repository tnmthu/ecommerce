import React from 'react';
import './App.css';
import Header from './components/home/header/Header';
import Body from './components/home/body/Body';
import Footer from './components/home/footer/footer';
import Ladies from './components/ladies/Ladies';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    // <Router></Router>
    
    <div className="App-class">
      {/* <div className="homepage">
        <Header/>
        <Body/>
        <Footer/>
      </div> */}
      {/* <Ladies></Ladies> */}
      <Cart />
    </div>
  );
}

export default App;
