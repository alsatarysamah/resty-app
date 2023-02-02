import "./home.css";
import React, { useEffect, useState } from "react";
import {  Row } from "react-bootstrap";
import MethodTab from "../methodTab/methodTab";
import Search from "../Search";
import Body from "../Body";
import Result from "../Result/Result";
import { api } from "../../api";

function Home() {
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState('');
  const [result, setResult] = useState();
    
  function submitHandler() {
    api(url, method, body, setResult);
  }

  
  return (
    <div className="mt-5">
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <Search urlSetting={setUrl} submitHandler={submitHandler} />

        <MethodTab methodSetting={setMethod} />

        <Body setBody={setBody} />

        <Result result={result} />
      </Row>
    </div>
  );
}

export default Home;
