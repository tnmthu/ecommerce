import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="input">
        <div className="input_header" style={{ color: this.props.color }}>
          {this.props.header}
        </div>
        <div className="input_input">
          <input
            placeholder={this.props.placeholder}
            type={this.props.type}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Input;
