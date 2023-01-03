import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {    
const tenant = "REACT LOCAL"
    // const frontEndUI=() => {
        
    //     console.log("frontEnd")
    //     // console.trace()
    // }

  return (
    <>
        {/* <div className="App">
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                
            </ul>
        </div> */}

        <div className="wrapper">
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <div className="logo">                    
                    <a href="javascript:void(0)" className="simple-text logo-normal">
                    {tenant}
                    </a>
                </div>
                <ul className="nav">      
                    <li className="active">                   
                    <Link to="/dashboard">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Campaigns</p>
                    </Link>
                    </li>                    
                    <li className=" ">                  
                    <a href="/progressive-queue">
                        <i className="tim-icons icon-atom"></i>
                        <p>Queues</p>
                    </a>
                    </li>               
                    <li className=" ">                
                        <a href="/insights-admin">
                            <i className="tim-icons icon-sound-wave"></i>
                            <p>Insights</p>
                        </a>
                    </li>                   
                    <li className=" ">
                    
                    <a href="/live-monitoring">
                        <i className="tim-icons icon-world"></i>
                        <p>Live Monitoring</p>
                    </a>
                    </li>
                    
                    <li className="active ">
                  
                    <a href="/reporting">
                        <i className="tim-icons icon-single-copy-04"></i>
                        <p>Reports
                        </p>
                    </a>
                    </li>
                    
                    <li className="active ">
                    
                    <a href="/transfers">
                        <i className="tim-icons icon-spaceship"></i>
                        <p>Transfer
                        </p>
                    </a>
                    </li>
                   
                </ul>
                </div>
            </div>
        </div>                  
                <Outlet />

                
                </>
            
  )
}

export default Sidebar