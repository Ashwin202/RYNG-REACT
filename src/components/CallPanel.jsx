import React, {Fragment} from 'react';
import customerIcon from "../../src/assest/img/customer-icon.svg";
import toDoListIcon from "../../src/assest/img/to-do.svg";
import callHistoryIcon from "../../src/assest/img/call-history.svg";
import callData from "../../src/tempData/callData";
import {useSelector } from "react-redux";



const CallPanel = (props) => {
  const count =  useSelector((store) => store.counter.count);
  const agentCurrentCall = [callData[count]];
  const  clearScheduledDate = () => {console.log("clearScheduledDate")}
  const  buttonCheckDND = () => {console.log("buttonCheckDND")}
  const  getProgressiveCallHistory = () => {console.log("getProgressiveCallHistory")}
  const  filterDisposition = () => {console.log("filterDisposition")}
  const  dispositionsList = () => {console.log("dispositionsList")}
  const  SubmitRedialOnClick = () => {console.log("SubmitRedialOnClick")}



  return (

      <>
        <div className="col-12 d-flex p-0" style={{height: "88%"}}>
          <div className="p-1 m-0" style={{flex:"33.65"}}>
            <div className="card round-border m-0 mb-1" style={{height:"35%"}}>
              <div className="card-body h-100">
                <div className="scrollbox" style={{height:"calc(100% - 0.3125rem)"}}>
                  <div className="scrollbox-content poppins-xs p-0" style={{margin:"0px 10px 10px 4px"}}>
                    <div className="row justify-content-center align-items-center p-0 m-0 pt-2 pb-2 mb-3">
                      <div className="col-1 p-0 m-0" style={{display: "flex", alignContent: "center", justifyContent: "center"}}> 
                        <img src={customerIcon} alt="Profile Photo" title="CUSTOMER"  style={{width : "100%"}}/> 
                      </div>
                      <div className="col-11 p-0 m-0 pl-2"> 
                        <span className="opensans-bold">
                          ID:
                        </span>
                        <span id="call-id" className="opensans-bold">
                         {agentCurrentCall[0].id}
                          {/* <%=agentCurrentCall.id%> */}
                        </span>
                        <span id="call-status-badge" className="call-update-badge opensans-sm-bold">
                        </span>
                        <br/>
                        <span id="cust1" className="opensans-xl-bold" style={{lineHeight:"25px"}}>
                        {agentCurrentCall[0].cust1}
                        </span>
                      </div>
                    </div>

                    <ul>
                      <li>
                        <a className="opensans">
                          Initiating Call   
                        </a>
                        <span id="" className="call-update-badge badge-success opensans-sm-bold">
                          SUCCESSFUL
                        </span>
                      </li>
                      <li id="call-status">
                        <a className="opensans">
                          Call Status
                        </a>
                        <span id="call-status-update" className="call-update-badge badge-primary opensans-sm-bold">
                          WAITING FOR UPDATES...
                        </span>
                      </li>
                      <p>
                        <span id="leg0-status" className="call-update-badge badge-danger opensans-sm-bold">
                          AGENT: N.A.
                        </span>
                        <span id="leg1-status" className="call-update-badge badge-danger opensans-sm-bold">
                          CUSTOMER: N.A.
                        </span>
                      </p>
                      <li id="call-terminated">
                        <p>
                          <span id="call-terminated-status" className="call-update-badge badge-danger opensans-sm-bold">
                            CALL TERMINATED
                          </span>
                          <span id="call-terminated-duration" className="call-update-badge badge-primary opensans-sm-bold">
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div className="text-center">
                      {/* <% if(!isRotatingLegEnabled) {%>
                      <button id="verify-callback-button" type="button" className="opensans-sm btn btn-sm btn-simple btn-info" onClick="verifyCallCompleteOnClick(true)">
                        Refresh Call Status
                        </button>
                      <div style={{height:"20px"}}>
                        <span id="verify-callback-button-toast" className="opensans-sm"></span>
                      </div>
                      <% } %> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card round-border m-0" style={{height:"calc(65% - 0.25rem)"}}>
              <div className="card-body h-100">
                <div className="scrollbox" style={{height: "calc(100% - 0.3125rem)"}}>
                  <div className="col-12 scrollbox-content poppins-xs" style={{padding: "0px", margin:"0px 10px 10px 4px"}}>
                    <p className="opensans-lg-bold">Queue Details:</p>
                    <p className="opensans-sm-bold">NAME: <br />
                      <span id="queue-name" className="opensans-lg">
                      {agentCurrentCall[0].name}
                        {/* <%-agentCurrentCall.name%> */}
                      </span>
                    </p>
                    <p className="opensans-sm-bold">DESCRIPTION:<br />
                      <span id="queue-desc" className="opensans-lg">
                        {/* <%-agentCurrentCall.description%> */}
                      </span>
                    </p>

                    <br />
                    <p className="opensans-lg-bold">Lead/Customer Details:</p>
                  
                    {  agentCurrentCall?.map((key, index)=> {
                      const arr = [];
                      for (let i = 2; i < 25; i++) {
                        if(key[`cust`+i+`_name`]){
                          arr.push(                            
                            <Fragment key={index+i}>                             
                              <a id={`cust`+i+`_name`}  className="opensans-sm-bold"><br/>
                                { key[`cust`+i+`_name`]}
                              </a>
                              <p id={`cust`+i}  className="opensans-lg"> 
                                { key[`cust`+i]}
                              </p>
                            </Fragment>                            
                          );
                        }
                      }
                      return arr;
                    })
                
                      
                      
                      


                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-1 m-0" style={{paddingLeft: "0px !important", flex:"30.7"}}>
            <div className="card round-border" style={{height:"100%"}}>
              <div className="card-body h-100">
                <p className="opensans-lg-bold">Actions</p>
                <div className="scrollbox" style={{height: "calc(94% - 0.3125rem)"}}>
                  <div className="col-md-12 scrollbox-content poppins-xs" style={{padding: "0 10px 0 0", margin:"0px 10px 10px 0px"}}>
                    <p className="opensans-lg-bold">Dispose Call:</p>

                    <div className="form-group">

                      <div className="form-group">
                        <label htmlFor="callback" className="opensans-sm-bold">
                          SCHEDULE CALLBACK:
                        </label><br/>
                        <div className="col-12 mb-1">
                          <div className="row justify-content-center">
                            <span hidden id="blocked-time-text" className="col-md-4 col-6 p-0 opensans-sm-bold " style={{color:"#F22F4680"}}></span>
                            <span hidden id="blocked-time-slots" className="col-md-8 col-6 p-0 pl-1 opensans-sm" style={{color:"#F22F4680"}}></span>
                          </div>
                        </div>
                          <input style={{color:"#333", border:"1px solid rgba(29, 37, 59, 0.5)", borderRadius: "10px"}}
                            className="opensans p-2 w-100" type="text" id="datepicker"/><br />

                        <button onClick={()=> clearScheduledDate()} className="btn btn-sm w-100 btn-warning">Clear
                          Scheduled Date</button>
                      </div>

                      <p className="opensans-sm-bold">NOTES</p>
                      <textarea className="col form-control opensans" rows="4" type="text" id="notes" style={{border:"1px solid rgba(29, 37, 59, 0.5)",borderRadius: "7px", fontSize:"14px", borderRadius: "10px", backgroundColor: "white"}}
                        placeholder="Use this space to capture any additional relevant notes concerning this lead/customer."></textarea>
                    </div>

                    <div id="alternate-num-input-wrapper" className="form-group">
                      <button id="alternate-num-toggle" className="btn btn-info inactive">
                        Dial Alternate Number</button>
                      <div id="alternate-num-input">
                        <input id="alternate-num" type="text" className="opensans form-control" />
                      </div>
                      <p className="opensans-sm text-center">
                        <i>Dispose this call to dial this number next.</i>
                      </p>
                    </div>


                    <div className="form-group">
                      <button onClick={()=> buttonCheckDND()} id="custom-dnd-toggle" className="btn inactive">
                        <span style={{float:"left"}}>
                          <input id="customer-dnd" type="checkbox" style={{transform:"scale(1.5)",background: "white"}}/>
                        </span>
                        <span id="customer-dnd-text">Add to DND</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
          
        
            </div>
          </div>
          
          <div className="p-1 m-0" style={{paddingLeft: "0px !important", flex:"35.65"}}>
            <div className="card round-border m-0 p-0" style={{height:"100%"}}>  
              <div className="row m-0 p-0" style={{height:"100%"}}>  
                <div className="m-0 p-0 h-100" style={{flex:"11"}}>
                  <div className="tab-content p-3 h-100">
                    <p className="opensans-lg-bold">Tools</p>
                    <div className="tab-pane text-white active" id="to-do-tab" style={{height: "calc(100% - 4rem)"}} >
                      <p className="opensans-bold">TO DO LIST</p>
                        {/* <% if(orgFeatures.map(feature=>feature.code).indexOf("to-do-list") > -1){ %>
                          <%- include ('../../components/ToDoList/Queue/Agent/ToDoListQueueAgent.ejs') %>
                        <% } %> */}
                    </div>
                    <div className="tab-pane text-white" id="sms-tab" style={{height: "calc(100% - 4rem)" }}>
                      <p className="opensans-lg-bold">SMS</p>
                        {/* <% if(orgFeatures.map(feature=>feature.code).indexOf("sms") > -1){ %>
                          <%- include ('../../components/SMS/smsTool.ejs') %>
                        <% } %> */}
                    </div>
                    <div className="tab-pane text-white h-100" id="call-history-tab"> 
                      <div className="col-md-12 card card-timeline m-0 p-0" style={{height: "calc(100% - 2rem) !important", border:"none"}}>
                        <div className="card-body h-100 p-0">
                          <p className="opensans-lg-bold">Call History</p>
                          <div className="scrollbox" style={{height: "calc(100% - 3.5rem)"}}>
                            <div className="col-md-12 scrollbox-content poppins-xs" style={{padding: "10px", margin:"0px 10px 10px 4px"}}>
                              <div id="call-history" className="timeline timeline-simple">
                              </div>
                              <div className="text-center">
                                <button id="load-more" type="button" className="opensans-sm btn btn-sm btn-simple btn-info" onClick={()=> getProgressiveCallHistory()}>
                                  Load More
                                </button>
                                <p id="load-more-text" className="opensans-sm">
                                  No more calls to display
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-0 p-0" style={{borderLeft:"1px solid #B9B9B9", flex:"1"}}>
                  <ul className="nav nav-pills" style={{ alignContent:"center", justifycontent: "center"}}>         
                      <li className="nav-item" style={{outline:"1px solid #B9B9B9",borderRadius: "10px", margin: "10px", minWidth:"50%"}}>
                        <a className="nav-link d-flex justify-content-center align-items-center p-0 m-0 active" href="#to-do-tab" data-toggle="tab" style={{borderRadius: "10px"}}>
                          <img src={toDoListIcon} alt="To Do List" style={{width:"1.5rem"}} className="m-3"/>          
                        </a>
                      </li>    
                      {/* <% if(orgFeatures.map(feature=>feature.code).indexOf("sms") > -1){ %>
                      <li className="nav-item" style={{"outline: 1px solid #B9B9B9;border-radius: 10px; margin: 10px; min-width:50%"}}>
                        <a className="nav-link d-flex justify-content-center align-items-center p-0 m-0" href="#sms-tab" data-toggle="tab"style={{"border-radius: 10px;"}}>
                          <img src="../assets/img/SMS-Messaging.png" alt="Call-History" style={{"width:1.5rem;"}} className="m-3">
                        </a>
                      </li>
                      <% } %> */}
                      <li className="nav-item" style={{outline:"1px solid #B9B9B9",borderRadius: "10px", margin:"10px", minWidth:"50%"}}>
                        <a className="nav-link d-flex justify-content-center align-items-center p-0 m-0" href="#call-history-tab" data-toggle="tab"style={{borderRadius: "10px"}}>
                          <img src={callHistoryIcon} alt="Call-History" style={{width:"1.5rem"}} className="m-3"/>
                        </a>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 d-flex p-0" style={{height: "calc(12% - 0.25rem)"}}>
          <div className="col-12 d-flex p-0 m-0 pl-1 pr-1 pb-1">
            <div className="card round-border mb-0">
              <div className="card-body p-0">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="p-1 m-0" style={{flex:"33.65"}}>
                    <div id="timer" className="row justify-content-center align-items-center h-100">
                      <div className="col-6"></div>
                      <div className="col-3" style={{paddingTop:"5px", textAlign: "center"}}>
                        <p id="timer-text" className="opensans-bold m-0">
                          Auto-disposing in 
                          <br />
                        </p>
                      </div>
                      <div className="col-1">
                        <div id="app"></div>
                      </div>
                      <div className="col-1"></div>
                    </div>
                  
                  </div>
                  
                  <div className="p-1 m-0" style={{position:"relative",flex:"30.7"}}>       
                    <div id ="disposition-drop" className="disposition-dropdown dropup">              
                      <button id="disposition-button" onClick={()=> {document.getElementById('searchDisposition').value =''; filterDisposition('', dispositionsList); }} type="button" className="btn col-12" 
                        style={{color: "black", background: "transparent!important", padding:"0 5px", margin:"0", border: "1px solid rgba(29, 37, 59, 0.3)", borderRadius:"5px", height: "47px"}} data-toggle="modal" data-dismiss="modal" data-target="#dispositon-selector-modal">
                        <span  id ="disp-sel" className="opensans-bold" value ="" style={{display:"inline", float:"left", padding:"5px",overflow:"hidden", textOverflow:"ellipsis", width: "91%", textAlign: "left"}}> DISPOSITION</span>
                        <span>
                          <i className="fas fa-caret-down" style={{fontSize:"14px", margin:"0.5rem 0"}}>
                        </i></span>
                      </button>
                      
                    </div>
                  </div>
            
                  <div className="p-1 m-0" style={{flex:"35.65"}}>
                        <div className="row">
                          <div className="col-1">
                          </div>
                          <div className="col-3">
                            <div id= "customer-emotion-selector" className="row justify-content-center align-items-center h-100 ">
                              <span className="opensans-sm-bold mb-2">How was your call?</span>
                              <div className="form-group m-0" style={{width:"70%"}}>
                                <div className="customer-emotion-selector">
                                  <input type="radio" name="customer-emotion" id="happy-face" value="0"/>
                                  <label htmlFor="happy-face">
                                    <img src="../assets/img/happy.svg" alt="happy emoji" title="Happy"/>
                                  </label>
                                  <input type="radio" name="customer-emotion" id="neutral-face" value="1"/>
                                  <label htmlFor="neutral-face">
                                    <img src="../assets/img/neutral.svg" alt="neutral emoji" title="Neutral"/>
                                  </label>
                                  <input type="radio" name="customer-emotion" id="angry-face" value="2"/>
                                  <label htmlFor="angry-face">
                                    <img src="../assets/img/angry.svg" alt="angry emoji" title="Angry"/>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-8">               
                              <button id="save-disp-button" type="button" className="opensans btn" style={{background:"#d1001f", border:"none", color:"#C1C1C1", height:"47px"}} onClick={props.rejectCallHandler}>Decline</button>        
                              <button id="save-disp-button" type="button" className="opensans btn" style={{background:"#E6E8E6", border:"none", color:"#C1C1C1", height:"47px"}} onClick={()=> SubmitRedialOnClick(false)}>Dispose</button>        
                              <button id="redial-button" type="button" className="opensans btn" style={{background:"#E6E8E6", border:"none", color:"#C1C1C1",height:"47px"}} onClick={()=> SubmitRedialOnClick(true)}>Redial</button>                 
                          </div>     
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
  
  )
}

export default CallPanel