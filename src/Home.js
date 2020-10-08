import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
function Home() {
  return (
    <Container>
          <Row>
              <Col sm={4}>Hey</Col>
              <Col>Hello</Col>
          </Row>
    </Container>
  );
}

export default Home;
