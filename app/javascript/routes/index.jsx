import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from "../components/Greetings";
import Home from "../components/Home";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Home/>)} />
        <Route path="/greeting" element={(<Greetings/>)} />
      </Routes>
    </BrowserRouter>
  )
}; 

export default Routing;
