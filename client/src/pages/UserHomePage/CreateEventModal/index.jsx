/*

    Page: EventCreationPage

    Purpose: Contains the modal for all possible input fields related
    to creating a new event.

*/

import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import everystate from '../../../utils/state-list.json';
import auth from '../../../utils/auth';

/*
    Event creation modal component
*/
export default class EventCreationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            date: '',
            time: '',
            city: '',
            state: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    isShown() {
        return this.isShown
    }   

    /*
        Update class component state when an input field changes 
        in the form
    */
    handleFormChange(event) {
        let { name, value } = event.target;

        // Special case for state selection, since we need [event.target.value]
        if (name === 'state') {
            value = event.target.value;
        }

        // Update modal state
        this.setState({
            ...this.state,
            [name]: value
        });
    }


    /*
        Process event form submission
    */
    async handleSubmit(event) {
        event.preventDefault();
        this.props.hideModal();

        // Construct the form payload to send off to the server
        const eventForm = {
            title: this.state.title.trim(),
            description: this.state.description.trim(),
            location: {city: this.state.city, state: this.state.state},
            date: this.state.date.trim(),
            image: this.state.image,
            time: this.state.time.trim(),
            // createdAt: (new Date()).toDateString()
        }


        // Input validation
        let windowAlert;

        if (!eventForm.title) { windowAlert = 'must include title'; delete eventForm.title; };
        if (!eventForm.description) { windowAlert = 'must include description'; delete eventForm.description; };
        if (!eventForm.date) { windowAlert = 'must include a set date'; delete eventForm.date; };

        if (windowAlert) return window.alert('Error: ' + windowAlert);
        

        // creating state for keeping track of error messages so we can update state to display them
        console.log('form data: ', eventForm);
        delete eventForm.postFailed;
        delete eventForm.errorMsg;

        // Make post request to server
        const { data: { createEvent: postEventResponse }} = (await this.props.postFunc({
            variables: { author: auth.getProfile().data.username, inputPayload: eventForm }
        }));

        // Validate post request response
        if (postEventResponse.ok) {
            window.location.assign('/user-home');
        } else {
            // window.alert('Error posting: ', postEventResponse.message);
        }
    }


    render(props) {

        return (
            <Modal show={this.props.isShown} onHide={this.props.hideModal}>
                <ModalHeader>
                    <Modal.Title>Event Information:</Modal.Title>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <Form.Label>Event Title:</Form.Label>

                                <input 
                                name="title" type="text"
                                onChange={this.handleFormChange}
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                            <Form.Label>Description:</Form.Label>

                                <textarea 
                                style={{marginBottom: '10px'}}
                                name="description" rows='4'
                                onChange={this.handleFormChange}
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                            <Form.Label>Date of Event:</Form.Label>

                                <input name="date" type="text"
                                onChange={this.handleFormChange}
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                            <Form.Label>Time of Event:</Form.Label>

                                <input name="time" type="text"
                                onChange={this.handleFormChange}
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12">
                            <Form.Label>City</Form.Label>

                                <input name="city" type="text"
                                onChange={this.handleFormChange}
                                className="form-control"/>

                                <Form.Label>State</Form.Label>

                                <Form.Control 
                                as="select" 
                                name="state"
                                aria-label="Default select example" 
                                onChange={this.handleFormChange}>
                                    <option>Select your State</option>

                                    {/* Procedural rendering of state list */}
                                    {everystate.map(state => <option key={state}>{state}</option>)}
                                </Form.Control>
                            </div>
                        </div>

                        <div className="form-group">
                            <Form.Label>Image:</Form.Label>
                            <input type="file" className="form-control-file" name="uploaded_file"/>
                        </div>

                        <Form.Label 
                        style={{
                            marginTop: '20px', 
                            color: '#f3e37c', 
                            display: this.state.postFailed ? this.state.errorMsg : 'none'
                        }}>
                            Something
                        </Form.Label>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    <Button color="danger" onClick={this.props.hideModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
