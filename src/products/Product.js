import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductOperations from "./ProductOperations";
import "./product.css";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;

    const row = data.map(data => (
      <tr>
        <td key={data.id}>{data.id}</td>
        <td key={data.name}>{data.name}</td>
        <td key={data.name}>{data.price}</td>
        <td key={data.name}>
          <Link to="">More..</Link>
        </td>
      </tr>
    ));

    return (
      <React.Fragment>
        <div>
          <h1>Products Details</h1>
          <table>
            <tr>
              <th> ProductId </th>
              <th>Product Name </th>
              <th>Price</th>
              <th>Details</th>
            </tr>
            {row}
          </table>
        </div>
        <div id="prodopr">
          <ProductOperations details={data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
