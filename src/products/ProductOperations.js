import React, { Component } from "react";
import Modal from "../Modal/Modal";
import ProductItem from "./ProductItem";

class ProductOperations extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <ProductItem items={this.props.details} />
        </Modal>
        <button type="button" onClick={this.showModal} name="add">
          Add Item{" "}
        </button>
        <button type="button" onClick={() => {}} name="remove">
          Remove{" "}
        </button>
      </div>
    );
  }
}

export default ProductOperations;
