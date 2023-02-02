import "./home.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MethodTab from "../methodTab/methodTab";
import Search from "../Search";
import Body from "../Body";
import Result from "../Result/Result";
import { api } from "../../api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

function Home() {
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState("");
  const [result, setResult] = useState();

  const submitHandler = async () => {
    await api(url, method, body)
      .then((data) => {
        setResult(data)
      })
     
  };

  return (
    <div className="mt-5">
       <Helmet>
            <title>Resty</title>
        </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <p>http://localhost:4000/history</p>
        <Search urlSetting={setUrl} submitHandler={submitHandler} btnName="GO"/>

        <MethodTab methodSetting={setMethod} />

        <Body setBody={setBody} />

        <Result result={result} />
      </Row>
    </div>
  );
}

export default Home;
