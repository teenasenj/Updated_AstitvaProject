import Button from '@mui/material/Button';
import logo from '../image/logo.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
 import {NavLink, Outlet } from "react-router-dom";

const AnimationDelay = styled.div 
  `
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
    
function Admin() {
  const navigate = useNavigate();
    return (
        <>
        <nav className="navbar navbar-expand-lg shadow p-1 mb-5 bg-body-tertiary  rounded container-fluid">
          <AnimationDelay> </AnimationDelay>

          {/* //Logout */}
          <Grid container> 
            <Grid item xs={9} sm={9} md={9}>
            </Grid>

            <Grid item xs={3} sm={3} md={3}>
              <Button variant="contained"
                onClick={() => navigate("/Login")}
                className='d-flex justify-content-end'
              >
               Logout
              </Button>
            </Grid>
          </Grid>
        </nav>
 
       
                   {/* <Button variant="contained" */}
                    {/* //style={{marginLeft:'1rem'}}
                        //onClick={() => navigate("/AddingOperator")} >
                       // Add Operator
                      // </Button> */}

          <Grid container> 
            {/* //grid col 1 */}
            <Grid item xs={12} sm={3} md={3} >
              <Button variant="contained">
                <NavLink to="loginfetch" style={{textDecoration:'none',color:'white'}}  >Login Fetch</NavLink> 
              </Button>
           <br></br>
           <br></br>
              {/* <Button variant="contained">
                <NavLink to="chemfetch" style={{textDecoration:'none',color:'white'}}>ChemistFetch</NavLink> 
              </Button>
              <br></br>
              <br></br>   */}
              {/* <Button variant="contained">
                <NavLink to="Operator" style={{textDecoration:'none',color:'white'}}>View Operators</NavLink> 
              </Button>
              <br></br>
              <br></br> */}
            
              <Button variant="contained">
                <NavLink to="OperatorFetch" style={{textDecoration:'none',color:'white'}}> Operator Fetch</NavLink> 
              </Button>
              <br></br>
              <br></br>
            
              <Button variant="contained">
                <NavLink to="AddingOperator" style={{textDecoration:'none',color:'white'}}>Adding Operator</NavLink> 
              </Button>
              <br></br>
              <br></br>
            
              {/* <Button variant="contained">
                <NavLink to="OperatorRegister" style={{textDecoration:'none',color:'white'}}>Operator Register</NavLink> 
              </Button>
              <br></br>
              <br></br> */}
          </Grid>
        
          {/* //grid col 2 */}
          <Grid item xs={12} sm={7} md={7}>
            <Outlet />
          </Grid>
       
          {/* //grid col 3 */}
          <Grid item xs={12} sm={2} md={2} >
            <Typography 
              sx={{ 'color': '#1976d2', fontSize: '2rem' }}>
              Admin
            </Typography>
          </Grid>
          </Grid>
          </>)
}
export default Admin;



