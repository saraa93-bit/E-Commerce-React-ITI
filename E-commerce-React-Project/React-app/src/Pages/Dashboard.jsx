import { Row, Col, Card } from 'react-bootstrap';
import Charts from '../Components/Charts';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Visits</Card.Title>
              <Card.Text>Total Page Views: 100k</Card.Text>
              <Card.Text>Unique Visitor: 50k</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Source Rate</Card.Title>
              <Card.Text>21%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Site Visits</Card.Title>
              <Card.Text>Visitors From USA: 50%</Card.Text>
              <Card.Text>Visitors From Europe: 80%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Charts />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;