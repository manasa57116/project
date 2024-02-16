
// import React, { useState } from 'react'
// import axios from 'axios';
// import { Input, FormGroup, Label, Col, Form, Button } from 'reactstrap'

// function Login() {
//   let LoginForm ={

//   }
//   if(window.innerWidth>600){
//     LoginForm.width='40%'
//     LoginForm.margin='1rem auto'
//   }
//   if(window.innerWidth<=400){
//     LoginForm.width='40%'
//     LoginForm.margin='1rem auto'
//   }


//     let [formdata, setFormdata] = useState({
//         email: '',
//         password: '',
//         check: false,
//       })
      

//       const handleOnChage = (e) => {
//         let { name, value, type, checked } = e.target;
//         let inputValue = type === 'checkbox' ? checked : value
//         setFormdata({
//           ...formdata,
//           [name]: inputValue
//         })
//       }
//       const handlesubmit = (e) => {
//         e.preventDefault();
//         console.log(formdata)
//         login();
//       }
    
//       let login = async () => {
//         try {
//           let response = await axios.post("http://localhost:3001/login", formdata);
//           // console.log(response)
//           // console.log("Login successful");
//           if(response.data.ok===1){
//             alert("register sucessfull")
//             setFormdata({
//               email:'',
//               password:'',
  
//             })
            
//           }
        
//         }
//         catch (err) {
//           console.log(err);
//         }
//       }

//       return (
//         <div style={LoginForm}>
//           <div style={{
//           backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/007/164/537/small/fingerprint-identity-sensor-data-protection-system-podium-hologram-blue-light-and-concept-free-vector.jpg")',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',

//           }}>
//             <Form>
//                 <h2 style={{ textAlign: 'center',color:'white'}}>LOGIN FORM</h2>
//                 <br></br>
//                 <Col md={6}>
//                   <FormGroup style={{color:'white',fontSize:'25px'}}>
//                     <Label for="exampleEmail">
//                       Email
//                     </Label>
//                     <Input
//                       id="exampleEmail"
//                       name="email"
//                       placeholder="Enter Email"
//                       type="email"
//                       value={formdata.email}
//                       onChange={handleOnChage}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col md={6}>
//                   <FormGroup style={{color:'white',fontSize:'25px'}}>
//                     <Label for="examplePassword">
//                       Password
//                     </Label>
//                     <Input
//                       id="examplePassword"
//                       name="password"
//                       placeholder=" Set Password"
//                       type="password"
//                       value={formdata.password}
//                       onChange={handleOnChage}
//                     />
//                   </FormGroup>
//                 </Col>
//               <FormGroup check>
//                 <Input
//                   id="exampleCheck"
//                   name="check"
//                   type="checkbox"
//                   value={formdata.checkbox}
//                   onChange={handleOnChage}
//                 />
                
//                 <Label style={{color:'white',fontSize:'15px'}}
//                   check
//                   for="exampleCheck"
//                 >
//                   Check me out
//                 </Label>
//               </FormGroup>
//               <Button onClick={handlesubmit} type='submit'>
//                 Login
//               </Button>
//             </Form>
//           </div>
//           </div>
//       )
// }

// export default Login




import React, { useState } from 'react'
import axios from 'axios';
import { Input, FormGroup, Label, Col, Form, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

function Login() {
  let LoginForm ={

  }
  if(window.innerWidth>600){
    LoginForm.width='40%'
    LoginForm.margin='1rem auto'
  }
  if(window.innerWidth<=400){
    LoginForm.width='40%'
    LoginForm.margin='1rem auto'
  }
    


    let [formdata, setFormdata] = useState({
        email: '',
        password: '',
        check: false,
      })
      

      const handleOnChage = (e) => {
        let { name, value, type, checked } = e.target;
        let inputValue = type === 'checkbox' ? checked : value
        setFormdata({
          ...formdata,
          [name]: inputValue
        })
      }
      const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
        login();
      }
    
      let login = async () => {
        try {
          let response = await axios.post("http://localhost:3001/login", formdata);
          // console.log(response)
          // console.log("Login successful");
          if(response.data.ok===1){
            alert("register sucessfull")
            setFormdata({
              email:'',
              password:'',
  
            })
            
          }
          // eslint-disable-next-line no-undef
          navigate('/');
        
        }
        catch (err) {
          console.log(err);
        }
      }

      return (
        <div style={LoginForm}>
          <div style={{
          backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/007/164/537/small/fingerprint-identity-sensor-data-protection-system-podium-hologram-blue-light-and-concept-free-vector.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

          }}>
            <Form>
                <h2 style={{ textAlign: 'center',color:'white'}}>LOGIN FORM</h2>
                <br></br>
                <Col md={6}>
                  <FormGroup style={{color:'white',fontSize:'25px'}}>
                    <Label for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      value={formdata.email}
                      onChange={handleOnChage}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={{color:'white',fontSize:'25px'}}>
                    <Label for="examplePassword">
                      Password
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder=" Set Password"
                      type="password"
                      value={formdata.password}
                      onChange={handleOnChage}
                    />
                  </FormGroup>
                </Col>
              <FormGroup check>
                <Input
                  id="exampleCheck"
                  name="check"
                  type="checkbox"
                  value={formdata.checkbox}
                  onChange={handleOnChage}
                />
                
                <Label style={{color:'white',fontSize:'15px'}}
                  check
                  for="exampleCheck"
                >
                  Check me out
                </Label>
              </FormGroup>
              <Button onClick={handlesubmit} type='submit'>
                Login
              </Button>
            </Form>
          </div>
          </div>
      )
}

export default Login