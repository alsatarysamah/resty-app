import "./home.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MethodTab from "../MethodTab/MethodTab";
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
    await api(url, method, body).then((data) => {
      setResult(data);
      console.log({ result });
    });
    console.log("result==>",typeof result);
    const record = {
      url: url,
      method: method,
      response: (result)||null,
      userId: JSON.parse(sessionStorage.getItem("userInfo")).id,
    };
    console.log({ record });
    await api("http://localhost:4000/history", "post", record).then((data) => {
      
      console.log({ data });
    });
  };

  return (
    <div className="mt-5">
      <Helmet>
        <title>Resty</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <p>https://pokeapi.co/api/v2/pokemon</p>

        <Search
          urlSetting={setUrl}
          submitHandler={submitHandler}
          btnName="GO"
        />

        <MethodTab methodSetting={setMethod} />

        <Body setBody={setBody} />

        <Result result={result} />
      </Row>
    </div>
  );
}

export default Home;
