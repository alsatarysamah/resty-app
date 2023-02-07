import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { api } from "../../api";
import Carousel from "../Carousele";
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
        console.log({ data });
        // localStorage.setItem("history")
      });
      
    };
    fetchData();
  }, []);
  console.log({historyRecords})
 
  const ResultHandler = async () => {};
  return (
    <div className="d-flex flex-column site mt-5">
      <Helmet>
        <title>History</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <Search
          submitHandler={searchHandler}
          btnName="Search"
          className="mt-5"
        />
        {/* <historyRecords/> */}
        <Col md={8} lg={6} xs={8}>
          {historyRecords&&<Carousel historyRecords={historyRecords} active={0} />}
          
        </Col>
      </Row>
    </div>
  );
}

export default History;
