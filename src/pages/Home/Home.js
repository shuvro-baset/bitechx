import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <form action="">
                        <label class="option_item">
                            <input type="checkbox" class="checkbox" checked />
                            <div class="option_inner linkedin">
                                <div class="icon"></div>
                                <div class="name">Linkedin</div>
                            </div>
                        </label>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;