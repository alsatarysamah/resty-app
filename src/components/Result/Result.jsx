import "./result.css";
import JSONPretty from "react-json-pretty";

import React from "react";
import { Card, Col } from "react-bootstrap";

function Result({ result }) {
  return (
    <Col md={8} lg={8} xs={8}>
      <div>
        <Card className="result mt-3">
          <Card.Body>
            <Card.Title>Result</Card.Title>
            <Card.Text>
              <JSONPretty id="json-pretty" data={result}></JSONPretty>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default Result;
