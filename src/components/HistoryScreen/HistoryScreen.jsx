import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api";
import { getItem } from "../../sessionStorage";
import { deletAll, filterHistory, resetState } from "../../store";
import Auth from "../Auth";
import HistoryTable from "../HistoryTable/HistoryTable";
import Search from "../Search";
import "./history.css";

function History() {
  const historyRecords = useSelector((state) => {
    return state.history;
  });
  const dispatch = useDispatch();
  const searchHandler = async (url) => {
  
    dispatch(filterHistory(url.trim()));
  };
  const history = useSelector((state) => {
    return state.history;
  });

  const fetchData = async () => {
    await api(
      `http://localhost:5000/history`,
      "get",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      sessionStorage.setItem("history", JSON.stringify(data));
      dispatch(resetState(data));
    });
  };
  useEffect(() => {
    if (getItem("userInfo")) fetchData();
  }, []);
  const allClick = (e) => {
    fetchData();
    dispatch(resetState());
  };
  const deleteAllCLick = async (id) => {
    await api(
      `http://localhost:5000/history/1?all=1`,
      "delete",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      dispatch(deletAll());
      toast.success("Delete All Records");
   
    });
  };
  return (
    <div className="d-flex flex-column site mt-5">
      <Helmet>
        <title>History</title>
      </Helmet>

      {getItem("userInfo") ? (
        <Row className="justify-content-around  mb-3">
          <Row className="justify-content-center  ">
            <Search submitHandler={searchHandler} btnName="Search" />

            <Col xs={3} md={3} lg={1}>
              <Button
                className="general-btn  w-100 mt-2 "
                size="lg"
                onClick={allClick}
                // style={{ fontSize: "14px" }}
              >
                All
              </Button>
            </Col>
            <Auth role="admin">
              <Col xs={3} md={3} lg={1}>
                <Button
                  className="general-btn mt-2 "
                  size="lg"
                  onClick={deleteAllCLick}
                  title="Delete all records"
                >
                  <i className="fa fa-trash "></i>
                </Button>
              </Col>
            </Auth>
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
