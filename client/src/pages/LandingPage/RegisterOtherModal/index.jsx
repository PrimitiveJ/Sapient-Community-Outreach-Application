import React, { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import auth from '../../../utils/auth';
import stateList from '../../../utils/state-list.json';

const RegisterOtherModal = ({ active, onHide }) => {
    const getDefaultForm = () => ({
        use: false, 
        email: '',
        zipcode: ''
    });

    const [formData, setFormData] = useState({
        organizer: getDefaultForm(),
        business: getDefaultForm()
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

    /*
        todo: react gives warning here about 'changing uncontrolled input from undefined -> defined.
        let's see if we can fix this later. not an issue right now though.
    */
    const updateFormData = (event, registerType) => {
        const prevData = formData[registerType];
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [registerType]: {
                ...prevData,
                [name]: value, // <-- probably what's causing the warning
            }
        });
    }

    const renderRegisterFormWithType = registerType => {
        const data = formData[registerType] || {};
        const updater = event => updateFormData(event, registerType);

        return <>
            <h2>
                {
                    registerType === 'business'
                    ? 'Business Information' 
                    : 'Organizer Information'
                }
            </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>

                <Form.Control 
                onChange={updater} value={data.email}
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
                onChange={updater} value={data.zipcode}
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
                <Modal.Title>
                {
                    formData.business.use
                        ? 'Register as a Business Sponsor' 
                        : formData.organizer.use
                        ? 'Register as an Organizer'
                        : 'Select a registry type:'
                }
                {
                    formData.business.use && formData.organizer.use
                    ? ' and an Organizer' : ''
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
                    Register
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterOtherModal;