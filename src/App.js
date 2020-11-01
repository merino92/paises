
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Aplicacion de Paises
        </Navbar.Brand>
      </Navbar>
      <Container className="mt-3" >
        <Row>
          <Col xs={12} lg={12} md={12}>
            <Card>
              <Card.Header>Buscador</Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
