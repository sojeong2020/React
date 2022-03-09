import './App.css';

import { Routes, Route } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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

  const { t, i18n } = useTranslation();

  const [lang, setLang] =useState("");
  console.log(lang,"lang in App")

  function handleClick(lang){

    setLang(lang)
    i18n.changeLanguage(lang);
  }
    

  return (
    <>
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">{t('navbar.logo')}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">{t('navbar.home')}</Nav.Link>
        <Nav.Link href="https://teamkinetic.co.uk/about-teamkinetic">{t('navbar.about')}</Nav.Link>

        <div className="lan-button">

        <Button className="lan-button-en" 
         variant="outline-danger"
         onClick={()=>handleClick('en')}
        >{t('navbar.english')}</Button>

        <Button variant="outline-info"
        onClick={()=>handleClick('we')}
        >{t('navbar.welsh')}</Button>

        </div>
        
      </Nav>
      
       
    </Navbar.Collapse>
  </Container>
</Navbar>
   
  <div className="content-div">   
  <SideBar t={t} />

   
  <div className="content-margin">
    <Routes>
      <Route exact path="/" element={<Home t={t} />} />
      <Route exact path="/profile" element={<Profile t={t} />} />
      <Route exact path="/opps" element={<Opps t={t} />} />
      <Route exact path="/opp/:id" element={<OppDetail t={t} />} />
      <Route exact path="/roles" element={<Roles t={t} />} />
      <Route exact path="/events" element={<Events t={t} />} />
      <Route exact path="/calendar" element={<BigCalendar t={t} />} />
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
