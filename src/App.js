import './App.css';

import { Routes, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Opps from './components/Opps';
import Roles from './components/Roles';
import Events from './components/Events';
import Calendar from  './components/Calendar';
import Footer from './components/Footer';

import {useState} from 'react';

import { Col, Row ,Button} from 'react-bootstrap';


function App() {

  const [lang, setLang] =useState("");
  console.log(lang,"lang in App")

  function handleClick(lang){
    setLang(lang)
  }
    

  return (
    <>
   <Row>
        <Col>
          <div className="header">
            <div className="lan-button">

            <Button className="lan-button-en" 
            variant="outline-danger"
            onClick={()=>handleClick('en')}
            >English</Button>

            <Button variant="outline-info"
            onClick={()=>handleClick('we')}
            >Welsh</Button>

          </div>
        </div> 

        </Col>
      </Row>
   
  <div className="content-div">   
  <SideBar />

   
  <div className="content-margin">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/opps" element={<Opps />} />
      <Route exact path="/roles" element={<Roles />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/calendar" element={<Calendar />} />
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
