import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Home,
    Players,
    Staff,
  } from "./components";
import Update_Players from './components/crud_players/update_players';

  ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/update_players" element={<Update_Players />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );




