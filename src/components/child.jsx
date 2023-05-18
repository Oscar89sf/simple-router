import React, { Component } from "react";
class Child extends Component {
  render() {
    console.log(this.props);
    return <button>{this.props.name}</button>;
  }
}

export default Child;
