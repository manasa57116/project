import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Navbar1() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light text-white navbar1">
 
 <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target = "#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse " id="navbarNav">
   <ul className="navbar-nav  text-white mx-auto ">
    
     <li className="nav-item active">
       <Link  to="/HighthrillRides" className="nav-link" href="#"><h5>HighThrillRides</h5> <span className="sr-only">(current)</span></Link>
     </li>
     <li className="nav-item active">
       <Link to="/WaterRides" className="nav-link " href="#"><h5>WaterRides</h5></Link>
     </li>
     <li className="nav-item active">
       <Link to="/LandRides" className="nav-link " href="#"><h5>LandRides</h5></Link>
     </li>
     <li className="nav-item active">
       <Link  to="/KidsRides" className="nav-link " href="#"><h5>KidsRides</h5></Link>
     </li>
   </ul>
 </div>
</nav>
    </div>
  )
}

export default Navbar1