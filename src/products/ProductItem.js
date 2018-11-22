import React, { Component } from "react";

class ProductItem extends Component {
  constructor() {
    super();
  }

  state = { productDetails: [] };

  handleSubmit(e) {
    const details = {};
    e.target.childNodes.forEach(function(el) {
      console.log(el);
      if (el.tagName === "INPUT") details[el.name] = el.value;
      el.value = null;
    });

    this.props.items.push(details);
    e.preventDefault();
    alert("data submitted successfully...");
  }

  render() {
    return (
      <div className="FormContainer">
        <h3>Add a New Product</h3>
        <form onSubmit={this.handleSubmit}>
          Id :
          <input type="text" name="proId" autofocus /> <br />
          Name :
          <input type="text" name="proName" /> <br />
          Price :
          <input type="text" name="proPrice" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ProductItem;
