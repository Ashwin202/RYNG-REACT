import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'
import Agent from '../images/Agent.png'
import Call from '../images/Call.png'
import Decline from '../images/Decline.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function CallPanel(props) {
  function acceptCallHandler() {
    console.log("Call needs to be accepted");
    console.log("callObject = ", JSON.stringify(props.callObject));
    console.log("callEvent = ", props.callEvent);
    console.log("callFrom = ", props.callFrom);
    toast.success("Call Answered.", {
      position: "bottom-right",
      theme: "dark",
    });
    props.call.Answer();
  }

  function rejectCallHandler() {
    console.log("Call needs to be rejected")
    console.log("callObject = ", JSON.stringify(props.callObject));
    console.log("callEvent = ", props.callEvent);
    console.log("callFrom = ", props.callFrom);
    toast.error("Call Ends.", {
      position: "bottom-right",
      theme: "dark",
    });
    props.call.Hangup();
  }
  return (
    <div>
      {(props.regState && (props.callState || props.callComing)) ? (
        <div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <img src={Agent} id='agent-image' alt='agent' />
          </div>
          <div className='text-center' style={{ position: 'fixed', bottom: '5%', right: 0, width: '100%' }}>
            {(props.regState && props.callComing) ? (<Button variant="success" onClick={acceptCallHandler} style={{borderRadius: '50%'}}><img src={Call} className='call-icon' alt='call' /></Button>) : null}
            {(props.regState && (props.callState || props.callComing)) ? <Button onClick={rejectCallHandler} style={{borderRadius: '50%',marginLeft: '50px', }} variant="danger"><img src={Decline} className='call-icon' alt='decline' /></Button> : null}
            <ToastContainer limit={1}/>

          </div>
        </div>) : (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Container className='text-center'>
           {props.regState?(<h3>No active calls</h3>):(<h3>Agent Inactive</h3>)}         
            </Container>
        </div>)
      }
    </div>
  );
}

export default CallPanel;