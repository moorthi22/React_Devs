import React, { Component } from "react";
import Product from "./products/Product";
import "./styles.css";

const products = [
  { id: 1, name: "Redmi", price: 5000, detail: "" },
  { id: 2, name: "Motorola", price: 10000, detail: "" },
  { id: 3, name: "Nokia", price: 15000, detail: "" },
  { id: 4, name: "Honor", price: 9000, detail: "" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product data={products} />
      </div>
    );
  }
}

export default App;
