import React from 'react'
import HomePage from './HomePage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Certificate from './pages/Certificate';
import Btn4Page from "./pages/Btn4Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/two" element={<Btn4Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App