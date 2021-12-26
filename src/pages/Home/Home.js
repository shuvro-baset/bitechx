import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center text-white">
                <Col md={8}>
                    <form action="">
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner linkedin">
                                <h4 className="icon">Python</h4>
                                <p className="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum, nisi corporis vitae eius sed dicta quasi? Quia, corporis ipsa!</p>
                            </div>
                        </label>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;