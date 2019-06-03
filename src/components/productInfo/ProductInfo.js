import React, { Component } from "react";
import "./ProductInfo.css";
import Main from "./main/Main";
import Reviews from "./reviews/Reviews";
import AlsoLike from "./alsoLike/AlsoLike";
import axios from "axios";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/product/${this.props.match.params._id}`)
      .then(res => {
        this.setState({ data: res.data.product });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="productInfo">
        <div className="productInfo_location">
          {`${data.gender} / ${data.category} / ${data.name}`}
        </div>
        <Main data={data} />
        <Reviews data={data.reviews} />
        <AlsoLike />
      </div>
    );
  }
}

export default ProductInfo;
