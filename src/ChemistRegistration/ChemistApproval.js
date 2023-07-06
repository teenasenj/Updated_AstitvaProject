import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState} from 'react';


const ChemistApproval = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [usertype,setusertype]=useState('')
   

 
const postData = () => {
    axios.post(`http://localhost:5000/login`, 
        {
            email,
            password,
            usertype
     }).then(() => {
    navigate('/read')
    })
             }



  return (
    <>
    
    <form >
      <div className="d-flex justify-content-center">
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded card align-middle" style={{ width: '30rem' }}>
          <div className="card-body">
              
            {/* //email */}
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             required
            />
          

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
                  <option value="Operator"disabled>Operator</option>
                  <option value="Chemist" >Chemist</option>
                  </select> 
              </div>

            
                {/* //submit */}
              <div className="d-flex flex-row">
                <button type="submit"
                  className="btn btn-primary d-flex justify-content-center"
                  style={{ width: '5rem' }}
                  onClick={postData}
                >
                  Submit
                </button>
                &nbsp;&nbsp;
              </div>
          </div>
        </div>
      </div>
    </form>
      </>
  );
};

export default ChemistApproval;
