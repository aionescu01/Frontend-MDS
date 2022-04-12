import React from "react";
import Create_Staff from './crud_staff/create_staff';
import './Players.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function Staff() {
    return (
      <div className="main">
        <h2 className="main-header">Players List</h2>
        <h3><div id="theDiv"></div></h3>
        <div className="pls">
            
        <Create_Staff/>
      </div>
    
      </div>
      
      
    );
  }
  
  export default Staff;
