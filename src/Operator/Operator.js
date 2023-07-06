import React from 'react';
import Button from '@mui/material/Button';  
import styled from 'styled-components'
import logo from '../image/logo.png'
import { Grid } from '@mui/material';
import { NavLink, Outlet } from "react-router-dom";
import Typography from '@mui/material/Typography';

const AnimationDelay = styled.div
`{
width: 300px;
height: 250px;
background: url(${logo}) no-repeat bottom center / 60%;
animation: moveBg 3s ease 1s 1 forwards;
}

@keyframes moveBg {
100% {
  background: url(${logo}) no-repeat bottom center / 100%;
  }
  `
const Operator = () => {
	
return (
	<>
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
            <AnimationDelay></AnimationDelay>
    </nav>
    
    <Grid container> 
      {/* //grid col 1 */}
      <Grid item xs={12} sm={3} md={3} >
	      <Button variant="contained">
          <NavLink to="chemfetch" style={{textDecoration:'none',color:'white'}}  >chemist fetch</NavLink> 
        </Button>
	      <br></br>
        <br></br>
  
        <Button variant="contained" >
          <NavLink to="chemistapproval" style={{textDecoration:'none',color:'white'}}>chemist approval</NavLink> 
        </Button>
      </Grid>
      

      {/* //grid col 2 */}
      <Grid item xs={12} sm={7} md={7}>
        <Outlet />
      </Grid>
       
      {/* //grid col 3 */}
      <Grid item xs={12} sm={2} md={2} >
        <Typography 
              sx={{ 'color': '#1976d2', fontSize: '2rem' }}>
              Operator
        </Typography>
      </Grid>
      </Grid>
	</>
)
};

export default Operator;




