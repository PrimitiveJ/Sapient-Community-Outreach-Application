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
        this.props.onHide();

        // Construct the form payload to send off to the server
        const eventForm = {
            title: this.state.title,
            description: this.state.description,
            location: {city: this.state.city, state: this.state.state},
            date: this.state.date,
            image: this.state.image,
            time: this.state.time,
            createdAt: (new Date()).toDateString()
        }

        // Make post request to server
        const { data: { createEvent: postEventResponse }} = (await this.props.postFunc({
            variables: { author: auth.getProfile().data.username, inputPayload: eventForm }
        }));

        // Validate post request response
        if (postEventResponse.ok) {
            window.location.assign('/user-home');
        } else {
            window.alert('Error posting: ', postEventResponse.message);
        }
    }


    render(props) {

        return (
            <Modal show={this.props.isShown} onHide={this.props.hideModal}>
                <ModalHeader>
                    <h2>Event Information:</h2>
                </ModalHeader>

                <ModalBody>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>Event Title:</label>

                            <input 
                            name="title" type="text"
                            onChange={this.handleFormChange}
                            className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>Description:</label>

                            <textarea 
                            name="description" rows='4'
                            onChange={this.handleFormChange}
                            className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Date of Event:</label>

                            <input name="date" type="text"
                            onChange={this.handleFormChange}
                            className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Time of Event:</label>

                            <input name="time" type="text"
                            onChange={this.handleFormChange}
                            className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <label>City</label>

                            <input name="city" type="text"
                            onChange={this.handleFormChange}
                            className="form-control"/>

                            <label>State</label>

                            <Form>
                                <Form.Control 
                                as="select" 
                                name="state"
                                aria-label="Default select example" 
                                onChange={this.handleFormChange}>
                                    <option>Select your State</option>

                                    {/* Procedural rendering of state list */}
                                    {everystate.map(state => <option key={state}>{state}</option>)}
                                </Form.Control>
                            </Form>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Image:</label>
                        <input type="file" className="form-control-file" name="uploaded_file"/>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    <Button color="danger" onClick={this.props.hideModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
