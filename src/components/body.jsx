import React from 'react';
import { Form } from 'react-bootstrap';

function Body(props) {
    return (
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Body --JSON Content--</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>  
        </div>
    );
}

export default Body;