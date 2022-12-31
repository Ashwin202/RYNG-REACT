import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'
import Agent from '../images/Agent.png'
import Call from '../images/Call.png'
import Decline from '../images/Decline.png'
import React from 'react';

function CallPanel(props) {
  function acceptCallHandler() {
    console.log("Call needs to be accepted");
    console.log("callObject = ", JSON.stringify(props.callObject));
    console.log("callEvent = ", props.callEvent);
    console.log("callFrom = ", props.callFrom);
    props.call.Answer();
  }

  function rejectCallHandler() {
    console.log("Call needs to be rejected")
    console.log("callObject = ", JSON.stringify(props.callObject));
    console.log("callEvent = ", props.callEvent);
    console.log("callFrom = ", props.callFrom);
    props.call.Hangup();
  }
  return (
    <div>
      {(props.regState && (props.callState || props.callComing)) ? (
        <Container id='call-panel-outer'>
          <Row >
            <Col md={6} className='text-center mt-2'><img src={Agent} id='agent-image' alt='agent' /></Col>
            <Col md={6} className='text-left mt-2 '>
              <h3>Call Details {props.regState ? 'true' : 'false'}</h3>
              <h6 className='text-left'>{props.callInfo}</h6>
            </Col>
          </Row>
          <Row className='mt-2 bottom-panel'>
            <Col className='text-center mt-2'>
              {(props.regState && props.callComing) ? (<Button variant="success" onClick={acceptCallHandler} style={{ width: '80px', marginRight: '50px' }}><img src={Call} className='call-icon' alt='call' /></Button>) : null}
              {(props.regState && (props.callState || props.callComing))?<Button onClick={rejectCallHandler} style={{ width: '80px' }} variant="danger"><img src={Decline} className='call-icon' alt='decline' /></Button> : null}
              </Col>
          </Row>
        </Container>) : (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Container className='text-center'>
            <h3>No calls</h3>
          </Container>
        </div>)
      }
    </div>
  );
}

export default CallPanel;