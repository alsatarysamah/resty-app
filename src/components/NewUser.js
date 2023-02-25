import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getItem } from "../sessionStorage";
import { api } from "../api";
export default function NewUser({ btnName, title, signInDiv, url }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    const role = "user";
    const token = getItem("userInfo")?JSON.parse(getItem("userInfo")).token:"";
    e.preventDefault();
    await api(
      url,
      "post",
       token,
      { username, password, firstName, lastName, role }
    ).then((data) => {
    
      if (getItem("userInfo")) navigate("/users");
    else  if(data) navigate("/signin")
     
    });
    e.target.reset()
  };
 

  return (
    <>
      <Container className="small-container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ToastContainer
        position="top-center"
        style={{ width: "200px", height: "100px" }}
      />
        <Row className=" d-flex justify-content-center align-items-center mt-5">
          <Col md={8} lg={10} xs={12}>
            <div className=""></div>

            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center  ">{title}</h2>
                  <div className="mb-1">
                    <Form onSubmit={signupHandler}>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          className="general-btn mb-2"
                          variant="primary"
                          type="submit"
                        >
                          {btnName}
                        </Button>
                      </div>
                      {signInDiv ? (
                        <div className="mt-3">
                          Already have an account?{" "}
                          <Link to={`/signin`}>Sign-In</Link>
                        </div>
                      ) : null}
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
