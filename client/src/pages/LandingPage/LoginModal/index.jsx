
import React, { useState } from 'react';
import style from 'styled-components';
// import { useNavigate } from 'react-router-dom';
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

const LoginModal = ({ active, onHide }) => {
    const [formData, setFormData] = useState({});
    const [login] = useMutation(LOGIN_USER);

    /*
        Handle login form submission.
    */
    const handleFormSubmit = async event => {
        event.preventDefault();

        /*
            Get data response object from the LOGIN_USER mutation. Data 
            response object should resemble the following schema:
            
            {
                data {
                    login {
                        token: ID/null      // [unique id] for auth token; [null] if [response.ok] is [false]
                        response {
                            ok: Boolean     // [true] if user logs in; [false] if login failed
                            message: String // message containing info about response
                        }
                    }
                }
            }

            if the login was successful, the schema will return a valid token.
        */
        const data = (await login({
            variables: {
                username: formData.username,
                password: formData.password
            }
        })).data.login;

        /*
            If data response is ok: [true], then the login was successful and call
            [auth.login] to set the LocalStorage token for user auth
        */
        if (data.response.ok) {
            auth.login(data.token);
            window.location.assign('/home');
        }

        // !debug
        console.log('response: ', data);
    }
    
    /*
        Handle form input changes and update the modal state
    */
    const handleFormChange = event => {
        const { value, name } = event.target;
    
        setFormData({
            ...formData,
            [name]: value
        })
    }

    /*
        Return rendered login modal
    */
    return (
        <>
            <Modal show={active} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Login:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label >Username:</Form.Label>
                            <Form.Control name="username" type="text" onChange={handleFormChange} placeholder="Enter Username" />
                            {/* <Form.Text className="text-muted">
                                Username validation error message here???
                            </Form.Text> */}
                            <Form.Label>Password:</Form.Label>
                            <Form.Control name="password" type="password" onChange={handleFormChange} placeholder="Enter Password" />
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
