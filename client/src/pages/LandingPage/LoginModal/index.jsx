
import React, { useState } from 'react';
import style from 'styled-components';
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from '../../../utils/queries';
import { LOGIN_USER } from '../../../utils/mutations';

import auth from '../../../utils/auth';

import { 
    Modal, 
    Form,
    Col,
    Container,
    Button
} from 'react-bootstrap';

const LoginModal = ({ modalActive, hideModal, setLoggedIn }) => {
    const [formData, setFormData] = useState({});
    const [login] = useMutation(LOGIN_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();

        const { data } = await login({
            variables: {
                username: formData.username,
                password: formData.password
            }
        });

        auth.login(data.login.token);
        setLoggedIn(auth.loggedIn());
    }
    
    const handleChange = event => {
        const { value, name } = event.target;
    
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <Modal show={modalActive} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label >Username:</Form.Label>
                            <Form.Control name="username" type="text" onChange={handleChange} placeholder="Enter Username" />
                            {/* <Form.Text className="text-muted">
                                Username validation error message here???
                            </Form.Text> */}
                            <Form.Label>Password:</Form.Label>
                            <Form.Control name="password" type="password" onChange={handleChange} placeholder="Enter Password" />
                            <Button type="submit" variant="primary">
                                Login
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
