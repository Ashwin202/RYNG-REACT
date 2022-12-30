import CallPanel from './CallPanel';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Config from './Config';

function NavBar() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Inactive', value: '1' },
    { name: 'Active', value: '2' }
  ];
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">WebRTC Prototype</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/demo"} >Demo</Nav.Link>
            <Nav.Link as={Link} to={"/config"} >Config</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ButtonGroup style={{ marginRight: '30px' }}>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
      </Container>
    
    </Navbar> 
      <Routes>
        <Route  path="/demo" element={<CallPanel />}></Route>
        <Route  path="/config" element={<Config />}></Route>
        </Routes>
    </div>
  );
}

export default NavBar;