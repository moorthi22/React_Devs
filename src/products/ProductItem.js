import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  state = { productDetails: [] };

  handleSubmit(e) {
    e.preventDefault();
    const id = this.proId.value;
    const name = this.proName.value;
    const price = this.proPrice.value;
    const data = {
      id,
      name,
      price
    };
    this.props.dispatch({
      type: "ADD_ITEM",
      data
    });
    this.proId.value = "";
    this.proName.value = "";
    this.proPrice.value = "";

    console.log(data);
    alert("data submitted successfully...");
  }

  render() {
    return (
      <div className="FormContainer">
        <h3>Add a New Product</h3>
        <form onSubmit={this.handleSubmit}>
          Id :
          <input
            type="text"
            name="proId"
            ref={input => (this.proId = input)}
          />{" "}
          <br />
          Name :
          <input
            type="text"
            name="proName"
            ref={input => (this.proName = input)}
          />{" "}
          <br />
          Price :
          <input
            type="text"
            name="proPrice"
            ref={input => (this.proPrice = input)}
          />{" "}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect()(ProductItem);
