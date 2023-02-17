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
import { getItem } from "../../sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../../store/index";

function Home() {
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState();
  const [response, setResponse] = useState();
  const dispatch = useDispatch();
  const historyRecords=useSelector((state)=>{return state.history})

  const submitHandler = async (e) => {
    let res;
    await api(
      url,
      method,
      body,
      getItem("username"),
      getItem("password"),
      getItem("app-token"),
    ).then((data) => {
      res = data;
      setResponse(data);
    });

    const record = {
      url: url,
      method: method,
      response: res,
      userId: JSON.parse(getItem("userInfo")).id,
    };

    api(
      "http://localhost:4000/history",
      "post",
      record,
      "",
      "",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      dispatch(addHistory(data));
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await api("http://localhost:4000/history", "get", "","","",JSON.parse(getItem("userInfo")).token).then((data) => {
        sessionStorage.setItem("history", JSON.stringify(data));
      });
    };
    fetchData();
  }, [historyRecords]);
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


        <Result result={response} />
      </Row>
    </div>
  );
}

export default Home;
