import React from 'react';
import './App.css';
import Header from './components/home/header/Header';
import Body from './components/home/body/Body';
import Footer from './components/home/footer/footer';

function App() {
  return (
    <div className="App-class">
      <div className="homepage">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
