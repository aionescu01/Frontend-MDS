import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Home,
    Players,
    Staff,
    Player_Contracts,
    Staff_Contracts,
    Matches,
    Stadiums

  } from "./components";
import Update_Players from './components/crud_players/update_players';
import Update_Staff from './components/crud_staff/update_staff';
import Update_Player_Contracts from './components/crud_player_contracts/update_player_contracts';
  ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/update_players" element={<Update_Players />} />
        <Route path="/update_player_contract" element={<Update_Player_Contracts />} />
        <Route path="/update_staff" element={<Update_Staff />} />
        <Route path="/Player_Contracts" element={<Player_Contracts />} />
        <Route path="/Staff_Contracts" element={<Staff_Contracts />} />
        <Route path="/Matches" element={<Matches />} />
        <Route path="/Stadiums" element={<Stadiums />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );




