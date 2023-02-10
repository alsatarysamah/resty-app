import "./result.css";
// import React  from "react";
import JSONPretty from "react-json-pretty";
// function Result(props)
// {
//     return (
//         <section>
//           <JSONPretty id="json-pretty" data={props.result} ></JSONPretty>
//         </section>
//       );
// }

// export default Result;

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
