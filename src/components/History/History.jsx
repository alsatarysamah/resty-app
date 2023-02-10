import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { json } from "react-router-dom";
import { api } from "../../api";
import HistoryTable from "../HistoryTable/HistoryTable";
import Search from "../Search";
import "./history.css";

function History(props) {
  const searchHandler = async (url) => {
   console.log("search")
  };


 
  
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
        <Col md={8} lg={10} xs={8}>
          <HistoryTable  />
          
        </Col>
      </Row>
    </div>
  );
}

export default History;
