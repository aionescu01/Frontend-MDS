import React from "react";
import Create_Player_Contracts from './crud_player_contracts/create_player_contracts';
import Read_Player_Contracts from "./crud_player_contracts/read_player_contracts";
import Update_Player_Contracts from "./crud_player_contracts/update_player_contracts";
import './Players.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function Player_Contracts() {
  return (
    <div className="main">

<<<<<<< Updated upstream
      <h2 className="main-header">Player Contracts List</h2>
=======
        
<div className="pls1">
<div className="pls2">
         <Add_player_contracts/>    

            </div>
            <div className="pls2">
            
<Create_Player_Contracts/>
      </div>
         
      </div>
        <h2 className="main-header">Players List</h2>

       
        <div className="pls">
           <Read_Player_Contracts/> 
        
      </div>
      {/* <h2 className="main-header">Add a player</h2>  */}
      <h3><div id="theDiv"></div></h3>
>>>>>>> Stashed changes
      <div className="pls">
            
        
      </div>
      <div className="pls">
            

      </div>
      </div>
      
    
    
  );
  }
  
  export default Player_Contracts;
