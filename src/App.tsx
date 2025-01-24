import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Header from "./component/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;