import React, {useState, useRef} from "react";
import Button from 'react-bootstrap/Button';
import CommentReaction from './CommentReaction'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';


function CommentForm (){
return (
    <Form>
    <h1>Leave a Comment</h1>
  <Form.Group className="mb-3" controlId="commentInput">
    <Form.Label>Username</Form.Label>
    <Form.Control type="textarea" placeholder="Leave a comment" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
            Submit
          </Button>
  </Form>
)}

export default CommentForm