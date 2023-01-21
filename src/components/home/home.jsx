import "./home.css";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MethodTab from "../methodTab/methodTab";
import axios from "axios";
import Search from "../search";
import Body from "../body";

function Home(props) {

  const [method, setMethod] = useState("get");


  useEffect(() => {

    // axios
    //   .get("http://localhost:4000/history", {
    //     headers: {
    //       Authorization:
    //         "Bearer " + JSON.parse(sessionStorage.getItem("userInfo")).token,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  function methodSetting(method) {
setMethod(method)
  }
 
  return (
    <div className="mt-5">
      <Row className=" d-flex flex-column justify-content-center align-items-center">
        <Col md={12} lg={7} xs={18}>
          <Search method={method}/>
        </Col>
        <Col md={8} lg={6} xs={12}>
          <MethodTab methodSetting={methodSetting}/>
        </Col>
        <Col md={8} lg={4} xs={8}>
          <Body/>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
