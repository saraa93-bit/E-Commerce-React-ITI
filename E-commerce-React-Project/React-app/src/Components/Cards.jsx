import { Card, Row, Col } from 'react-bootstrap';

function Cards() {
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text>1,234</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Orders</Card.Title>
            <Card.Text>567</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Revenue</Card.Title>
            <Card.Text>$12,345</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;