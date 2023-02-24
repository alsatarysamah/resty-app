import "./home.css";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import MethodTab from "../MethodTab/MethodTab";
import Search from "../Search";
import Body from "../Body";
import Result from "../Result/Result";
import { api } from "../../api";
import { toast } from "react-toastify";
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
  const history = useSelector((state) => {
    return state.history;
  });

  const submitHandler = async (e) => {
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
      // if (res!=null)
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
    }
  };

  const urlSetting = (url) => {
    setUrl(url);
  };
  const fetchData = async () => {
    await api(
      `http://localhost:5000/user`,
      "get",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      console.log({data});
      setItem("app-users", JSON.stringify(data));
    });
  };

  useEffect(() => {
    if (getItem("userInfo") && JSON.parse(getItem("userInfo")).role == "admin")
      fetchData();
  }, []);
  return (
    <div className="mt-5">
      <Helmet>
        <title>Resty</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <p>https://pokeapi.co/api/v2/pokemon</p>
        <p>http://localhost:5000/history</p>
        <p>https://api.covid19api.com/summary</p>

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
