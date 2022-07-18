import React, { useState } from 'react';
import { 
    Modal, 
    Form,
    Col,
    Container,
    Button,
    Textarea
} from 'react-bootstrap';



const ReactionForm = ({show, hideModal}) => {


return (
    <Modal show={show} onHide={hideModal}>
    <div>
      <p>
        Character Count: /280
      </p>
      <Form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit=''
      >
        <textarea
          placeholder="Leave a reaction to this thought..."
          value='{reactionBody}'
          className="form-input col-12 col-md-9"
          onChange='handleChange'
        ></textarea>

        <Button className="btn col-12 col-md-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </Modal>
  );
};

export default ReactionForm;