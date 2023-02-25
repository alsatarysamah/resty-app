import "./home.css";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import MethodTab from "../MethodTab/MethodTab";
import Search from "../Search";
import Body from "../Body";
import Result from "../Result/Result";
import { api } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { getItem, setItem } from "../../sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../../store/index";
import { useNavigate } from "react-router-dom";
import SpinnerRect from "../Spinner/Spinner";

function Home() {
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState({});
  const [url, setUrl] = useState();
  const [response, setResponse] = useState();
  const [spinnerShow, setSpinnerShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allowedMethods = ["get", "post", "put", "delete"]; 

  const submitHandler = async (e) => {
    if(allowedMethods.includes(method)){
    setSpinnerShow(true);
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
        setSpinnerShow(false);
        setResponse(data);
      });
      // saveRecord(res);
      const record = {
        url: url,
        method: method,
        response: res,
        userId: JSON.parse(getItem("userInfo")).id,
      };
      if (res!=null)
      api(
        "http://localhost:5000/history",
        "post",
        JSON.parse(getItem("userInfo")).token,
        record
      ).then((data) => {
        dispatch(addHistory(data));
        toast.success("Added");
      });
    } else {
      // toast.error("You should signin")
      navigate("/signin");
    }}
    else{
      toast.error("Choose HTTP method")
    }
  };

  const urlSetting = (url) => {
    setUrl(url);
  };
 
  return (
    <div className="mt-5">
      <Helmet>
        <title>Resty</title>
      </Helmet>
      <ToastContainer
        position="top-center"
        style={{ width: "200px", height: "100px" }}
      />
      <Row className=" d-flex flex-column justify-content-center align-items-center">
      

        <Search
          urlSetting={urlSetting}
          submitHandler={submitHandler}
          btnName="GO"
        />

        <MethodTab methodSetting={setMethod} setBody={setBody} />

        <Result result={response} size={8} spinnerShow={spinnerShow} />
      </Row>
    </div>
  );
}

export default Home;
