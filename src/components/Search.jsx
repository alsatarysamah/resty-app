import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function Search({ urlSetting, submitHandler }) {
  const goHandler = (e) => {
    e.preventDefault();
    submitHandler();
    // const options = {
    //   url: url,
    //   method: props.method,
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //     Authorization:
    //       "Bearer " + JSON.parse(sessionStorage.getItem("userInfo")).token,
    //   },
    //   data: props.body,
    // };

    // axios(options)
    //   .then((response) => {
    //     props.resultSetting(response.data)
    //     console.log("ressssssssssss", response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     let s = new Set();
    //     JSON.parse(e.request?.responseText).errors?.forEach((element) => {
    //       s.add(element.msg);
    //       toast.error(element.msg)
    //     });
    //     console.log(s);
    //     s.size > 0
    //       ? toast.error(s.values[1])
    //       : toast.error(e.request.responseText);
    //   });
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
            onChange={(e) => {
              urlSetting(e.target.value);
            }}
            required
          />
          <div lg={6}>
            <Button
              variant="outline-warning"
              className="general-btn "
              size="lg"
              type="submit"
            >
              Go
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
}

export default Search;
