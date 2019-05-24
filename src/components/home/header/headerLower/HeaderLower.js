import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

class HeaderLower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header__lower">
        <div className="header__lower__selection">
          <Item
            type="Men"
            items={["Tops", "Bottoms", "Jackets", "Shoes", "Sales"]}
          />
          <Item
            type="Ladies"
            items={[
              "Tops",
              "Bottoms",
              "Dresses",
              "Jackets",
              "Shoes",
              "Accessories",
              "Sales"
            ]}
          >
            <Link to="/ladies/dresses" />
          </Item>
          <Item
            type="Girls"
            items={[
              "Tops",
              "Bottoms",
              "Dresses",
              "Jackets",
              "Shoes",
              "Accessories",
              "Sales"
            ]}
          />
          <Item
            type="Boys"
            items={["Tops", "Bottoms", "Jackets", "Shoes", "Sales"]}
          />
        </div>
      </div>
    );
  }
}

export default HeaderLower;
