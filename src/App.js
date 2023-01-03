import './App.css';
import Layout from './pages/layout/Layout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Campaign from './pages/campaign/Campaign';
import NoPage from './pages/noPage/NoPage';


import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />       
        <Route path="/" element={<Layout />} >
          <Route path="/"  element={<Home/>} />
          <Route path="/home"  element={<Home/>} />
          <Route path="/campaign" element ={ <Campaign />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  
     
  );
}

export default App;
