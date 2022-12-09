import React, {useState, useEffect} from 'react';
import './App.css';
import {CssBaseline, Grid} from '@mui/material';
import { getPlacesData } from './api';

import Login from './components/LoginLogoutAuth0/Login'
import Logout from './components/LoginLogoutAuth0/Logout'
import LoginLogout from './components/LoginLogoutAuth0/LoginLogout'

import TravelComponent from './TravelComponent'

import Header from './components/Header/Header';
import List from './components/List/List';
import Planner from './components/Planner/Planner';

import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//test
function App() {
  const [type, setType] = useState('attractions');
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  
  useEffect(() => {
     getPlacesData(type, bounds.bl_lat, bounds.tr_lat, bounds.bl_long, bounds.tr_long)
       .then((data) =>{
         console.log(data)
         setPlaces(data)
       })
  }, [type, coordinates, bounds]);

  return(
    <Routes>
      <Route path="/" element={<LoginLogout />} />

      <Route path="/travel" element={<html><TravelComponent /><Logout/ ></html>} />

    </Routes>
  );
}

export default App;
