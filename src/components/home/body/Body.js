import React from "react";
import "./Body.css";
import ShopBtn from "./ShopBtn";
import boys from "../../../images/boys.jpg";
import men from "../../../images/men.jpg";
import ladies from "../../../images/ladies.jpg";
import girls from "../../../images/girls.jpg";
import { Link } from "react-router-dom";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="body">
        <div className="body__container">
          <div className="body__banner">
            <div className="body__banner_img" />
            <div className="body__banner__text">OUTFIT OF THE WEEK</div>
            <Link to="/men/tops">
              <ShopBtn />
            </Link>
          </div>
        </div>

        <div className="body__tags">
          <div
            className="body__tags__container"
            style={{ backgroundImage: "url(" + men + ")" }}
          >
            <div className="body__tags__container__cateName">Men</div>
            <div className="body__tags__container__line" />
            <Link to="/men/tops">
              <ShopBtn width="140px" height="40px" bot="23px" />
            </Link>
          </div>
          <div
            className="body__tags__container"
            style={{ backgroundImage: "url(" + ladies + ")" }}
          >
            <div className="body__tags__container__cateName">Ladies</div>
            <div className="body__tags__container__line" />
            <Link to="/ladies/tops">
              <ShopBtn width="140px" height="40px" bot="23px" />
            </Link>
          </div>
          <div
            className="body__tags__container"
            style={{ backgroundImage: "url(" + girls + ")" }}
          >
            <div className="body__tags__container__cateName">Girls</div>
            <div className="body__tags__container__line" />
            <Link to="/girls/tops">
              <ShopBtn width="140px" height="40px" bot="23px" />
            </Link>
          </div>
          <div
            className="body__tags__container"
            style={{ backgroundImage: "url(" + boys + ")" }}
          >
            <div className="body__tags__container__cateName">Boys</div>
            <div className="body__tags__container__line" />
            <Link to="/boys/tops">
              <ShopBtn width="140px" height="40px" bot="23px" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
