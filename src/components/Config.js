import React, { useRef,useEffect } from 'react'
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import data from '../data/credentials.json'
import { ExotelWebClient} from '@exotel-npm-dev/webrtc-client-sdk';

const Config = () => {
    const [rows, setRows] = React.useState([]);
    console.log(rows)
    const [phone, setPhoneData] = React.useState('');
    const [ configUpdated, setConfigUpdated ] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);

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
      }, [configUpdated]);

      function updateConfig() {
        setPhoneData(data[0]);   
        setConfigUpdated(true);    
      }
      
    function updateTableConfig() {

        // unregisterHandler();

        // phone.Username = configRefs['Username'].current.value;
        // phone.Domain = configRefs['Domain'].current.value;
        // phone.HostServer = configRefs['HostServer'].current.value;
        // phone.Port = configRefs['Port'].current.value;
        // phone.DisplayName = configRefs['DisplayName'].current.value;
        // phone.Password = configRefs['Password'].current.value;
        // phone.AccountSID = configRefs['AccountSID'].current.value;
        // phone.AccountNo = configRefs['AccountNo'].current.value;
        // phone.AutoRegistration = configRefs['AutoRegistration'].current.value;
        // phone.CallTimeout = configRefs['CallTimeout'].current.value;

        // registerHandler();
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
                    {rows.map((row) => (
                        <tr key={row.configparam}>
                            <td>{row.configparam}</td>
                            <td align="center">
                                <Form.Control type="text" defaultValue={row.configvalue ? row.configvalue.toString() : ""} ref={configRefs[row.configparam]} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Button variant="outlined">Update</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default Config