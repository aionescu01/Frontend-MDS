import React from "react";
import Create_Staff_Contracts from "./crud_staff_contracts/create_staff_contracts";
import Read_Staff_Contracts from "./crud_staff_contracts/read_staff_contracts";
import Update_Staff_Contracts from "./crud_staff_contracts/update_staff_contracts";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Players.css';

function Staff_Contracts() {
  return (
    <div className="main">
<<<<<<< Updated upstream
=======

      
<div className="pls1">
<div className="pls2">
         <Add_staff_contracts/>    
>>>>>>> Stashed changes

            </div>
          <div className="pls2">
          
<Create_Staff_Contracts/>
    </div>
       
    </div>
      <h2 className="main-header">Staff Contracts List</h2>
<<<<<<< Updated upstream
=======

     
>>>>>>> Stashed changes
      <div className="pls">
         <Read_Staff_Contracts/> 
      
    </div>

    <h3><div id="theDiv"></div></h3>
    <div className="pls">
          
      
    </div>
    <div className="pls">
          

    </div>
    </div>
    
    
  );
  }
  
  export default Staff_Contracts;
