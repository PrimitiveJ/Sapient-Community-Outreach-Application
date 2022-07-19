import React from "react";
import UserMap from "./map";
import { Modal } from "react-bootstrap";

// const location = [
//   {
//     address: "101 E Weaver St, Carrboro, NC 27510",
//     lat: 35.8989,
//     lng: -79.0489,
//   },
// ];

const UserMapModal = ({ modalActive, hideModal }) => {
  return (
    <>
      <Modal size="lg" show={modalActive} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Events Near Me</Modal.Title>
        </Modal.Header>
        <UserMap />
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default UserMapModal;
