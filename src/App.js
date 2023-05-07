import React, { useState } from "react";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import OngoingDisputes from "./components/OngoingDisputes";
import ClosedDisputes from "./components/ClosedDisputes";


  
  const App =()=>{
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        {/* <Home/>
        <Home2/> */}
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/OngoingDisputes" element={<OngoingDisputes/>} />
          <Route path="/ClosedDisputes" element={<ClosedDisputes/>} />
        </Routes>
      
        {/* <Footer/> */}
      </div>
      </BrowserRouter>
    );
  }
  
  export default App;
