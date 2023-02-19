import "./home.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MethodTab from "../MethodTab/MethodTab";
import Search from "../Search";
import Body from "../Body";
import Result from "../Result/Result";
import { api } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { getItem } from "../../sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../../store/index";
import { useNavigate } from "react-router-dom";

function Home() {
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState();
  const [response, setResponse] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useSelector((state) => {
    return state.history;
  });

  const submitHandler = async (e) => {
    let res;
    if (getItem("userInfo")) {
      await api(
        url,
        method,
        getItem("app-token"),
        body,
        getItem("username"),
        getItem("password")
      ).then((data) => {
        res = data;
        setResponse(data);
      });
      // saveRecord(res);
      const record = {
        url: url,
        method: method,
        response: res,
        userId: JSON.parse(getItem("userInfo")).id,
      };

      api(
        "http://localhost:4000/history",
        "post",
        JSON.parse(getItem("userInfo")).token,
        record
      ).then((data) => {
        dispatch(addHistory(data));
      });
    } else {
      // toast.error("You should signin")
      navigate("/signin");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await api(
        "http://localhost:4000/history",
        "get",
        JSON.parse(getItem("userInfo")).token
      ).then((data) => {
        sessionStorage.setItem("history", JSON.stringify(data));
      });
    };
    if (getItem("userInfo")) fetchData();
  }, [history]);
  return (
    <div className="mt-5">
      <Helmet>
        <title>Resty</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <p>https://pokeapi.co/api/v2/pokemon</p>
        <p>http://localhost:4000/history</p>
        <p>https://api.covid19api.com/summary</p>
        <ToastContainer />
        <Search
          urlSetting={setUrl}
          submitHandler={submitHandler}
          btnName="GO"
        />

        <MethodTab methodSetting={setMethod} setBody={setBody} />

        <Result result={response} />
      </Row>
    </div>
  );
}

export default Home;
