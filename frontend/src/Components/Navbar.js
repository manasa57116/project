import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Dark_logo_ijroaw.jpg'
import { Button } from 'reactstrap'

import { useNavigate } from 'react-router-dom'

function Navbar() {
  let  navigate=useNavigate()
  const handleClick = () => {
    navigate('/Booknow');
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <img src={Image} height={90} width={250} alt=""></img>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active p-2 ">
        <Link to ="/"className="nav-link text-white" href="#"><h4>About</h4><span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active p-2">
        <Link to ="/Rides" className="nav-link text-white" href="#"><h4>Rides</h4><span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item active p-2">
        <Link to ="/TimingTickets" className="nav-link text-white" href="#"><h4>Timings/Tickets</h4> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active p-2 ">
        <Link to ="/Offers"className="nav-link text-white" href="#"><h4>Offers</h4><span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active p-2 ">
        <Link to ="/Register" className="nav-link text-white" href="#"><h4>Register</h4><span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item active p-2">
        <Link to ="/Login" className="nav-link text-white" href="#"><h4>Login</h4><span className="sr-only">(current)</span></Link>
      </li>
    </ul>

    
    <Button onClick={handleClick} className='ml-auto' type="button" class="btn btn-warning" ><h4>BOOKNOW</h4></Button>
  </div>
</nav>

    </div>
  )
}

export default Navbar
