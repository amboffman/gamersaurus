import React from "react";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./style.css";

export default function index(props) {
  const { buttonLabel, className, modal, toggle } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Opps</ModalHeader>
        <ModalBody>
          You need to be signed in to add this game to your favorites. Please
          login or signup to access this feature.
        </ModalBody>
        <ModalFooter>
          <span>
            <Link to="/signup">Sign me up!</Link>
          </span>
          <span>
            <Link to="/login">Log me in!</Link>
          </span>
          <Button onClick={toggle}>Do Something</Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
