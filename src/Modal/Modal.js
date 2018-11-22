import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleClose, show, children } = this.props;

    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}> Cancel </button>
        </section>
      </div>
    );
  }
}

export default Modal;
