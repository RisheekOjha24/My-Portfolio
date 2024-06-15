import React from 'react'
import HomePage from './HomePage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Certificate from './pages/Certificate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificate" element={<Certificate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App