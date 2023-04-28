import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <section className="landing-page">
            <Container>
                <Row>
                    <Col>
                        <h1>InterviewBot</h1>
                        <p>Practice your interview skills with AI-powered InterviewBot.</p>
                        <Button variant="primary" size="lg">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LandingPage;

