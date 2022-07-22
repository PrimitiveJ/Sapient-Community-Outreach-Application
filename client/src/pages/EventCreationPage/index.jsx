/*

    Page: EventCreationPage

    Purpose: Contains the modal for all possible input fields related
    to creating a new event.

*/

import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import everystate from '../../utils/state-list.json';
import auth from '../../utils/auth';
export default class EventCreationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            date: '',
            time: '',
            location: {},
            city: '',
            state: '',
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this)
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    isShown() {
        return this.isShown
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


    async handleSubmit(event) {
        event.preventDefault();
        this.props.onHide();

        const form = {
            title: this.state.title,
            description: this.state.description,
            location: {city: this.state.city, state: this.state.state},
            date: this.state.date,
            image: this.state.image,
            time: this.state.time,
            createdAt: Date.now()
        }
        console.log('form data:', form);

        const data = (await this.props.postFunc({
            variables: { author: auth.getProfile().data.username, inputPayload: form }
        })).data.createEvent;

        
        window.location.assign('/user-home');
    }


    render(props) {

        return (

            <div>
                {/* <h1>Create Event Button</h1>
                <Button color="success"
                    onClick={
                        this.toggle
                }>Create Event</Button> */}
                <Modal show={
                    this.props.isShown
                }>
                    <form onSubmit={
                        this.handleSubmit
                    }>
                        <ModalHeader><h2>Event Information:</h2></ModalHeader>
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
                                            return <option onChange={this.handleChangeLocation}>{state}</option>
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
                            <Button onClick={this.handleSubmit}>Submit</Button>
                            <Button color="danger"
                                onClick={
                                    this.props.onHide
                            }>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        );
    }
}
