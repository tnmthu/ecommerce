import React, { Component } from "react";

class Cate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ladies__body__side__cate">
        <div className="ladies__body__side__cate__name">Category</div>
        <div className="ladies__body__side__cate__item">All</div>
        <div className="ladies__body__side__cate__item">
          Rompers / Jumpsuits
        </div>
        <div className="ladies__body__side__cate__item">Casual</div>
        <div className="ladies__body__side__cate__item">Going out</div>
        <div className="ladies__body__side__cate__item">Party / Ocassion</div>
        <div className="ladies__body__side__cate__item">Sets</div>
      </div>
    );
  }
}

export default Cate;
