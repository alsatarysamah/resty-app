import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import useHistoryContext from "../../useCon"


function BasicAuthForm(props) {
    const {dispatch}=useHistoryContext();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function submitHandler(e) {
        e.preventDefault();
        dispatch({type:"SET-USER",payload:{username:username,password:password}})
    }
    return (
        <Col md={6} lg={8} xs={8}>
        <div className='mx-5'>
            <Form onSubmit={submitHandler}>
                <Form.Label type="email">UserName</Form.Label>
                <Form.Control onChange={(e)=>{setUsername(e.target.value)}}/>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
        </Col>
    );
}

export default BasicAuthForm;