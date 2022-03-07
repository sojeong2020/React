import React from 'react';
import '../styles/events.css';
import cycling from '../images/cycling.jpg';
import dog from '../images/dog.jpg';
import mini from '../images/mini.jpg';
import net from '../images/net.jpg';
import volunteer from '../images/volunteer.jpg';
import work from '../images/work.jpg';
import { Card, Container, Row, Col} from 'react-bootstrap';

const Events = () => {
    return (
        <div>
            <h4>Current Events</h4>
        <Container className='content'>
        <Row className='card-row'>
        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body >
        <Card.Img className="card-img" variant="top" src={dog} alt="dog" />

        <Card.Title>HOSTEL PLACEMENTS</Card.Title>
        <Card.Text  className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>

        <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
    
        <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
    
        <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer>
        </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body>
        <Card.Img className="card-img" variant="top" src={cycling} alt="cycling" />

        <Card.Title>DOFE REGULAR VOLUNTEERING</Card.Title>
        <Card.Text  className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>
  
          <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
              
          <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
              
          <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
              
          <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
              
          <p>You need to be aged 18 or over to apply for this role.</p>
              
          <p>Once you have applied the Hostel Manager will be in touch to arrange a suitable time for an informal telephone interview.</p>

          <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
            
          <p>You need to be aged 18 or over to apply for this role.</p>
            
          <p>Once you have applied the Hostel Manager will be in touch to arrange a suitable time for an informal telephone interview.</p>
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer>  
        </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body>
        <Card.Img className="card-img" variant="top" src={volunteer} alt="volunteer" />

        <Card.Title>VOLUNTEER MANAGER OPPORTUNITIES</Card.Title>
        <Card.Text  className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>
      
      <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
          
      <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
          
      <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
          
      <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
          
      <p>You need to be aged 18 or over to apply for this role.</p>
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer> 
        </Card>
        </Col>

        </Row>

        <Row  className='card-row'>
        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body>
        <Card.Img className="card-img" variant="top" src={net} alt="net" />

        <Card.Title>WORKING PARTIES</Card.Title>
        <Card.Text  className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>
          
                  <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
                      
                  <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
                      
                  <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
                      
                  <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
                      
                  <p>You need to be aged 18 or over to apply for this role.</p>
                      
                  <p>Once you have applied the Hostel Manager will be in touch to arrange a suitable time for an informal telephone interview.</p>

                  <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
            
                  <p>You need to be aged 18 or over to apply for this role.</p>
            
                  <p>Once you have applied the Hostel Manager will be in touch to arrange a suitable time for an informal telephone interview.</p>
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer>  
        </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body >
        <Card.Img className="card-img" variant="top" src={mini} alt="mini" />

        <Card.Title>VIRTUAL VOLUNTEERING</Card.Title>
        <Card.Text className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>

        <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
            
        <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
            
        <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
            
        <p>Placements are for 2-8 weeks.  Accommodation is provided and travel expenses up to £105.</p> 
            
        <p>You need to be aged 18 or over to apply for this role.</p>
            
        <p>Once you have applied the Hostel Manager will be in touch to arrange a suitable time for an informal telephone interview.</p>
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer>  
        </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className='card-content'>
        <Card.Body >
        <Card.Img className="card-img" variant="top" src={work} alt="work" />

        <Card.Title>DOFE GOLD RESIDENTIALS</Card.Title>
        <Card.Text className="card-text">
        <p>Is life a little boring? Fed up of the same old view out of the window?  It’s definitely time to try something new!</p>
  
        <p> We have residential placements available at some well-loved hostels. City, country or coastal, the choice is yours! Our hostel/student placements are perfect if you would like to gain hospitality experience, complete a work placement as part of your course of study or simply get away from home and lend a hand. </p>
      
        <p>Hostel Placement volunteers assist the team of staff with tasks including serving meals, housekeeping and reception.  Our friendly teams will give you a warm welcome and support you throughout your volunteering.  You don't need any experience - just enthusiasm and a willingness to get involved! </p> 
      
         <p>Best of all, in your free time you can visit the local attractions or explore the countryside near the hostel.</p>
      
        </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
        <Card.Link href="/">More details</Card.Link>
        </Card.Footer> 
        </Card>
        </Col>    

        </Row>

        </Container>
        </div>
    );
};

export default Events;