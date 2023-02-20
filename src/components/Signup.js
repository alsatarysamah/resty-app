import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import { Store } from "../store";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("password do not match ");
      return;
    }

    axios
      .post("http://localhost:4000/signup", {
        username,
        password,
      })
      .then((data) => {
        sessionStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/signin");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Invalid sign up ");
      });
  };
  return (
    <>
      <Container className="small-container">
        <Helmet>
          <title>Signup</title>
        </Helmet>

        <Row className=" d-flex justify-content-center align-items-center mt-5">
          <Col md={8} lg={10} xs={12}>
            <div className=""></div>
            <ToastContainer />
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center  ">Signup</h2>
                  <div className="mb-1">
                    <Form onSubmit={signupHandler}>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={password}
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          className="general-btn"
                          variant="primary"
                          type="submit"
                        >
                          Sign Up
                        </Button>
                      </div>
                      <div className="mt-3">
                        Already have an account?{" "}
                        <Link to={`/signin`}>Sign-In</Link>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
