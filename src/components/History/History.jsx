import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { api } from "../../api";
import Search from "../Search";
import "./history.css";

function History(props) {
  const [historyRecords, setHistoryRecords] = useState([]);
  const searchHandler = async (url) => {
    await api(url, "get", "").then((data) => {
      setHistoryRecords(data);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await api("http://localhost:4000/history", "get", "").then((data) => {
        setHistoryRecords(data);
      });
    };
    fetchData();
  }, []);
  //'http://localhost:3000/analyze?imageurl=https://google.com'
  //'http://localhost:4000/history?url=https://api.samah.com/'
  const ResultHandler = async () => {};
  return (
    <div className="d-flex flex-column site mt-5">
      <Helmet>
        <title>History</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <Search submitHandler={searchHandler} btnName="Search" />
       <historyRecords/>
      </Row>
    </div>
  );
}

export default History;
