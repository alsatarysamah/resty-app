import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { getItem } from "../../sessionStorage";
import HistoryTable from "../HistoryTable/HistoryTable";
import Search from "../Search";
import "./history.css";

function History() {
  const searchHandler = async (url) => {
    console.log("search");
  };
  const historyRecords = useSelector((state) => {
    return state.history;
  });
  console.log("rendddder");
  // let token = JSON.parse(getItem("userInfo")).token;
  return (
    <div className="d-flex flex-column site mt-5">
      <Helmet>
        <title>History</title>
      </Helmet>
      {getItem("userInfo") ? (
        <Row className=" d-flex flex-column justify-content-center align-items-center">
          <Search
            submitHandler={searchHandler}
            btnName="Search"
            className="mt-5"
          />
          <Col md={8} lg={10} xs={8}>
            <HistoryTable />
          </Col>
        </Row>
      ) : (
        <div className="mx-5 my-5">
          <h5>
            You shoud signin <Link to="/signin">click here</Link>
          </h5>
        </div>
      )}
    </div>
  );
}

export default History;
