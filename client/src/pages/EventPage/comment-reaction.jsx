import React, {useState, useRef} from "react";
import "./style.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../assets/images/lake-cleanup.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import EventComments from './event-comments'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';


function commentReaction (){
return (
    <Form>
    <h1>Reply to Comment comment goes here</h1>
  <Form.Group className="mb-3" controlId="commentInput">
    <Form.Label>Username</Form.Label>
    <Form.Control type="textarea" placeholder="Leave a reply" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
            Submit
          </Button>
  </Form>
)}

export default CommentReaction