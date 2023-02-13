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
import useHistoryContext from "../../useCon";

function Home() {
  const { state, dispatch } = useHistoryContext();
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState();
  const [response, setResponse] = useState();


  console.log({state});
  const submitHandler = async (e) => {
    let res;
    await api(url, method, body).then((data) => {
      res = data;
      setResponse(data);
    });

    const record = {
      url: url,
      method: method,
      response: res,
      userId: JSON.parse(sessionStorage.getItem("userInfo")).id,
    };

    api("http://localhost:4000/history", "post", record).then((data) => {
      dispatch({ type: "CREATE", payload: data });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await api("http://localhost:4000/history", "get", "").then((data) => {
        sessionStorage.setItem("history", JSON.stringify(data));
      });
    };
    fetchData();
  }, [state]);

  return (
    <div className="mt-5">
      <Helmet>
        <title>Resty</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <p>https://pokeapi.co/api/v2/pokemon</p>
        <p>http://localhost:4000/history</p>
        <p>https://api.covid19api.com/summary</p>
        <Search
          urlSetting={setUrl}
          submitHandler={submitHandler}
          btnName="GO"
        />

        <MethodTab methodSetting={setMethod} />

        {/* <Body setBody={setBody} /> */}

        <Result result={response} />
      </Row>
    </div>
  );
}

export default Home;
