import React, { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import auth from '../../../utils/auth';
import stateList from '../../../utils/state-list.json';

const RegisterOtherModal = ({ active, onHide }) => {
    const [formData, setFormData] = useState({
        organizer: { use: false },
        business: { use: false },
    });

    const toggleRegistry = registerType => {
        const oldData = formData[registerType];
        
        setFormData({
            ...formData,
            [registerType]: {
                ...oldData, 
                use: !oldData.use
            }
        });
    }

    const updateFormData = (event, registerType) => {
        const prevData = formData[registerType];
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [registerType]: {
                ...prevData,
                [name]: value
            }
        });
    }

    const renderRegisterFormWithType = registerType => {
        const updater = event => updateFormData(event, registerType);

        return <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>

                <Form.Control 
                onChange={updater} 
                key="email" name="email" 
                type="email" placeholder="Enter email"
                />

                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicZipCode">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                onChange={updater}
                name="zipcode" key="zipcode" 
                type="zipcode" placeholder="Zip Code" 
                />
            </Form.Group>
        </>
    }

    console.log(formData);

    return (
        <Modal show={active} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Register
                {
                    formData.business
                        ? ' as a Business Sponsor' 
                        : ' as an Organizer'
                }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Register as a Business Sponsor
                    <label>
                        <input type="checkbox" name="useBusiness"
                        checked={formData.business.use}
                        onChange={() => toggleRegistry('business')}
                        />
                    </label>            
                </p>

                <p>Register as an Event Organizer
                    <label>
                        <input type="checkbox" name="useOrganizer"
                        checked={formData.organizer.use}
                        onChange={() => toggleRegistry('organizer')}
                        />
                    </label>            
                </p>

                <Form>
                    {formData.business.use && renderRegisterFormWithType('business')}
                    {formData.organizer.use && renderRegisterFormWithType('organizer')}
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterOtherModal;