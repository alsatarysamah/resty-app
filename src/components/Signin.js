import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { toast, ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
// import { Store } from "../store";
import { toast, ToastContainer } from "react-toastify";
import superAgent from "superagent";
import base64 from "base-64";
import * as axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const options = {
        url: "http://localhost:4000/signin",
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
        },
      };

      axios(options).then((response) => {
        console.log(response.data.user);
        sessionStorage.setItem("userInfo", JSON.stringify(response.data.user));
        navigate("/");
      });
    } catch (err) {
      toast.error("Invalid Username or Password");
      console.log(err);
    }
  };

  return (
    <Container>
          <ToastContainer />

      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Row className=" d-flex justify-content-center align-items-center mt-5">
        <Col md={8} lg={5} xs={12}>
          <div className=""></div>
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center  ">Signin</h2>
                <div className="mb-1">
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => setEmail(e.target.value)}
                        autocomplete="off"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="text-center">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        autocomplete="off"
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button
                        className="general-btn "
                        variant="primary"
                        type="submit"
                      >
                        Signin
                      </Button>
                    </div>
                    <div className="mt-3">
                      New customer?{" "}
                      <Link to={`/signup`}>Create your account</Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
//?redirect=${redirect}
