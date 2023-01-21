import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Search(props) {

  const [url,setUrl]=useState();


  const goHandler = (e)=> {
    e.preventDefault();
    const options = {
      url: url,
      method: props.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization':
            "Bearer " + JSON.parse(sessionStorage.getItem("userInfo")).token
      },
      // data: {
      //   name: 'David',
      //   age: 45
      // }
    };
    
    axios(options)
      .then(response => {
        console.log(response.data);
      });
  };
  return (
    <div>
      <Form onSubmit={goHandler} className="d-flex  mt-3 mx-5" xs={12}>
        <Form.Control
          className="mx-3"
          xs={12}
          type="url"
          placeholder="Enter a URL"
          onChange={(e)=>{setUrl(e.target.value)}}
          required
        />
        <div lg={6}>
          <Button variant="outline-warning" className="general-btn " size="lg" type="submit">
            Go
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Search;
