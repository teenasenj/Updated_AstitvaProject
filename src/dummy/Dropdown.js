// // import React, { useState } from 'react';

// // function Dropdown() {
// //   const [selectedValue, setSelectedValue] = useState('Option 1');
  
// //   // Dropdown options
// //   const options = ['Option 1', 'Option 2', 'Option 3'];

// //   // Event handler for selecting an option
// //   const handleSelect = (event) => {
// //     setSelectedValue(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <select value={selectedValue} onChange={handleSelect}>
// //         {options.map((option, index) => (
// //           <option key={index} value={option}>
// //             {option}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // }

// // export default Dropdown;
// // import React from "react";

// // Dropdown component that takes an array of options and a callback function as props
// // /




// // import React, { useState, useEffect } from 'react';

// // const Dropdown = () => {
// //   const [countries, setCountries] = useState([]);
// //   const [states, setStates] = useState([]);

// //   useEffect(() => {
// //     // Fetch countries
// //     fetch('https://api.example.com/countries')
// //       .then(response => response.json())
// //       .then(data => setCountries(data))
// //       .catch(error => console.log(error));

// //     // Fetch states
// //     fetch('https://api.example.com/states')
// //       .then(response => response.json())
// //       .then(data => setStates(data))
// //       .catch(error => console.log(error));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Countries:</h2>
// //       <ul>
// //         {countries.map(country => (
// //           <li key={country.id}>{country.name}</li>
// //         ))}
// //       </ul>

// //       <h2>States:</h2>
// //       <ul>
// //         {states.map(state => (
// //           <li key={state.id}>{state.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dropdown;




// import React, { useState } from 'react';
// import { countries } from './countries';

// const App = () => {
//   const [selectValue, setSelectValue] = useState('');

//   const handleChange = (e) => {
//     setSelectValue(e.target.value);
//   };

//   const getCountry = () => {
//     return countries.map((country) => (
//       <option value={country.dial_code} key={country.name}>
//         {country.name}
//       </option>
//     ));
//   };

//   return (
//     <div>
//       <select
//         className="form-control"
//         aria-label="Floating label select example"
//         onChange={handleChange}
//         value={selectValue}
//       >
//         <option value="choose" disabled>
//           -- Select country --
//         </option>
//         {getCountry()}
//       </select>
//     </div>
//   );
// };

// export default App;


function ChemistFetch() {
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  const [id, setId] = useState("");
  const [Statuschange, setStatuschange] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const getDataId = () => {
    let id = document.getElementById("val").value;
    axios.get(`http://localhost:5000/signup/${id}`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const handleDeleteRow = (id) => {
    setAPIData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setStatuschange(event.target.value);
  };

  const updateAPIData = () => {
    axios.put(`http://localhost:5000/signup/${id}`,
      { Statuschange }
    ).then(() => {
      navigate('/operator')
    })
  }

  return (
    <>
      <>
        <div className="card-body shadow bg-body-tertiary rounded card" style={{ width: "20rem" }}>
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
              {/* Table heading columns */}
              <TableHead>
                <TableRow sx={{ 'backgroundColor': '#1976d2' }}>
                  <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">Id</TableCell>
                  {/* ...Other table heading cells... */}
                  <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right">Status</TableCell>
                  <TableCell sx={{ 'fontSize': '15px', 'color': 'white' }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {APIData.map((APIData) => (
                  <TableRow key={APIData.id}>
                    {/* Table data */}
                    <TableCell align="right" key={APIData.id}>{APIData.id}</TableCell>
                    {/* ...Other table data cells... */}
                    <TableCell align="right" key={APIData.id}>
                      <select onChange={handleOptionChange} value={selectedOption}>
                        <option disabled selected>{APIData.status}</option>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                        <option value="not approved">not approved</option>
                      </select>
                    </TableCell>
                    <TableCell align="right" key={APIData.id}>
                      <Button variant="contained" id='setstatus' onClick={updateAPIData}>
                        update
                      </Button>
                    </TableCell>
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





import React, { useState } from 'react';
// ... other imports

function ChemistFetch() {
  const [APIData, setAPIData] = useState([]);
  const [id, setId] = useState("");
  const [Statuschange, setStatuschange] = useState("");
  const [showSelect, setShowSelect] = useState(false); // State to track if select should be visible
  const [selectedId, setSelectedId] = useState(""); // State to track the selected row ID
  const navigate = useNavigate();

  // ... other code

  const getDataId = () => {
    let id = document.getElementById("val").value;
    axios.get(`http://localhost:5000/signup/${id}`)
      .then((getData) => {
        setAPIData(getData.data);
        setShowSelect(true); // Show the select element after data fetch
        setSelectedId(id); // Store the selected row ID
      });
  };

  // ... other code

  return (
    <>
      <>
        <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "20rem" }}>
          <Grid container>
            <Grid item xs={9} sm={9} md={9}>
              <input id="val" type="text" className="form-control" style={{ width: "12rem" }} onChange={e => setId(e.target.value)} />
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
              {/* Table heading columns */}
              <TableHead>
                <TableRow sx={{ 'backgroundColor': '#1976d2' }}>
                  {/* ... other table cells */}
                </TableRow>
              </TableHead>
              <TableBody>
                {APIData.map((APIData) => (
                  <TableRow key={APIData.id}>
                    {/* ... other table cells */}
                    <TableCell align="right" key={APIData.id}>
                      {/* Show the select element only for the selected row */}
                      {showSelect && selectedId === APIData.id && (
                        <select onChange={(e) => setStatuschange(e.target.value)} value={Statuschange}>
                          <option className='disabled' selected>
                            {APIData.status}
                          </option>
                          <option>pending</option>
                          <option>approved</option>
                          <option>not approved</option>
                        </select>
                      )}
                    </TableCell>
                    {/* ... other table cells */}
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


import React, { useState } from 'react';
// ... other imports

function ChemistFetch() {
  const [APIData, setAPIData] = useState([]);
  const [id, setId] = useState("");
  const [Statuschange, setStatuschange] = useState("");
  const [showSelect, setShowSelect] = useState(false); // State to track if select should be visible
  const [selectedId, setSelectedId] = useState(""); // State to track the selected row ID

  const navigate = useNavigate();

  // ... other code

  const getDataId = () => {
    let id = document.getElementById("val").value;
    axios.get(`http://localhost:5000/signup/${id}`)
      .then((getData) => {
        setAPIData(getData.data);
        setShowSelect(true); // Show the select element after data fetch
        setSelectedId(id); // Store the selected row ID
      });
  };

  // ... other code

  return (
    <>
      <>
        <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "20rem" }}>
          <Grid container>
            <Grid item xs={9} sm={9} md={9}>
              <input id="val" type="text" className="form-control" style={{ width: "12rem" }} onChange={e => setId(e.target.value)} />
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
              {/* Table heading columns */}
              <TableHead>
                <TableRow sx={{ 'backgroundColor': '#1976d2' }}>
                  {/* ... other table cells */}
                </TableRow>
              </TableHead>
              <TableBody>
                {APIData.map((APIData) => (
                  <TableRow key={APIData.id}>
                    {/* ... other table cells */}
                    <TableCell align="right" key={APIData.id}>
                      {/* Show the select element only for the selected row */}
                      {showSelect && selectedId === APIData.id && (
                        <select onChange={(e) => setStatuschange(e.target.value)} value={Statuschange}>
                          <option className='disabled' selected>
                            {APIData.status}
                          </option>
                          <option>pending</option>
                          <option>approved</option>
                          <option>not approved</option>
                        </select>
                      )}
                    </TableCell>
                    {/* ... other table cells */}
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
