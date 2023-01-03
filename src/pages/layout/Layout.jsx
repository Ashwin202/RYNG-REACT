import React from 'react';
import Header from '../header/Header';
import RightSideBar from '../rightSideBar/RightSideBar';
import { Outlet} from "react-router-dom";
import {useSelector} from 'react-redux';  

const Layout = () => {
  const theme =  useSelector((store) => store.user.theme);
  const useTheme = localStorage.getItem("useMode") ?? theme;

  return (
    <div className={useTheme ==="white-content"? "white-content" : ""}> 
      <div className="main-panel" style={{borderTop:"0px",overflowY: "hidden", scrollbarWidth: "0px! important"}} >  
          <Header/>
          <div style={{display: "flex", flex:"100", height: "80vh"}}>
            <div style={{flex:"90",height: "100%"}}>
            <Outlet />
            </div>  
            <div style={{flex:"10", border: "1px solid green"}}>
              <RightSideBar/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Layout