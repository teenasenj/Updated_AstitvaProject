
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from '../image/logo.png'
import styled from 'styled-components'
  
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
const Chemist = () => { 
    const [productname, sethandleproductname] = useState("")
    const [quantity, sethandlequantity] = useState("")
    const [dosagestrip, sethandleDosageStrip] = useState("")
    const [productphoto, sethandleproductphoto] = useState("")
  
 
      const navigate = useNavigate();
      
      const handleProductname =(e)=>{
          sethandleproductname(e.target.value);
      }
      const handlequantity =(e)=>{
          sethandlequantity(e.target.value);
      }
     
      const handleDosageStrip =(e)=>{
          sethandleDosageStrip(e.target.value);
      }
      const handleproductphoto =(e)=>{
          sethandleproductphoto(e.target.value);
      }
      
    
      const postData = () => {
        axios.post(`http://localhost:5000/product_master`, 
            {
              productname,
              quantity,
              dosagestrip,
              productphoto
            }).then(() => {
        navigate('/read')
        })
         }
     
return (
  <>
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
      <AnimationDelay> </AnimationDelay>
    </nav>
	
     <form>
        <div className="d-flex justify-content-center">
          <div className="shadow p-2 mb-2 bg-body-tertiary rounded card align-middle" 
           style={{ width: "30rem" }}>
            <div className="card-body">
           
                {/* Product name */}
                <div>
                  <label For="Product name"
                   className="form-label">
                  Product Name
                  </label>
                  <input type="text"
                    onChange= { handleProductname } 
                    className="form-control" 
                    required/>
                </div> &nbsp; &nbsp; &nbsp;
              
                 {/* quantity */}
                <div>
                  <label For="quantity"
                   className="form-label">
                   Quantity
                  </label>
                  <input type="number"
                   onChange= { handlequantity} 
                   className="form-control " 
                   required/>
              </div>&nbsp; &nbsp; &nbsp;
          
                {/* Dosage-Strip */}
                <div>
                  <label For="Dosage-Strip"
                   className="form-label">
                    Dosage/Strip
                  </label>
                  <input type="text"
                   onChange= { handleDosageStrip } 
                   className="form-control" 
                   required/>
                </div>&nbsp; &nbsp; &nbsp;
          
                 {/* Product Photo */}
              <div>
                <label for="formFileMultiple" 
                  class="form-label"> 
                  Product Photo
                </label>
                <input class="form-control"
                  onChange= { handleproductphoto}             
                  type="file" 
                  id="formFileMultiple" 
                  multiple
                  required/>
              </div>   

              <br>
              </br>
              <button 
                type="submit"
                onClick={postData}
                className="btn btn-primary d-flex justify-content-center"
                style={{ width: "5rem" }}>
                 Submit
              </button>
              
          </div>
        </div>
        </div>
      </form>
	</>
)
};

export default Chemist;








