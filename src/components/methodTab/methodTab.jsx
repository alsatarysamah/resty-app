import "./method.css";
import React, { useState } from "react";
import {  Tab, Tabs } from "react-bootstrap";

function MethodTab(props) {
  const [key, setKey] = useState("get");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(key) => {
       setKey(key)
          props.methodSetting(key)
        }}
        className=" d-flex justify-content-center my-3 mx-5 tabs"
      >
        <Tab tabClassName="method-tab" eventKey="get" title="GET"></Tab>
        <Tab tabClassName="method-tab" eventKey="post" title="POST"></Tab>

        <Tab tabClassName="method-tab" eventKey="put" title="PUT"></Tab>
        <Tab tabClassName="method-tab" eventKey="delete" title="DELETE"></Tab>
        <Tab tabClassName="method-tab" title="BASIC AUTH"></Tab>
        <Tab tabClassName="method-tab" title="BEARER"></Tab>
      </Tabs>
    </div>
  );
}

export default MethodTab;
