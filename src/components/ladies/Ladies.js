import React, { Component } from "react";
import "./Ladies.css";
import Body from "./Body/Body";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Ladies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    // console.log(this.props.match);
    axios({
      method: "post",
      url: `http://localhost:3005/product`,
      data: {
        gender: this.props.match.params.gender,
        category: this.props.match.params.category
      }
    })
      .then(result => {
        this.setState({ list: result.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidUpdate(prev) {
    if (
      this.props.match.params.gender !== prev.match.params.gender ||
      this.props.match.params.category !== prev.match.params.category
    ) {
      axios({
        method: "post",
        url: `http://localhost:3005/product`,
        data: {
          gender: this.props.match.params.gender,
          category: this.props.match.params.category
        }
      })
        .then(result => {
          this.setState({ list: result.data });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <div className="ladies">
        <div className="ladies__location">
          {this.props.match.params.gender} / {this.props.match.params.category}
        </div>
        <Body list={this.state.list} />
      </div>
    );
  }
}

export default withRouter(props => <Ladies {...props} />);
