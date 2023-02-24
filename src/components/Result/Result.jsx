import "./result.css";
import JSONPretty from "react-json-pretty";

import React from "react";
import { Card, Col } from "react-bootstrap";
import SpinnerRect from "../Spinner/Spinner";

function Result({ result,size,spinnerShow }) {
  return (
    <Col md={size} lg={size} xs={size}>
      <div>
        <Card className="result mt-3">
          <Card.Body>
            <Card.Title>Result</Card.Title>
            <Card.Text>
              {!spinnerShow ?<JSONPretty id="json-pretty" data={result}></JSONPretty>:<SpinnerRect/>}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default Result;
