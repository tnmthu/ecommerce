import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/home/header/Header";
import Footer from "./components/home/footer/footer";
import Cart from "./components/cart/Cart";
import Ladies from "./components/ladies/Ladies";
import Profile from "./components/profile/Profile";
import AccSetting from "./components/profile/accSetting/AccSetting";

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/ladies" component={Ladies} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/accsetting" component={AccSetting} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes;
