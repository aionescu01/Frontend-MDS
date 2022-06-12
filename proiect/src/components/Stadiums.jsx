import React from "react";
import Create_Stadium from './crud_stadiums/create_stadium';
import Read_Stadium from './crud_stadiums/read_stadium';
import Update_Stadium from './crud_stadiums/update_stadium';
import './Players.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function Stadiums() {
  return (
    <div className="main">

      
<div className="pls1">

          <div className="pls2">
          
<Create_Stadium/>
    </div>
       
    </div>
      <h2 className="main-header">Stadiums List</h2>

     
      <div className="pls">
         <Read_Stadium/> 
      
    </div>

    <h3><div id="theDiv"></div></h3>
    <div className="pls">
          
      
    </div>
    <div className="pls">
          

    </div>
    </div>
    
    
  );
  }
  
  export default Stadiums;
