import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const InterviewSimulation = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const startInterview = () => {
        // Add logic to start the interview simulation
    };

    return (
        <section className="interview-simulation">
            <Container>
                <Row>
                    <Col>
                        <h2>Interview Simulation</h2>
                        <Form>
                            <Form.Group controlId="category">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                                    <option value="">Select a category</option>
                                    <option value="software-engineering">Software Engineering</option>
                                    <option value="data-science">Data Science</option>
                                    <option value="product-management">Product Management</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="difficulty">
                                <Form.Label>Difficulty</Form.Label>
                                <Form.Control as="select" value={selectedDifficulty} onChange={handleDifficultyChange}>
                                    <option value="">Select difficulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={startInterview}>Start Interview</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InterviewSimulation;

