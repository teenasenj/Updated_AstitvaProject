// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import axios from "axios";
// import { Grid } from '@mui/material';
// import { MdDeleteForever } from 'react-icons/md';

// function ChemistFetch() {
//   const [APIData, setAPIData] = useState([]);

//   const getDataId = () => {
//     let id = document.getElementById("val").value; 
//     axios.get(`http://localhost:5000/signup/${id}`)
//       .then((getData) => {
//         setAPIData(getData.data);
//       });
//   }

//   const handleDeleteRow = (id) => {
//     setAPIData((prevData) => prevData.filter((row) => row.id !== id));
//   };

//   return (
//     <>
//       <div className="card-body shadow bg-body-tertiary rounded card" style={{ width: "20rem" }}>
//         <Grid container> 
//           <Grid item xs={9} sm={9} md={9}>
//             <input id="val" type="text" className="form-control" style={{ width: "12rem" }} />
//           </Grid>
//           <Grid item xs={3} sm={3} md={3}>
//             <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>
//               Fetch
//             </button>
//           </Grid>
//         </Grid>
//       </div>
//       <br />
//       <br />
//       <div className='d-flex justify-content-center'>           
//         <TableContainer>
//           <Table sx={{ 'minWidth': '400' }} aria-label="customized table">
//             <TableHead>
//               <TableRow sx={{'backgroundColor':'#1976d2'}}>
//                 {/* Table heading columns */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {APIData.map((row) => (
//                 <TableRow key={row.id}>
//                   {/* Table data */}
//                   <TableCell align="right">{row.id}</TableCell>  
//                   <TableCell align="right">{row.shopname}</TableCell>
//                   <TableCell align="right">{row.firstname}</TableCell>
//                   <TableCell align="right">{row.lastname}</TableCell>
//                   <TableCell align="right">{row.dob}</TableCell>
//                   <TableCell align="right">{row.licenceno}</TableCell>
//                   <TableCell align="right">{row.qualification}</TableCell>
//                   <TableCell align="right">{row.email}</TableCell>
//                   <TableCell align="right">{row.phoneno}</TableCell>
//                   <TableCell align="right">{row.drivinglicenceno}</TableCell>
//                   <TableCell align="right">{row.address}</TableCell>
//                   <TableCell align="right">{row.state}</TableCell>
//                   <TableCell align="right">{row.country}</TableCell>
//                   <TableCell align="right">{row.chemistlicence}</TableCell>
//                   <TableCell align="right">{row.drivinglicence}</TableCell>
//                   <TableCell align="right">{row.chemistphoto}</TableCell>
//                   <TableCell align="right">
//                     <MdDeleteForever
//                       onClick={() => handleDeleteRow(row.id)}
//                       className='icon delete-icon'
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer> 
//       </div>
//     </>
//   );
// }

// export default ChemistFetch;




// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import axios from "axios";
// import { Grid } from '@mui/material';
// import { MdDeleteForever } from 'react-icons/md';

// function ChemistFetch() {
//   const [APIData, setAPIData] = useState([]);

//   const getDataId = () => {
//     let id = document.getElementById("val").value; 
//     axios.get(`http://localhost:5000/signup/${id}`)
//       .then((getData) => {
//         setAPIData(getData.data);
//       });
//   }

//   const handleDeleteRow = (id) => {
//     setAPIData((prevData) => prevData.filter((row) => row.id !== id));
//   };

//   return (
//     <>
//       <div className="card-body shadow bg-body-tertiary rounded card" style={{ width: "20rem" }}>
//         <Grid container> 
//           <Grid item xs={9} sm={9} md={9}>
//             <input id="val" type="text" className="form-control" style={{ width: "12rem" }} />
//           </Grid>
//           <Grid item xs={3} sm={3} md={3}>
//             <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>
//               Fetch
//             </button>
//           </Grid>
//         </Grid>
//       </div>
//       <br />
//       <br />
//       <div className='d-flex justify-content-center'>           
//         <TableContainer>
//           <Table sx={{ 'minWidth': '400' }} aria-label="customized table">
//             <TableHead>
//               <TableRow sx={{'backgroundColor':'#1976d2'}}>
//                 {/* Table heading columns */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {APIData.map((APIData) => (
//                 <TableRow key={APIData.id}>
//                   {/* Table data */}
//                   <TableCell align="right">{APIData.id}</TableCell>  
//                   <TableCell align="right">{APIData.shopname}</TableCell>
//                   <TableCell align="right">{APIData.firstname}</TableCell>
//                   <TableCell align="right">{APIData.lastname}</TableCell>
//                   <TableCell align="right">{APIData.dob}</TableCell>
//                   <TableCell align="right">{APIData.licenceno}</TableCell>
//                   <TableCell align="right">{APIData.qualification}</TableCell>
//                   <TableCell align="right">{APIData.email}</TableCell>
//                   <TableCell align="right">{APIData.phoneno}</TableCell>
//                   <TableCell align="right">{APIData.drivinglicenceno}</TableCell>
//                   <TableCell align="right">{APIData.address}</TableCell>
//                   <TableCell align="right">{APIData.state}</TableCell>
//                   <TableCell align="right">{APIData.country}</TableCell>
//                   <TableCell align="right">{APIData.chemistlicence}</TableCell>
//                   <TableCell align="right">{APIData.drivinglicence}</TableCell>
//                   <TableCell align="right">{APIData.chemistphoto}</TableCell>
//                   <TableCell align="right">
//                     <MdDeleteForever
//                       onClick={() => handleDeleteRow(APIData.id)}
//                       className='icon delete-icon'
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer> 
//       </div>
//     </>
//   );
// }

// export default ChemistFetch;

// ... (previous code)

function ChemistFetch() {
  // ... (previous code)

  return (
    <>
      <>
        {/* ... (previous code) */}
        <div className='d-flex justify-content-center'>
          <TableContainer>
            <Table sx={{ 'minWidth': '400' }} aria-label="customized table">
              {/* Table heading columns */}
              <TableHead>
                <TableRow sx={{ 'backgroundColor': '#1976d2' }}>
                  {/* ... (previous code) */}
                  <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">Status</TableCell>
                  <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {APIData.map((APIData) => (
                  <TableRow key={APIData.id}>
                    {/* table data */}
                    {/* ... (previous code) */}
                    <TableCell align="right" key="status">
                      {APIData.status === 'approved' && <IoIosCheckmarkCircleOutline style={{ color: 'green' }} />}
                      {APIData.status === 'pending' && <FiCircle style={{ color: 'orange' }} />}
                      {APIData.status === 'not approved' && <FiCircle style={{ color: 'red' }} />}
                    </TableCell>
                    <TableCell align="right">
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
}

export default ChemistFetch;
