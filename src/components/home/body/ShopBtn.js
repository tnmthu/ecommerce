import React from "react";

class ShopBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   redirect: false
    };
  }

  //   setRedirect = () => {
  //     this.setState({
  //       redirect: true
  //     });
  //   };

  //   renderRedirect = () => {
  //     if (this.state.redirect) {
  //       return <Redirect to="localhost:3000/ladies" />;
  //     }
  //   };

  render() {
    return (
      <button
        // onClick={this.setRedirect}
        className="body__shopBtn"
        style={{
          width: this.props.width,
          height: this.props.height,
          bottom: this.props.bot
        }}
      >
        Shop now
      </button>
    );
  }
}

export default ShopBtn;
