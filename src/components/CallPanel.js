import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'
import Agent from '../images/Agent.png'
import Call from '../images/Call.png'
import Decline from '../images/Decline.png'
import React from 'react';

function CallPanel() {
  console.log("first")
  return (
    <div>
        <Container id='call-panel-outer'>
          <Row >
            <Col md={6} className='text-center mt-2'><img src={Agent} id='agent-image' alt='agent' /></Col>
            <Col md={6} className='text-left mt-2 '>
              <h3>Contat Details</h3>
              <h6 className='text-left'>Benji</h6>
            </Col>
          </Row>
          <Row className='mt-2 bottom-panel'>
            <Col className='text-center mt-2'><Button variant="success" style={{ width: '80px', marginRight: '50px' }}><img src={Call} className='call-icon' alt='call' /></Button><Button style={{ width: '80px' }} variant="danger"><img src={Decline} className='call-icon' alt='decline' /></Button>{' '}</Col>
          </Row>
        </Container>
    </div>
  );
}

export default CallPanel;