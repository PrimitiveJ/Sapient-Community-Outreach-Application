/*

    Page: EventCreationPage

    Purpose: Contains the modal for all possible input fields related
    to creating a new event.

*/

import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const everystate = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Swindonia',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]

export default class EventCreationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            title: '',
            description: '',
            date: '',
            time: '',
            location: {},
            city: '',
            state: ''

        };

        this.toggle = this.toggle.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this)
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    toggle() {
        this.setState({
            ...this.state,
            modal: !this.state.modal
        });
    }
    handleChangeTitle(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }
    handleChangeDesc(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        });
    }
    handleChangeDate(event) {
        this.setState({
            ...this.state,
            date: event.target.value
        });
    }
    handleChangeTime(event) {
        this.setState({
            ...this.state,
            time: event.target.value
        });
    }
    handleChangeLocation(event) {
        this.setState({
            ...this.state,
            location: {
                city: this.state.city,
                state: this.state.state
            }
        });
    }


    handleSubmit(event) {
        event.preventDefault();
    }


    render(props) {
        return (

            <div>
                <h1>Create Event Button</h1>
                <Button color="success"
                    onClick={
                        this.toggle
                }>Create Event</Button>
                <Modal show={
                    this.state.modal
                }>
                    <form onSubmit={
                        this.handleSubmit
                    }>
                        <ModalHeader><h1>Event Information:</h1></ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Event Title:</label>
                                    <input type="text"
                                        value={
                                            this.state.title
                                        }
                                        onChange={
                                            this.handleChangeTitle
                                        }
                                        className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Description:</label>
                                    <textarea rows='4'
                                        value={
                                            this.state.description
                                        }
                                        onChange={
                                            this.handleChangeDesc
                                        }
                                        className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Date of Event:</label>
                                    <input type="text"
                                        value={
                                            this.state.date
                                        }
                                        onChange={
                                            this.handleChangeDate
                                        }
                                        className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Time of Event:</label>
                                    <input type="text"
                                        value={
                                            this.state.time
                                        }
                                        onChange={
                                            this.handleChangeTime
                                        }
                                        className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>City</label>
                                    <input type="text"
                                        value={
                                            this.state.city
                                        }
                                        onChange={
                                            this.handleChangeLocation
                                        }
                                        className="form-control"/>
                                    <label>State</label>
                                    <Form>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select your State</option>
                                        {
                                        everystate.map(state => {
                                            return <option>{state}</option>
                                    })
                                    } </Form.Select>
                                    </Form>
                                </div>
                            </div>
                            <form action="/stats" enctype="multipart/form-data" method="post">
                                <div class="form-group">
                                    <label>Image:</label>
                                    <input type="file" class="form-control-file" name="uploaded_file"/>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary"/>
                            <Button color="danger"
                                onClick={
                                    this.toggle
                            }>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        );
    }
}
