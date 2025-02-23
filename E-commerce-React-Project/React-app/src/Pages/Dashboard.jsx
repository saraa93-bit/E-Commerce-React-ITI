import { Row, Col, Card } from 'react-bootstrap';
import Charts from '../Components/Charts';
import { FaUsers, FaChartLine, FaGlobeAmericas, FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import icons

function Dashboard() {
  return (
    <div>
      <h2 className="mb-3 text-muted">Dashboard</h2>
      <Row>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaUsers size={40} className="mb-3" />
              <Card.Title>Total Visits</Card.Title>
              <Card.Text>
                <strong>Total Page Views:</strong> 100k
              </Card.Text>
              <Card.Text>
                <strong>Unique Visitors:</strong> 50k
              </Card.Text>
              <Card.Text className="text-success">
                <FaArrowUp /> 5% increase from last month
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaChartLine size={40} className="mb-3" />
              <Card.Title>Source Rate</Card.Title>
              <Card.Text>
                <strong>Conversion Rate:</strong> 21%
              </Card.Text>
              <Card.Text>
                <strong>Bounce Rate:</strong> 12%
              </Card.Text>
              <Card.Text className="text-danger">
                <FaArrowDown /> 2% decrease from last month
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaGlobeAmericas size={40} className="mb-3" />
              <Card.Title>Site Visits</Card.Title>
              <Card.Text>
                <strong>Visitors From USA:</strong> 50%
              </Card.Text>
              <Card.Text>
                <strong>Visitors From Europe:</strong> 80%
              </Card.Text>
              <Card.Text className="text-success">
                <FaArrowUp /> 10% increase from last month
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Charts />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;