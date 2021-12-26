import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col className="text-center text-white">
            <h2>Calculate Your Price</h2>
          </Col>
        </Row>
      </Container>
      <Home></Home>
    </>
  );
}

export default App;
