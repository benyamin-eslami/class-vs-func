import logo from "./logo.svg";
import "./App.css";
import ProductsFunction from "./ProductsFunction";
import ProductsClass from "./ProductsClass";

function App() {
  return (
    <div className="App">
      <div>
        <p>class Base Components</p>
        <ProductsClass />

        <p>functional Base Components</p>
        <ProductsFunction />
      </div>
    </div>
  );
}

export default App;
