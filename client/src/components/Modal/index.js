import React from "react";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./style.css";

export default function index(props) {
  const { buttonLabel, className, modal, toggle } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Oops...</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col">
              <p>
                You need to be signed in to add this game to your favorites.
                Please login or signup to access this feature.
              </p>
            </div>
          </div>
          <br/>
          <div className="row container">
            <div className="col-4">
              <p >
                <Link className="links" to="/signup">Sign up!</Link>
              </p>
            </div>
            <div className="col-4">
              <p >
                <Link className="links" to="/login">Log in!</Link>
              </p>
            </div>
            <div className="col-4">
              <p className="links" onClick={toggle}>Close</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}
