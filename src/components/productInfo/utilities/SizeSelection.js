import React, { Component } from "react";

class SizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.array = ["S", "M", "L"];
  }

  // handleCha(e) {}

  render() {
    return (
      <div className="size">
        {this.props.available &&
          this.props.available.size &&
          this.array.map((item, index) => {
            // console.log(this.props.available);
            if (this.props.available.size[item]) {
              if (item === this.props.size) {
                return (
                  <button
                    key={index}
                    type="button"
                    className="size_selection size_btn_visited"
                    onClick={() => this.props.handleChangeSize(item)}
                  >
                    {item}
                  </button>
                );
              } else {
                return (
                  <button
                    type="button"
                    className="size_selection"
                    onClick={() => this.props.handleChangeSize(item)}
                  >
                    {item}
                  </button>
                );
              }
            } else {
              return (
                <button
                  type="button"
                  className="size_selection"
                  onClick={() => this.props.handleChangeSize(item)}
                  disabled="true"
                >
                  {item}
                </button>
              );
            }
          })}

        {/* {this.props.data.sizeS  ? ()} */}

        {/* <button
          type="button"
          className="size_selection"
          onClick={() => this.props.handleChangeSize("M")}
        >
          M
        </button>
        <button
          type="button"
          className="size_selection"
          onClick={() => this.props.handleChangeSize("L")}
        >
          L
        </button> */}
      </div>
    );
  }
}

export default SizeSelection;
