import React from "react";
import style from "styled-components";

import { Modal, Form, Col, Container } from "react-bootstrap";

const LoginModal = ({ modalActive, hideModal }) => {
  return (
    <>
      <Modal show={modalActive} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
              {/* <Form.Text className="text-muted">
                                Username validation error message here???
                            </Form.Text> */}
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
