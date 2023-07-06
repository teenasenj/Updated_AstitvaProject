import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { useState } from "react";
import { Grid } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
// import {IoIosCheckmarkCircleOutline} from 'react-icons/io';  
// import { FiCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';  


function ChemistFetch() {
   
const navigate = useNavigate();
  
  
  //Get by id method
  const [id, setId] = useState("");
  const [APIData, setAPIData] = useState([]);

  const getDataId = () => {
    let id = document.getElementById("val").value; 
      axios.get(`http://localhost:5000/signup/${id}`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }




//update method
  const [status, setStatuschange] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [email, setemail]=useState("");

  const updateAPIData = () => {
    Promise.all([
    axios.put(`http://localhost:5000/signup/${id}`, 
      {
        status,
        password,
        usertype
 
    }),
      
           
  axios.post(`http://localhost:5000/users_master`, 
                     {
                       
                      password,
                      usertype,
                 
                      
                     })
    ]).then(axios.spread((data1, data2) => {
      navigate('/Chemist')
    }))
}
 
  
  const handleDeleteRow = (id) => {
    setAPIData((prevData) => prevData.filter((row) => row.id !== id));
  };

  // const generatePassword = () => {
  //   const length = 10; // desired password length
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  
  //   let newPassword = '';
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     newPassword += characters[randomIndex];
  //   }
  
  //   setPasswordchange(newPassword);
  // };
  



    return (
        <>
        <>    
        <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "20rem" }}>
          <Grid container> 
            <Grid item xs={9} sm={9} md={9}>
              <input id="val" type="text" className="form-control" style={{ width: "12rem" }}
               onChange={e => setId(e.target.value)} 
               />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>
                Fetch
              </button>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <br></br> 
          
<div className='d-flex justify-content-center'>           
<TableContainer>
<Table sx={{ 'minWidth': '400' }} aria-label="customized table">
{/* //Table heading columns*/}
<TableHead>
  <TableRow sx={{'backgroundColor':'#1976d2'}}>  
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Id</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Shop name</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">First Name</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Last Name</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">DOB</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Licence No</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Qualification</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Email</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Phone no</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Driving Licenceno</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Address</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">State</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Country</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Chemist Licence Photo</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Driving Licence Photo</TableCell>
    <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">Chemist Photo</TableCell>
                    
                   {/* <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">email</TableCell>  */}
                    <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">password</TableCell> 
                    <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">usertype</TableCell>
                    
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right">Status</TableCell>
    <TableCell sx={{'fontSize':'15px', 'color':'white'}} align="right"></TableCell>
    </TableRow>                
</TableHead>
<TableBody>
  {APIData.map((APIData) => (
    <TableRow key={APIData.id}>
    {/* table data  */}
    <TableCell align="right" key={APIData.id}>{APIData.id}</TableCell>  
    <TableCell align="right"key={APIData.id} >{APIData.shopname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.firstname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.lastname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.dob}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.licenceno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.qualification}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.email}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.phoneno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.drivinglicenceno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.address}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.state}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.country}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.chemistlicence}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.drivinglicence}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.chemistphoto}</TableCell>  
      
      {/* <TableCell align="right" key={APIData.id}>
        
                             </TableCell> */}

    {/* <TableCell align="right" key={APIData.id}>
      <input type='text'  onChange={(e) => setPassword(e.target.value)} value={email}> 
      </input>
    </TableCell>                     */}
      
    <TableCell align="right" key={APIData.id}>
      <input type='text'  onChange={(e) => setPassword(e.target.value)} value={password}> 
      </input>
    </TableCell>  


    <TableCell align="right" key={APIData.id}>
      <select onChange={(e) => setUsertype(e.target.value)} value={usertype}>
        <option className='disabled' selected>                                         
          {APIData.usertype}                                               
        </option>
        <option selected>Chemist</option>
      </select>
    </TableCell>  
      

    <TableCell align="right" key={APIData.id}>
      <select onChange={(e) => setStatuschange(e.target.value)} value={status}>
        <option className='disabled' selected>                                         
           {APIData.status}                                               
        </option>
        <option>Pending </option>
        <option>Approved</option>
        <option>Not approved</option>
      </select>
    </TableCell>

    <TableCell align="right" >  
      <Button variant="contained" id='setstatus' onClick={updateAPIData} >
        status 
      </Button>
    </TableCell>

    {/* </TableCell>   */}
    <TableCell align="right" key={APIData.id}>
    <MdDeleteForever
      onClick={() => handleDeleteRow(APIData.id)}
      className='icon delete-icon'
    />
    </TableCell>       
      
    <TableCell align="right"></TableCell>  
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer> 
</div>  
</>
</>
  );
};

export default ChemistFetch;
















