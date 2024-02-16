import React from 'react'
import Navbar1 from './Navbar1'
import { Card,CardBody,CardTitle } from 'reactstrap'
import { useEffect,useState } from 'react'
import axios from 'axios'

function Water() {
  let [data,setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:3004/water");
                console.log(response.data);
                setData(response.data)
            }
            catch(err){
                console.log(err);
            }
            
        }
        fetchData();
    }, [])
  return (
    <div>
      <Navbar1 />
      <br></br>
      <br></br>

      <div className='htrHeading'>
        <h1>Mega waterRide Thrillers at Wonderla Amusement Park</h1>
      </div>
      <br></br>
      <br>
      </br>

      <div className='card-container'>
        {data && data.map((item)=>(
                <Card 
                style={{
                  width: '25rem',
                  marginLeft:'30px'
                }}
              >
                <img
                  alt="Sample"
                  src={item["url"]}
                />
                <CardBody>
                  <CardTitle tag="h2">
                    {item.title}
                  </CardTitle>
                  
                  
                </CardBody>
              </Card>
        ))}

      </div>
    </div>
  )
}

export default Water