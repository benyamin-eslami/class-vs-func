import { Component } from "react";

class ProductClass extends Component {
  componentWillUnmount() {
    console.log("not found");
  }
  render() {
    return <li>{this.props.item}</li>;
  }
}

export default ProductClass;
