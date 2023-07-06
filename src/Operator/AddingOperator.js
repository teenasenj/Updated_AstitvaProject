import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//React date picker
import DatePicker from 'react-datepicker';

const AddingOperator = () => { 
    const [name, setname] = useState("")
    const [dob, setdob] = useState(null);
    const [qualification, setqualification] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState('');
    const [usertype,setusertype]=useState('')
    const [phoneno, setphoneno] = useState("")
    const [address, setaddress] = useState("")
 
      const navigate = useNavigate();
      
      const handlename =(e)=>{
          setname(e.target.value);
      }
     
       const handlequalification =(e)=>{
          setqualification(e.target.value);
      }
      const handleemail =(e)=>{
          setemail(e.target.value);
      }
      const handlephoneno =(e)=>{
          setphoneno(e.target.value);
      }
      
      const handleaddress =(e)=>{
          setaddress(e.target.value);
      }
  
    
  //     const postData = () => {
  //       axios.post(`http://localhost:5000/adding_operator`, 
  //           {
                // firstname,
                // lastname,
                // dob,
                // qualification,
                // email,
                // phoneno,
                // address
      
  //       }).then(() => {
  //       navigate('/read')
  //       })
  // }
  


  // const postData = () => {
  //   axios.post(`http://localhost:5000/login`, 
  //       {
            // email,
            // password,
            // usertype
  //    }).then(() => {
  //   navigate('/read')
  //   })
  //            }

  
  
  
  const postData = () => {
  Promise.all([
    axios.post(`http://localhost:5000/adding_operator`, 
                     {
                      name,
                      dob,
                      qualification,
                      email,
                      phoneno,
                      address,
                      password,
                      usertype
                     }),
             
  axios.post(`http://localhost:5000/users_master`, 
                     {
                      email,
                      password,
                      usertype,
                      name
                     })
                   ]).then(axios.spread((data1, data2) => {
                   
                    navigate('/Operator')
                       }))
            }
     
return (
	<>
	
     <form>
        <div className="d-flex justify-content-center">
          <div className="shadow p-2 mb-2 bg-body-tertiary rounded card align-middle" 
           style={{ width: "30rem" }}>
            <div className="card-body">
              
              {/* //1st row */}
              <div className="d-flex flex-row">
                {/* name */}
                <div>
                  <label For="name"
                   className="form-label">
                    Name
                  </label>
                  <input type="text"
                    onChange= { handlename } 
                    className="form-control" 
                    required/>
                </div> &nbsp; &nbsp; &nbsp;
              
              {/* //usertype */}
                <div className="mb-3">
                  <label htmlFor="usertype"
                     className="form-label">
                     usertype
                  </label>
                  <select
                    type="usertype"
                    className="form-control" 
                    value={usertype}
                    onChange={(e) => setusertype(e.target.value)}
                    required
                  >
                  <option value="" disabled> --Select--</option> 
                  <option value="Operator">Operator</option>
                  <option value="Chemist" disabled>Chemist</option>
                  </select> 
                </div>
 
              </div>
          
                {/* //2nd row */}
                {/* dob */}
                <div className="d-flex flex-row">
                <div>
                  <label For="dob"
                    className="form-label">
                   DOB
                  </label><br></br>
                  <DatePicker
                 selected={dob}
                 onChange={date => setdob(date)}
                 dateFormat="dd-MM-yyyy"
                 className="form-control"
                 required
                  />
              </div> &nbsp; &nbsp; &nbsp;


                {/* qualification */}
                <div className="mb-3">
                  <label For="qualification"
                   className="form-label">
                    Qualification
                  </label>
                  <input type="text"
                   onChange= { handlequalification } 
                   className="form-control" 
                   required/>
                </div>
          
                </div>

              {/* //3nd row */}
              {/* email */}
              <div className="d-flex flex-row">
                <div className="mb-3">
                  <label For="email" 
                   className="form-label">
                    Email
                  </label>
                  <input type="email"
                   onChange= { handleemail } 
                   className="form-control " 
                   required/>
                </div> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                {/* phone_no */}
                <div>
                  <label For="phone_no" 
                   className="form-label">
                    Phone Number
                  </label>
                  <input type="number"
                   onChange={handlephoneno} 
                   className="form-control " 
                   required/>
                </div> &nbsp; &nbsp; &nbsp;
              </div>


              {/* //4th row */}
                {/* address */}
              <div className="d-flex flex-row">
                <div className="mb-3">
                  <label For="address" 
                  className="form-label">
                  Address</label>
                  <input type="text"
                   onChange= { handleaddress} 
                   className="form-control" 
                   required />
                </div>
                &nbsp; &nbsp; &nbsp;
                 
                         
            {/* //password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </div>
              </div> 
  
            {/* <a onClick={()=>navigate("/Login")}> */}
             <button 
                type="submit"
                onClick={postData}
               className="btn btn-primary d-flex justify-content-center"
               style={{ width: "5rem" }}>
                 Submit
                </button>
                {/* </a> */}
          </div>
        </div>
        </div>
      </form>
	</>
)
};

export default AddingOperator;


