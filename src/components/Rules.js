import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup } from 'react-bootstrap';
function Rules() {
  return (
    <Container>
            <h1>Rules</h1>
            <ListGroup>
  <ListGroup.Item variant="success">1. Please check for proper internet connectivity</ListGroup.Item>
  <ListGroup.Item variant="success">2. This test will take place in full screen mode. Don't ty to come out as it will result in penalty</ListGroup.Item>
  <ListGroup.Item variant="success">3. Please give the permission for Video and Audio</ListGroup.Item>
  <ListGroup.Item variant="success">4. Switching of tabs will not be allowed</ListGroup.Item>
  <ListGroup.Item variant="success">5. Complete the test in assigned time</ListGroup.Item>
</ListGroup>
    </Container>
  );
}

export default Rules;
