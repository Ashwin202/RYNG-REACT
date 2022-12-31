import React, { useRef,useEffect } from 'react'
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import data from '../data/credentials.json'
import { ExotelWebClient} from '@exotel-npm-dev/webrtc-client-sdk';

var unregisterWait = "false";
const Config = () => {
    const [rows, setRows] = React.useState([]);
    const [phone, setPhoneData] = React.useState('');
    const [ configUpdated, setConfigUpdated ] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);
    const [ registrationData, setRegistrationData ] = React.useState("Not Registered");
    const [ regState, setRegState ] = React.useState(false);
    const [ callState, setCallState ] = React.useState(false);
    const [ callComing, setCallComing ] = React.useState(false);
    const [ callInfo, setCallInfo ] = React.useState("No Call Info");
    const [ callObject, setCallObject ] = React.useState("");
    const [ callEvent, setCallEvent ] = React.useState("");
    const [ callFrom, setCallFrom ] = React.useState("");
    const [ call, setCall ] = React.useState("");

    var registrationRef = useRef(null);
    var callRef = useRef(null);
    // var diagnosticsRef = useRef(null);
    // var diagnosticsLogsRef = useRef(null);
    // var diagnosticsSpeakerRef = useRef(null);
    // var diagnosticsMicRef = useRef(null);
    // var diagnosticsWssRef = useRef(null);
    // var diagnosticsRegRef = useRef(null);
    // var diagnosticsTcpRef = useRef(null);
    // var diagnosticsUdpRef = useRef(null);
    // var diagnosticsHostRef = useRef(null);
    // var diagnosticsReflexRef = useRef(null);
    var exWebClient = new ExotelWebClient();

    function SessionCallback(state, phone) {
        /**
         * SessionCallback is triggered whenever the state of application changes due to an incoming call
         * which needs to be handled across tabs
         */
         console.log('Session state:', state, 'for number...', phone);    
     }

    let configRefs = {
        'Username': useRef(null),
        'DisplayName': useRef(null),
        'HostServer': useRef(null),
        'Domain': useRef(null),
        'Port': useRef(null),
        'Password': useRef(null),
        'CallTimeout': useRef(null),
        'AccountSID': useRef(null),
        'AccountNo': useRef(null),
        'AutoRegistration': useRef(null)
    }

    var sipAccountInfo= {
        'userName':  data[0].Username,
        'authUser': data[0].Username,
        'sipdomain': data[0].Domain,
        'domain': data[0].HostServer + ":" + data[0].Port,
        'displayname': data[0].DisplayName,
        'secret': data[0].Password,
        'port': data[0].Port,
        'security': data[0].Security,
        'endpoint': data[0].EndPoint,
      };

      function CallListenerCallback(callObj, eventType, phone) {
        setCallInfo('Call Listener\n Message:' + JSON.stringify(callObj) + '\n EventType:' + eventType + '\n Phone:' + phone) 
        setCallObject(callObj)   
        setCallEvent(eventType)
        setCallFrom(phone)
        setCall(exWebClient.getCall())
        if (eventType === 'incoming') {
          setCallComing(true)
        }  else if (eventType === 'connected') {
          setCallComing(false)
          setCallState(true)
        }  else if (eventType === 'callEnded') {
          setCallComing(false)
          setCallState(false)
        } else if (eventType === 'terminated') {
          setCallComing(false)
          setCallState(false)
        }
    
     }

      function RegisterEventCallBack (state, phone){
        /**
         * Based on the status of the state received against the agent phone, store the data into redux
         */
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
        }  else if (state === 'terminated')  {
          setRegState(false)
        } else if (state === 'sent_request')  {
          if (unregisterWait === "true") {
            unregisterWait = "false";
            setRegState(false)
          }
        }
      }

      

    function updateTable() {
        var newRows = [];
        newRows.push(createData('Username', phone.Username))
        newRows.push(createData('DisplayName', phone.DisplayName))
        newRows.push(createData('HostServer', phone.HostServer))
        newRows.push(createData('Domain', phone.Domain))
        newRows.push(createData('Port', phone.Port))
        newRows.push(createData('Password', phone.Password))
        newRows.push(createData('CallTimeout', phone.CallTimeout))
        newRows.push(createData('AccountSID', phone.AccountSID))
        newRows.push(createData('AccountNo', phone.AccountNo))
        newRows.push(createData('AutoRegistration', phone.AutoRegistration))
        setRows(newRows);     
      }
      const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        updateConfig();
        updateTable();
        setTabValue(newValue);
      };
      function createData(
        configparam: string,
        configvalue: number,
      ) {
        return { configparam, configvalue };
      }
      useEffect(() => {
        if (!configUpdated) {
          setPhoneData(data[0]);   
          setConfigUpdated(true);
        }
        handleTabChange()
      }, [configUpdated]);

      

      function updateConfig() {
        setPhoneData(data[0]);   
        setConfigUpdated(true);    
      }
      function initialise_callbacks() {
        if (configUpdated) {
          sipAccountInfo['userName'] = phone.Username;
          sipAccountInfo['authUser'] = phone.Username;
          sipAccountInfo['sipdomain'] = phone.Domain;
          sipAccountInfo['domain'] =  phone.HostServer + ":" + phone.Port;
          sipAccountInfo['displayname'] = phone.DisplayName;
          sipAccountInfo['secret'] = phone.Password;
          sipAccountInfo['port'] = phone.Port;
          sipAccountInfo['security'] = phone.Security;
          sipAccountInfo['endpoint'] = phone.EndPoint;
          exWebClient.initWebrtc(sipAccountInfo, RegisterEventCallBack, CallListenerCallback, SessionCallback)
        }  
      }

      const unregisterHandler = () => {
        registrationRef.current = "Sent unregister request:" + phone.Username;
        setRegistrationData(registrationRef.current)
    
        if (!configUpdated) {
          updateConfig();
        }
    
        initialise_callbacks();
    
        unregisterWait = "true";
    
        exWebClient.UnRegister();
      }; 

      const registerHandler = () => {
        registrationRef.current = "Sent register request:" + phone.Username;
        setRegistrationData(registrationRef.current)
    
        if (!configUpdated) {
          updateConfig();
        }
    
        unregisterWait = "false";
    
        initialise_callbacks();
        console.log("App.js: Calling DoRegister")
        exWebClient.DoRegister();
        
      };

    function updateTableConfig() {

        unregisterHandler();

        phone.Username = configRefs['Username'].current.value;
        phone.Domain = configRefs['Domain'].current.value;
        phone.HostServer = configRefs['HostServer'].current.value;
        phone.Port = configRefs['Port'].current.value;
        phone.DisplayName = configRefs['DisplayName'].current.value;
        phone.Password = configRefs['Password'].current.value;
        phone.AccountSID = configRefs['AccountSID'].current.value;
        phone.AccountNo = configRefs['AccountNo'].current.value;
        phone.AutoRegistration = configRefs['AutoRegistration'].current.value;
        phone.CallTimeout = configRefs['CallTimeout'].current.value;

        registerHandler();
    }

    
    return (

        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Config Params</th>
                        <th align="center">Config Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows?.map((row) => (
                        <tr key={row.configparam}>
                            <td>{row.configparam}</td>
                            <td align="center">
                                <Form.Control type="text" defaultValue={row.configvalue ? row.configvalue.toString() : ""} ref={configRefs[row.configparam]} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="text-center">
                <Col xs={12}>
                    <Button variant="outline-primary" onClick={updateTableConfig}>Update</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default Config