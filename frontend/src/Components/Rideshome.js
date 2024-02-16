import React from 'react'
import htrmain from '../Image/htrmain.jpg'
import waterridesmain from '../Image/waterridesmain.jpeg'
import crazycars from '../Image/crazycars.jpg'
import kidrides from '../Image/kidrides.jpg'

function Rideshome() {
  return (
    <div>
        <div className='Heading m-4'>
<h1>Rides at Wonderla Park</h1>
</div>


<div className="containerr" >
    <div className="image-container">
      <img  className='imgclass' src={htrmain} alt="" ></img>
    </div>
    
    <div className="htr" >
      <div className='htrride'>
      <h1  style={{color:"#0a2254"}}>High Thrill rides</h1>
      </div>
      <div className='htrride'>
      <h5>Your world will turn upside down within seconds, but in a good way!</h5>
      </div>
    </div>

</div>

<div className="containerr d-flex" >
    <div className="htr" >
      <div className='htrride'>
      <h1  style={{color: "#6e3636"}}>Water Rides</h1>
      </div>
      <div className='htrride'>
      <h5>Your world will turn upside down within seconds, but in a good way!</h5>
      </div>
      {/* <div className='htrride'>
        <Button>KnowMore</Button>
      </div> */}
    </div>
    <div className="image-container">
      <img  className='imgclass1' src={waterridesmain} alt="" ></img>
    </div>
</div>

<div className="containerr d-flex" >
    <div className="image-container">
      <img  className='imgclass' src={crazycars} alt="" ></img>
    </div>
    <div className="htr" >
      <div className='htrride'>
      <h1  style={{color:"#0a2254"}}>Land rides</h1>
      </div>
      <div className='htrride'>
      <h5>Your world will turn upside down within seconds, but in a good way!</h5>
      </div>
      {/* <div className='htrride'>
        <Button>KnowMore</Button>
      </div> */}
    </div>

</div>

<div className="containerr d-flex" >
    <div className="htr" >
      <div className='htrride'>
      <h1  style={{color: "#6e3636"}}>Kids Rides</h1>
      </div>
      <div className='htrride'>
      <h5>Your world will turn upside down within seconds, but in a good way!</h5>
      </div>
      {/* <div className='htrride'>
        <Button>KnowMore</Button>
      </div> */}
    </div>
    <div className="image-container">
      <img  className='imgclass1' src={kidrides} alt="" ></img>
    </div>
</div>
    </div>
  )
}

export default Rideshome