import React from 'react';
import '../styles/roles.css';
import { Card, Container, Row, Col} from 'react-bootstrap';



const Roles = ({t}) => {
    return (
    <div>
        <Container>
        <Row>
        <Col xs={12} md={6}>
        <Card>
        <Card.Body  className='card-body'>
        <Card.Title className='title'>{t('roles.cardFirst.title')}</Card.Title>
        <Card.Text>
            <p>{t('roles.cardFirst.p1')}</p>
            <p>{t('roles.cardFirst.p2')}</p>
            <p>{t('roles.cardFirst.p3')}</p>
            <p>{t('roles.cardFirst.p4')}</p>
        </Card.Text>
       <Card.Link href="/">{t('roles.cardFirst.more')}</Card.Link>
       <Card.Link href="/">{t('roles.cardFirst.link')}</Card.Link>
       </Card.Body>
      
       </Card>
       </Col>

       <Col xs={12} md={6}>
        <Card >
        <Card.Body  className='card-body'>
        <Card.Title className='title'>{t('roles.cardSecond.title')}</Card.Title>
        <Card.Text>
            <p>{t('roles.cardSecond.p1')}</p>
            <p>{t('roles.cardSecond.p2')}</p>
            <p>{t('roles.cardSecond.p3')}</p>
            <p>{t('roles.cardSecond.p4')}</p>
        </Card.Text>
       <Card.Link href="/">{t('roles.cardSecond.more')}</Card.Link>
       <Card.Link href="/">{t('roles.cardSecond.link')}</Card.Link>
      </Card.Body>
      </Card>
       </Col>
       </Row>
       </Container>
    </div>
    );
};

export default Roles;