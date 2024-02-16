import { useState } from 'react'
 import {Input,FormGroup,Label,Form,Col,Row,Button} from 'reactstrap'
 import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register() {

  let registerForm={
  border:'1px solid black', 
  borderWidth:'2px',
  width:'500px',
  height:'auto',
  padding:'2rem',
  margin:'3rem auto',
  borderRadius:'2px',
  }
  if(window.innerWidth>600){
    registerForm.width='40%'
    registerForm.margin='1rem auto'
  }
  if(window.innerWidth<=600){
    registerForm.width='40%'
    registerForm.margin='1rem auto'
  }

  let navigate=useNavigate()
  let [formdata,setFormData] = useState({
    email:'',
    password:'',
    address:'',
    mobilenumber:'',
    check:'false'
  })
  const handleOnchange = (e) =>{
   let {name,value,type,checked} = e.target  
   let inputValue = type === 'checkbox' ? checked:value
     
    setFormData({
     ...formdata,
       [name]:inputValue
    })

  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(formdata)
  let register=async()=> {
  try{
    let response=await axios.post("http://localhost:3004/insert",formdata)
    if(response.data.ok===1){
      alert("register sucessfull")
      setFormData({
        email:'',
        password:'',
        address:'',
        mobilenumber:'',
        check:'false'
      })
    }
    navigate('/Login')
    }
  catch(err) {
    console.log(err)
  

  }
  
}
register()
  }

  return (
    <div style={{ 
      backgroundImage: 'url("https://img.freepik.com/free-photo/elevated-view-laptop-stationeries-yellow-backdrop_23-2147880496.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
    <div style={registerForm}>
      <Form onSubmit={handlesubmit}>
      <FormGroup>
    <Label for="name">
      User Name
    </Label>
    <Input
      id="name"
      name="UserName"
      placeholder="name"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          value= {formdata.email}
          onChange={handleOnchange}
          
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
          value = {formdata.password}
          onChange={handleOnchange}

        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="Address"
      value= {formdata.address}
      onChange={handleOnchange}

    />
  </FormGroup>
  <FormGroup>
    <Label for="mobile">
      MobileNumber
    </Label>
    <Input
      id="mobile"
      name="mobilenumber"
      placeholder="Number"
      value= {formdata.mobilenumber}
      onChange={handleOnchange}

    />
  </FormGroup>

  
  
  <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label style={{color:'white'}}
      check
      for="exampleCheck"
    >
      Check me out
    </Label>
  </FormGroup>
  <Button  type='submit'>
   Register
  </Button>
</Form>
    </div>
    </div>
  )
}

export default Register