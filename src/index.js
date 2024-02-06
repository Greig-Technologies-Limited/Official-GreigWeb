import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { HashRouter, Routes, Route } from 'react-router-dom';
import OnewebPage from './routes/OnewebPage';
import StarlinkPage from './routes/StarlinkPage';
import MaritimePage from './routes/MaritimePage';
import IridiumPage from './routes/IridiumPage';
import FleetBBPage from './routes/FleetBBPage';
import ItconsultPage from './routes/ItconsultPage';
import ScrollToTop from './components/ScrollToTop';
import Sentinel from './routes/Sentinel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/OnewebPage" element={<OnewebPage />}/>
      <Route path='/StarlinkPage' element={<StarlinkPage/>}/>
      <Route path='/MaritimePage' element={<MaritimePage/>}/>
      <Route path='/IridiumPage' element={<IridiumPage/>}/>
      <Route path='/FleetBBPage' element={<FleetBBPage/>}/>
      <Route path='/ItconsultPage' element={<ItconsultPage/>}/>
      <Route path='/Sentinel' element={<Sentinel/>}/>
    </Routes>
  </HashRouter>




  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


