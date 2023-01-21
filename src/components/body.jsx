import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Body(props) {

  function bodyHandler(e){
    props.setBody(e.target.value);

  }
    return (
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Body --JSON Content--</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={bodyHandler} />
            </Form.Group>
          </Form>  
        </div>
    );
}

export default Body;