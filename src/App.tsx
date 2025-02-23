import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Example from './pages/Example';
import Header from "./component/Header/Header";
import Comments from "./pages/Comments";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;