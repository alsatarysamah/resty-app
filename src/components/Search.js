import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function Search({ urlSetting, submitHandler, btnName }) {
  const [item, setItem] = useState();
  const goHandler = (e) => {
    e.preventDefault();
    
    submitHandler(item.trim());
  };
  const handleChange = (e) => {
    setItem(e.target.value);
    if (urlSetting) urlSetting(e.target.value);
  };
  return (
    <Col md={12} lg={7} xs={18}>
      <div>
        <ToastContainer />
        <Form onSubmit={goHandler} className="d-flex  mt-1 mx-5" xs={10}>
          <Form.Control
            className="mx-3"
            xs={12}
            type="url"
            placeholder="Enter a URL"
            onChange={handleChange}
            required
          />
          <div lg={6}>
            <Button
              variant="outline-warning"
              className="general-btn "
              size="lg"
              type="submit"
            >
              {btnName}
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
}

export default Search;
