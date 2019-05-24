import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/home/header/Header";
import Footer from "./components/home/footer/footer";
import Cart from "./components/cart/Cart";
import Ladies from "./components/ladies/Ladies";
import Profile from "./components/profile/Profile";
import AccSetting from "./components/profile/accSetting/AccSetting";
import ChangePw from "./components/profile/changePw/ChangePw";
import Seller from "./components/seller/Seller";
import ProductInfo from "./components/productInfo/ProductInfo";
import Authen from "./components/authen/Authen";

class Routes extends Component {
  render() {
    if (window.location.pathname == "/seller") {
      return (
        <Switch>
          <Route exact path="/seller" component={Seller} />
        </Switch>
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <div style={{ minHeight: "490px" }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/ladies" component={Ladies} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/accsetting" component={AccSetting} />
            <Route exact path="/profile/changepw" component={ChangePw} />
            <Route exact path="/productInfo" component={ProductInfo} />
          </div>
        </Switch>
        <Footer />

        {/* <Switch>
          <Route exact path="/authen" component={Authen} />
        </Switch> */}
      </div>
    );
  }
}

export default Routes;
