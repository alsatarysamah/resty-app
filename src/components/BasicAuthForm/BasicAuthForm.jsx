import React from 'react';
import { Col, Form } from 'react-bootstrap';

function BasicAuthForm(props) {
    return (
        <Col md={6} lg={8} xs={8}>
        <div className='mx-5'>
            <Form>
                <Form.Label type="email">UserName</Form.Label>
                <Form.Control/>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'/>
            </Form>
        </div>
        </Col>
    );
}

export default BasicAuthForm;