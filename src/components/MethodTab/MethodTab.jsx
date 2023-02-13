import "./method.css";
import React, { useState } from "react";
import { Col, Tab, Tabs } from "react-bootstrap";
import Result from "../Result/Result";
import Body from "../Body";
import BasicAuthForm from '../BasicAuthForm/BasicAuthForm';


function MethodTab(props) {
  const [key, setKey] = useState("get");

  return (
    <Col md={8} lg={6} xs={12}>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(key) => {
            setKey(key);
            props.methodSetting(key);
          }}
          className=" d-flex justify-content-center my-3 mx-5 tabs"
        >
          <Tab tabClassName="method-tab" eventKey="get" title="GET"></Tab>
          <Tab tabClassName="method-tab" eventKey="post" title="POST">
            <Body title="Body --JSON content"/>
          </Tab>
          <Tab tabClassName="method-tab" eventKey="put" title="PUT">
            <Body />
          </Tab>
          <Tab tabClassName="method-tab" eventKey="delete" title="DELETE"></Tab>
          <Tab
            tabClassName="method-tab"
            eventKey="basic"
            title="BASIC AUTH"
            onClick={() => {
              console.log("tab click");
            }}
          >
          <BasicAuthForm/>
          </Tab>
          <Tab tabClassName="method-tab" eventKey="berear" title="BEARER"><Body title="Token"/></Tab>
        </Tabs>
      </div>
    </Col>
  );
}

export default MethodTab;
