import React from 'react';
import Header from '../header/Header';

import { Outlet} from "react-router-dom";
import {useSelector} from 'react-redux';  

const Layout = () => {
  const theme =  useSelector((store) => store.user.theme);
  const useTheme = localStorage.getItem("useMode") ?? theme;

  return (
    <div className={useTheme ==="white-content"? "white-content" : ""}> 
      <div className="main-panel" style={{borderTop:"0px",overflowY: "hidden", scrollbarWidth: "0px! important"}} >  
          <Header/>
          <Outlet/>

      </div>
    </div>
  )
}

export default Layout