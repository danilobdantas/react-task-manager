import React, { useState } from 'react';
import {Button, Form, Jumbotron, Modal} from 'react-bootstrap';
import { navigate, A } from 'hookrouter';

function NewTask() {
  return (
    <div>
      <h3 className="text-center">Insert</h3>
      <Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="type the task"
              minLength="5"
              maxLength="100"
              required />
              <Form.Control.Feedback type="invalid">
                Task must have 5 characters at least
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
              Insert</Button>
              &nbsp;
            <A href="/" className="btn btn-light">Go back</A>
          </Form.Group>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            New Task add successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success">
              Keep going
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default NewTask;
