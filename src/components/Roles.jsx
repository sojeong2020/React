import React from 'react';
import '../styles/roles.css';
import { Card, Container, Row, Col} from 'react-bootstrap';



const Roles = () => {
    return (
    <div>
        <Container>
        <Row>
        <Col xs={12} md={6}>
        <Card>
        <Card.Body  className='card-body'>
        <Card.Title className='title'>Basic Onboarding Roles</Card.Title>
        <Card.Text>
            <p>Current Status is APPROVED</p>
            <p>2 Completed tasks</p>
            <p>0 Started task</p>
            <p>2 pending taskd</p>
        </Card.Text>
       <Card.Link href="/">More detail</Card.Link>
       <Card.Link href="/">Basic Onboardinf Role</Card.Link>
       </Card.Body>
      
       </Card>
       </Col>

       <Col xs={12} md={6}>
        <Card >
        <Card.Body  className='card-body'>
        <Card.Title className='title'>Basic Roles</Card.Title>
        <Card.Text>
            <p>Current Status is APPROVED</p>
            <p>3 Completed tasks</p>
            <p>1 Started task</p>
            <p>0 pending taskd</p>
        </Card.Text>
       <Card.Link href="/">More detail</Card.Link>
       <Card.Link href="/">Basic Role</Card.Link>
      </Card.Body>
      </Card>
       </Col>
       </Row>
       </Container>
    </div>
    );
};

export default Roles;