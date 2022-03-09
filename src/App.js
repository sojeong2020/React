import './App.css';

import { Routes, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Opps from './components/Opps';
import OppDetail from './components/OppDetail';
import Roles from './components/Roles';
import Events from './components/Events';
import BigCalendar from  './components/BigCalendar';
import Footer from './components/Footer';

import {useState} from 'react';

import { Col, Row ,Button, Nav,Navbar, Container} from 'react-bootstrap';


function App() {

  const [lang, setLang] =useState("");
  console.log(lang,"lang in App")

  function handleClick(lang){
    setLang(lang)
  }
    

  return (
    <>
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">React App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="https://teamkinetic.co.uk/about-teamkinetic">About us</Nav.Link>

        <div className="lan-button">

        <Button className="lan-button-en" 
         variant="outline-danger"
         onClick={()=>handleClick('en')}
        >English</Button>

        <Button variant="outline-info"
        onClick={()=>handleClick('we')}
        >Welsh</Button>

        </div>
        
      </Nav>
      
       
    </Navbar.Collapse>
  </Container>
</Navbar>
   
  <div className="content-div">   
  <SideBar />

   
  <div className="content-margin">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/opps" element={<Opps />} />
      <Route exact path="/opp/:id" element={<OppDetail />} />
      <Route exact path="/roles" element={<Roles />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/calendar" element={<BigCalendar />} />
    </Routes> 
  </div>
  </div>   

    <Row>
        <Col>
          <Footer />
        </Col>
      </Row>

    </>
  );
}

export default App;
