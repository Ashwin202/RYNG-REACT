import CallPanel from './CallPanel';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Config from './Config';
import data from '../data/credentials.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExotelWebClient } from '@exotel-npm-dev/webrtc-client-sdk';

function NavBar() {
  const [radioValue, setRadioValue] = useState('1');
  const [regState, setRegState] = React.useState(false);
  const [registrationData, setRegistrationData] = React.useState("Not Registered");
  const [callState, setCallState] = React.useState(false);
  const [callComing, setCallComing] = React.useState(false);
  const [callFrom, setCallFrom] = React.useState("");
  const [call, setCall] = React.useState("");
  const [callInfo, setCallInfo] = React.useState("No Call Info");
  const [callObject, setCallObject] = React.useState("");
  const [callEvent, setCallEvent] = React.useState("");
  var unregisterWait = "false";
  const radios = [
    { name: 'Inactive', value: '1' },
    { name: 'Active', value: '2' }
  ];
  const exWebClient = new ExotelWebClient();
  useEffect(() => {
    console.log("==========NAvbar==============")
  }, [radioValue])

  function CallListenerCallback(callObj, eventType, phone) {
    console.log("callObj")
    console.log(callObj)
    setCallInfo('Call Listener\n Message:' + JSON.stringify(callObj) + '\n EventType:' + eventType + '\n Phone:' + phone)
    setCallObject(callObj)
    setCallEvent(eventType)
    setCallFrom(phone)
    setCall(exWebClient.getCall())
    if (eventType === 'incoming') {
      setCallComing(true)
    } else if (eventType === 'connected') {
      setCallComing(false)
      setCallState(true)
    } else if (eventType === 'callEnded') {
      setCallComing(false)
      setCallState(false)
    } else if (eventType === 'terminated') {
      setCallComing(false)
      setCallState(false)
    }

  }

  function RegisterEventCallBack(state, phone) {
    /**
     * Based on the status of the state received against the agent phone, store the data into redux
     */
    console.log("Register Event Callback state")
    console.log(state)
    if (unregisterWait === "false") {
      setRegistrationData('Register:\n State:' + state + '\n User:' + phone)
    } else {
      setRegistrationData('UnRegister:\n State:' + state + '\n User:' + phone)
    }
    if (state === 'registered') {
      unregisterWait = "false";
      setRegState(true)
    } else if (state === 'unregistered') {
      setRegState(false)
    } else if (state === 'connected') {
      unregisterWait = "false";
      setRegState(true)
    } else if (state === 'terminated') {
      setRegState(false)
    } else if (state === 'sent_request') {
      if (unregisterWait === "true") {
        unregisterWait = "false";
        setRegState(false)
      }
    }
  }

  function SessionCallback(state, phone) {
    console.log("Session Call backstate")
    console.log(state)
    /**
     * SessionCallback is triggered whenever the state of application changes due to an incoming call
     * which needs to be handled across tabs
     */
    console.log('Session state:', state, 'for number...', phone);
  }
  function DoRegister() {
    const sipAccountInfo = {
      'userName': data[0].Username,
      'authUser': data[0].Username,
      'sipdomain': data[0].Domain,
      'domain': data[0].HostServer + ":" + data[0].Port,
      'displayname': data[0].DisplayName,
      'secret': data[0].Password,
      'port': data[0].Port,
      'security': data[0].Security,
      'endpoint': data[0].EndPoint,
    };
    console.log(sipAccountInfo)
    exWebClient.initWebrtc(sipAccountInfo, RegisterEventCallBack, CallListenerCallback, SessionCallback)
    console.log("App.js: Calling DoRegister")
    exWebClient.DoRegister();
    toast.success("Agent Active.", {
      position: "top-center", hideProgressBar: true, pauseOnHover: false, autoClose: 1000,
      autoClose: 5000, theme: "colored",
    });

  }

  function UnRegister() {
    unregisterWait = "true";
    exWebClient.UnRegister();
    toast.success("Agent Inactive.", {
      position: "top-center", hideProgressBar: true, pauseOnHover: false, autoClose: 1000,
      autoClose: 5000, theme: "colored",
    });

  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <ToastContainer limit={1} />
        <Container>
          <Navbar.Brand href="#home">WebRTC Prototype</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"} >Demo</Nav.Link>
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
                onChange={(e) => {
                  const agentStatus = e.currentTarget.value === '2' ? true : false
                  setRadioValue(e.currentTarget.value)
                  agentStatus ? DoRegister() : UnRegister()
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          User:&nbsp; {regState ? <Badge bg="success">Registered</Badge> : <Badge bg="danger">Unregistered</Badge>}
        </Container>

      </Navbar>
      <Routes>
        <Route path="/" element={<CallPanel regState={regState} call={call} callState={callState} callComing={callComing} callInfo={callInfo} callObject={callObject} callEvent={callEvent} callFrom={callFrom} unregisterWait={unregisterWait} />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;