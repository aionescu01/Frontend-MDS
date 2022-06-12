import React from "react";
import Create_Match from './crud_match/create_match';
import Read_Match from "./crud_match/read_match";
import Update_Match from './crud_match/update_match';
import './Players.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function Matches() {
    return (
        <div className="main">

        <h2 className="main-header">Matches List</h2>
        <div className="pls">
           <Read_Match/> 
        
      </div>
      <h2 className="main-header">Add a Match</h2> 
      <h3><div id="theDiv"></div></h3>
      <div className="pls">
            
        <Create_Match/>
      </div>
  
      <h2 className="main-header">Update a Match</h2> 
      <h3><div id="theDiv"></div></h3>
      <div className="pls">
            
        <Update_Match/>
      </div>
      </div>
      
      
    );
  }
  
  export default Matches;
