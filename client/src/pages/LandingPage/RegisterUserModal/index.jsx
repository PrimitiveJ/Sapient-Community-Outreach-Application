import React, { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import auth from '../../../utils/auth';
import stateList from '../../../utils/state-list.json';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../../utils/mutations';

const RegisterUserModal = ({ active, onHide, formError, setFormError }) => {
    const [signupUser, { error }] = useMutation(SIGNUP_USER);
    const [formData, setFormData] = useState({
        username: { valid: false, value: '' },
        password: { valid: false, value: '' },
        email: { valid: false, value: '' },
        zipcode: { valid: false, value: '' }
    });

    const handleFormChange = event => {
        const { name, value } = event.target;
        const data = value.trim();

        setFormData({
            ...formData,
            [name]: { valid: Boolean(data), value: data }
        });
    }

    const handleSignup = async event => {
        event.preventDefault();
        const userForm = {};

        Object.keys(formData).forEach(key => {
            const formValue = formData[key];
            if (formValue.valid) userForm[key] = formValue.value;
        });

        // pre-posting input validation for existing username/password
        // there is a better way to do this, fix later.
        if (!userForm.username) {
            setFormError({
                ...formError,
                default: { hidden: false, message: 'username is required' }
            });
            return;
        } else if (!userForm.password) {
            setFormError({
                ...formError,
                default: { hidden: false, message: 'password is required' }
            });
            return;
        }

        // make user sign-up post 
        const data = (await signupUser({
            variables: { inputPayload: userForm }
        })).data.signup;

        // if signup was successful, sign token and refresh page
        if (data.response.ok) {
            auth.login(data.token);
            window.location.assign('/home');
        } else {

        // if signup failed, display error
            setFormError({
                ...formError,
                default: { hidden: false, message: data.response.message }
            });
        }
    }

    return (
        <Modal show={active} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Register an Account:</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSignup}>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control key="username" name="username" type="username" placeholder="Username" onChange={handleFormChange} />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control key="password" name="password" type="password" placeholder="Password" onChange={handleFormChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control key="email" name="email" type="email" placeholder="Enter email" onChange={handleFormChange}/>
                        <Form.Text className="">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicZipCode">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control key="zipcode" name="zipcode" type="zipcode" placeholder="Zip Code" onChange={handleFormChange}/>
                    </Form.Group>

                    <Modal.Footer style={{justifyContent: formError.default.hidden ? 'flex-end' : 'space-between'}}>
                        <Form.Label hidden={formError.default.hidden} className="error" style={{flex: '0.7'}}>{formError.default.message}</Form.Label>
                        <div>
                            <Button variant="secondary" onClick={onHide}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Sign Up
                            </Button>
                        </div>
                    </Modal.Footer>
                </Form>

            </Modal.Body>
        </Modal>
    );
}

export default RegisterUserModal;