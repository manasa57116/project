import React, { useState } from 'react';

 import axios from 'axios';

const BookNow = () => {
  let BookForm={
    
    border:'1px solid black', 
    borderWidth:'2px',
    width:'700px',
    height:'auto',
    padding:'2rem',
    margin:'3rem auto',
    borderRadius:'2px',
    color:'navy'
  
    }
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    adultTickets: '',
    childTickets: '',
    // Add more form fields as needed
  });

  // Define ticket prices
  const ticketPrices = {
    adult: 1300,
    child: 500,
    // Add more ticket types and prices as needed
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleIncrement = (field) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: prevState[field] + 1
    }));
  };

  const handleDecrement = (field) => {
    if (formData[field] > 0) {
      setFormData(prevState => ({
        ...prevState,
        [field]: prevState[field] - 1
      }));
    }
  };

  const calculateTotalAmount = () => {
    const adultPrice = ticketPrices.adult;
    const childPrice = ticketPrices.child;
    return (formData.adultTickets * adultPrice) + (formData.childTickets * childPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to the server
    console.log(formData);
    alert("booked")
    let register=async()=> {
      try{
        let response=await axios.post("http://localhost:3004/insert",formData)
        if(response.data.ok===1){
          alert("register sucessfull")
          setFormData({
            name:'',
            email:'',
            adultTickets:'',
            childTickets:''
            
          })
        }
        
        }
      catch(err) {
        console.log(err)
      
      }
      
    }
    register()
      
  };

  return (
    <div style={{backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731787_npIDENXs9NMkl1mtyHKj8De2WBL2vnFW.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',}}>
    <div style={BookForm} >
    
      <h2 style={{textAlign:'center'}}>BOOKING FORM</h2>
      <br></br>
      
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:'20px'}}>
          Name: 
          <br></br>   
         
          <input 
            style={{ width: '500px' }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
           
          />
        </label>
        <br />
        <label style={{fontSize:'20px'}}>
          Email:
          <br></br>
          <input 
            style={{ width: '500px' }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label style={{fontSize:'20px'}}>
          Adult Tickets:
          <button type="button" onClick={() => handleDecrement('adultTickets')}>-</button>
          <input 
            type="number"
            name="adultTickets"
            value={formData.adultTickets}
            onChange={handleChange}
            min="1"
            required
          />
          <button type="button" onClick={() => handleIncrement('adultTickets')}>+</button>
        </label>
        <br />
        <label style={{fontSize:'20px'}}>
          Child Tickets:
          <button type="button" onClick={() => handleDecrement('childTickets')}>-</button>
          <input 
          
            type="number"
            name="childTickets"
            value={formData.childTickets}
            onChange={handleChange}
            min="1"
            required
          />
          <button type="button" onClick={() => handleIncrement('childTickets')}>+</button>
        </label>
        <br />
        <p style={{fontSize:'30px'}}>
          Total Amount: {calculateTotalAmount()}
          </p>
        <button style={{backgroundColor:'pink',color:'black'}} type="submit">BOOK NOW</button>
      </form>
    </div>
    </div>
  );
};

export default BookNow;

