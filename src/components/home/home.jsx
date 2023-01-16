import "./home.css";
import React, { useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import MethodTab from "../methodTab/methodTab";

function Home(props) {

  return (
    <div className="mt-5">
      <Row className=" d-flex justify-content-center align-items-center">
        <Col md={12} lg={7} xs={18}>
          <Form className="d-flex  mt-3 mx-5" xs={12}>
            <Form.Control
              className="mx-3"
              xs={12}
              type="url"
              placeholder="Enter a URL"
            />
            <div lg={6}>
            <Button variant="outline-warning" className="general-btn " size="lg" >
              Go
            </Button>
            </div>
          </Form>
        </Col>
        <Col md={8} lg={6} xs={12}>
         <MethodTab/> 
        </Col>
      </Row>
    </div>
  );
}

export default Home;
