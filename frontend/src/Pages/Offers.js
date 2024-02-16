import React from 'react'
import offer1 from '../Image/offer1.jpg'
import offer2 from '../Image/offer2.jpg'
import offer3 from '../Image/offer3.jpg'
import offer4 from '../Image/offer4.jpg'
import offer5 from '../Image/offer5.jpg'
import offer6 from '../Image/offer6.jpg'

function Offers() {
  return (
    <div className='manasa' >
      <br></br>
      <br></br>
      <h1>Exiciting Offers at Wonderla to Make You Jump With Joy!</h1>
      <br></br>
      <br></br>
      <div className='offerdetails'>
        <div className='offers'>
          <img  className="offerimg" src={offer6} alt='' ></img>
          <h3>2 days Package</h3>
          <p>Spark your love story with Wonderla's Valentine's Day! Choose from Couple Tickets or a romantic Sky Wheel ride with snacks or a fun-filled dinner by the Wave Pool! Book your unforgettable experience now!</p>
        </div>
        <div className='offers'>
          <img  className="offerimg" src={offer1} alt='' ></img>
          <h3>Women Wonder </h3>
          <p>Celebrate International Women's Day at Wonderla on March 8, 2024, with our exclusive Buy One, Get One Free offer for women. Enjoy thrilling rides and a vibrant atmosphere, with park entry reserved only for women.</p>
        </div>
        <div className='offers'>
          <img  className="offerimg" src={offer2} alt='' ></img>
          <h3>COMBO </h3>
          <p>Welcome to Wonderla's exclusive celebration of women with our exciting 'Free Wednesdays for Women' offer! Every Wednesday, it's all about the ladies at Wonderla Parks!</p>
        </div>
        <div className='offers'>
          <img  className="offerimg" src={offer3} alt='' ></img>
          <h3>Couple Ticket</h3>
          <p>Special Park ticket and Lunch combo offers for students aged 16 to 24 years at Wonderla Hyderabad. Go all out and have fun like never before!</p>
        </div>
        <div className='offers'>
          <img  className="offerimg" src={offer4} alt='' ></img>
          <h3>Travel Offer</h3>
          <p>Wonderla Parks Honors Indian Armed Forces with Special Discount Offer for Service Personnel and Their Families.</p>
        </div>
        <div className='offers'>
          <img  className="offerimg" src={offer5} alt='' ></img>
          <h3>Advance</h3>
          <p>Wonderla Amusement Park is offering an amazing Black Friday sale on park tickets! Get your tickets for just Rs 899, a huge discount from the regular price. </p>
        </div>
       
        
        
        
      </div>
    </div>
  )
}

export default Offers