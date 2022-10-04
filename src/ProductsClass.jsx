import { Component } from "react";
import ProductClass from "./ProductClass";

const dummy_datas = ["chips", "tea"];

class ProductsClass extends Component {
  constructor() {
    super();
    this.state = {
      showProducts: true,
      foundedData: [],
      search: "",
    };
  }
  compon;
  componentDidMount() {
    this.setState({ foundedData: ["chips", "tea"] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        foundedData: dummy_datas.filter((item) =>
          item.includes(this.state.search)
        ),
      });
    }
  }

  toggleShowProducts() {
    console.log("asdas");
    this.setState((stateObj) => {
      return { showProducts: !stateObj.showProducts };
    });
  }
  searchHandler(event) {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  }
  render() {
    return (
      <>
        <input type="text" onChange={this.searchHandler.bind(this)} />
        {this.state.showProducts &&
          this.state.foundedData.map((item) => (
            <ProductClass key={item} item={item} />
          ))}
        <button onClick={this.toggleShowProducts.bind(this)}>
          {this.state.showProducts ? "hide" : "show"} products
        </button>
      </>
    );
  }
}

export default ProductsClass;
