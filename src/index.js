import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnewebPage from './routes/OnewebPage';
import StarlinkPage from './routes/StarlinkPage';
import MaritimePage from './routes/MaritimePage';
import IridiumPage from './routes/IridiumPage';
import FleetBBPage from './routes/FleetBBPage';
import ItconsultPage from './routes/ItconsultPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/OnewebPage" element={<OnewebPage />}/>
      <Route path='/StarlinkPage' element={<StarlinkPage/>}/>
      <Route path='/MaritimePage' element={<MaritimePage/>}/>
      <Route path='/IridiumPage' element={<IridiumPage/>}/>
      <Route path='/FleetBBPage' element={<FleetBBPage/>}/>
      <Route path='/ItconsultPage' element={<ItconsultPage/>}/>
    </Routes>
  </BrowserRouter>




  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


