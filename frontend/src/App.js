
import './App.css';

import Register from './Pages/Register'
import Navbar from './Components/Navbar';
import Rides from './Pages/Rides';
import About from './Pages/About';
import TimingTickets from './Pages/TimingTickets';
import Offers from './Pages/Offers';
import Login from './Pages/Login';
import Booknow from './Components/Booknow';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';


import HTrides from './Components/HTrides';

import KidsRides from './Components/Kidrides';
import Water from './Components/Water';
import Landrides from './Components/Landrides';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />} />
        <Route path='/Booknow' element={<Booknow />} />
        <Route path='Rides' element={<Rides/>} />
        <Route path='Offers' element={<Offers/>} />
        <Route path='TimingTickets' element={<TimingTickets/>} />

        <Route path='/HighthrillRides' element={<HTrides />} />
        <Route path='/WaterRides' element={<Water />} />
        <Route path='KidsRides' element={<KidsRides />} />
        <Route path='/LandRides' element={<Landrides />} />
        

      </Routes>
       </BrowserRouter>
       <Footer />
    </div>  
  );
}

export default App;
