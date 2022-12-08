import logo from './logo.svg';
import './App.css';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Login from './components/LoginLogoutAuth0/Login'
import Logout from './components/LoginLogoutAuth0/Logout'
import LoginLogout from './components/LoginLogoutAuth0/LoginLogout'

import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
return(
  <Routes>
    <Route path="/" element={<LoginLogout />} />

    <Route path="/travel" element={<div>Travel Stuff Goes here<Logout/ ></div>} />
  </Routes>
)

}

export default App;
