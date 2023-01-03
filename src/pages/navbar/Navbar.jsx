import React from 'react'
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
        <ul className="nav">      
                    <li className="active">                   
                        <Link to="/home">                           
                                <p className="m-2">Home</p>
                        </Link>
                    </li>
                    <li className=" ">                  
                        <Link to="/campaign">
                            <p className="m-2">Campaigns</p>
                        </Link>
                    </li>                   
                    <li className=" ">                  
                        <Link to="/progressive-queue">
                            <p className="m-2">Queues</p>
                        </Link>
                    </li>               
                    <li className=" ">
                        <Link to="/insights-admin">
                            <p className="m-2">Insights</p>
                        </Link>                        
                    </li>
                </ul>
    </div>
  )
}

export default navbar