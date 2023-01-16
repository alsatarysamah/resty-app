import "./home.css";
import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";

function Home(props) {
  const [active, setActive] = useState(false);
  const [key, setKey] = useState("home");
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
            <Button className="general-btn">Go</Button>
          </Form>
        </Col>
        <Col md={8} lg={6} xs={12}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="xxxx d-flex justify-content-center my-3 mx-5 "
            tabClassName="xxxx"
          >
            <Tab  eventKey="get" title="GET"></Tab>
            <Tab eventKey="post" title="POST"></Tab>
            <Tab eventKey="put" title="PUT"></Tab>
            <Tab eventKey="delete" title="DELETE"></Tab>
            <Tab eventKey="basic" title="BASIC AUTH"></Tab>
            <Tab eventKey="bearer" title="BEARER"></Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
