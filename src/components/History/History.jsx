import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { getItem } from "../../sessionStorage";
import { filterHistory, resetState } from "../../store";
import HistoryTable from "../HistoryTable/HistoryTable";
import Search from "../Search";
import "./history.css";

function History() {
  const historyRecords = useSelector((state) => {
    return state.history;
  });
  const dispatch = useDispatch();
  const searchHandler = async (url) => {
    console.log({ url });
    dispatch(filterHistory(url.trim()));
  };
  const history = useSelector((state) => {
    return state.history;
  });
  console.log({ history });
  const fetchData = async () => {
    await api(
      `http://localhost:4000/history?userId=${
        JSON.parse(getItem("userInfo")).id
      }`,
      "get",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      sessionStorage.setItem("history", JSON.stringify(data));
      dispatch(resetState());
    });
  };
  useEffect(() => {
    console.log("reeeeeeeeeeeeeeeeeeeeee");

    if (getItem("userInfo")) fetchData();
  }, []);
  const allClick = (e) => {
    fetchData();
    dispatch(resetState());
  };
  return (
    <div className="d-flex flex-column site mt-5">
      <Helmet>
        <title>History</title>
      </Helmet>
      {getItem("userInfo") ? (
        <Row className=" d-flex flex-column justify-content-center align-items-center">
          <Row className="justify-content-center mb-3">
            <Search submitHandler={searchHandler} btnName="Search" />

            <Col xs={6} md={1} lg={1}>
              <Button className="general-btn m-2 w-100" size="lg" onClick={allClick}>
                All
              </Button>
            </Col>
          </Row>

          <Col md={8} lg={8} xs={10}>
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
