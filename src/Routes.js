import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/home/header/Header";
import Footer from "./components/home/footer/footer";
import Cart from "./components/cart/Cart";
import Ladies from "./components/ladies/Ladies";
import Profile from "./components/profile/Profile";
import AccSetting from "./components/profile/accSetting/AccSetting";
import ChangePw from "./components/profile/changePw/ChangePw";
import ProductInfo from "./components/productInfo/ProductInfo";
import Seller from "./components/seller/Seller";
import jwt from "jsonwebtoken";

const checkAuth = () => {
  const token = localStorage.getItem("user_token");
  if (!token) {
    return false;
  }

  try {
    const { exp } = jwt.decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
    console.log(exp);
    console.log(new Date().getTime() / 1000);
  } catch (e) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

class Routes extends Component {
  render() {
    if (window.location.pathname === "/seller") {
      return (
        <Switch>
          <Route exact path="/seller" component={Seller} />
        </Switch>
      );
    }
    return (
      <div>
        <Header />

        <div style={{ minHeight: "490px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/product/:_id" component={ProductInfo} />
            <AuthRoute exact path="/profile" component={Profile} />
            <AuthRoute
              exact
              path="/profile/accsetting"
              component={AccSetting}
            />
            <AuthRoute exact path="/profile/changepw" component={ChangePw} />
            <Route path="/:gender/:category" component={Ladies} />
          </Switch>
        </div>

        <Footer />

        {/* <Switch>
          <Route exact path="/authen" component={Authen} />
          <Route exact path="/seller" component={Seller} />
        </Switch> */}
      </div>
    );
  }
}

export default Routes;
