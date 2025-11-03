import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import BuyCredit from './pages/BuyCredit';
import Result from './pages/Result';
import NavBar from './component/navBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-slate-50 min-h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy-credit" element={<BuyCredit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App