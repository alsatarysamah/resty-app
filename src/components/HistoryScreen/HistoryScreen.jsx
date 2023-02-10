import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { api } from "../../api";
import useHistoryContext from "../../useCon";
import HistoryTable from "../HistoryTable/HistoryTable";
import Search from "../Search";
import "./historyScreen.css";

function HistoryScreen(props) {
  // const [historyRecords, setHistoryRecords] = useState([]);
  const{state}=useHistoryContext()
  const searchHandler = async (url) => {
   console.log("Search")
  };
  useEffect(() => {
    const fetchData = async () => {
      await api("http://localhost:4000/history", "get", "").then((data) => {
        // setHistoryRecords(data);
        sessionStorage.setItem("history", JSON.stringify(data));
      });
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column  site mt-5 w-100">
      <Helmet>
        <title>History</title>
      </Helmet>
      <Row className=" d-flex flex-column justify-content-stretch align-items-center ">
        <Search
          submitHandler={searchHandler}
          btnName="Search"
          className="mt-5 "
        />
        <Col md={8} lg={8} xs={8}>
          <HistoryTable historyRecords={state.historyRecords} />
        </Col>
      </Row>
    </div>
  );
}

export default HistoryScreen;
