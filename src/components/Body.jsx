import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

function Body({title,setBody}) {
  // setBody("token")
  return (
    <Col md={6} lg={8} xs={8}>
      <div className="mx-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{title}</Form.Label>
    
            <Form.Control as="textarea" rows={4} onChange={(e)=>setBody(e.target.value)} />
          </Form.Group>
        </Form>
      </div>
    </Col>
  );
}

export default Body;
