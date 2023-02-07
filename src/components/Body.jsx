import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

function Body(props) {
  function bodyHandler(e) {
    props.setBody(e.target.value);
  }
  return (
    <Col md={6} lg={3} xs={6}>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Body --JSON Content--</Form.Label>
            <Form.Control as="textarea" rows={4} onChange={bodyHandler} />
          </Form.Group>
        </Form>
      </div>
    </Col>
  );
}

export default Body;
