import "./method.css";
import React, { useState } from "react";
import { Col, Tab, Tabs } from "react-bootstrap";
import Body from "../Body";
import BasicAuthForm from "../BasicAuthForm/BasicAuthForm";
import { setItem } from "../../sessionStorage";

function MethodTab({methodSetting,setBody}) {
  const [key, setKey] = useState("get");

  const tokenHandler =(token)=> {
    setItem("app-token",token );
  }
  return (
    <Col md={8} lg={6} xs={12}>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(key) => {
            setKey(key);
           methodSetting(key);
          }}
          className=" d-flex justify-content-center my-3 mx-5 tabs"
        >
          <Tab tabClassName="method-tab" eventKey="get" title="GET"></Tab>
          <Tab tabClassName="method-tab" eventKey="post" title="POST">
            <Body title="Body --JSON content" setBody={setBody}/>
          </Tab>
          <Tab tabClassName="method-tab" eventKey="put" title="PUT">
            <Body />
          </Tab>
          <Tab tabClassName="method-tab" eventKey="delete" title="DELETE"></Tab>
          <Tab
            tabClassName="method-tab"
            eventKey="basic"
            title="BASIC AUTH"
            
          >
            <BasicAuthForm />
          </Tab>
          <Tab tabClassName="method-tab" eventKey="berear" title="BEARER">
            <Body title="Token" setBody={tokenHandler} />
          </Tab>
        </Tabs>
      </div>
    </Col>
  );
}

export default MethodTab;
