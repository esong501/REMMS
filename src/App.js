import logo from './logo.svg';
import './App.css';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Login from './components/LoginLogoutAuth0//Login'
import Logout from './components/LoginLogoutAuth0/Logout'
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [token, setToken] = useState(false);
  const {isLoading} = useAuth0();
  const {isAuthenticated} = useAuth0();
  /*if(!token) {
    return <Login setToken={setToken} />
  }*/
  if (isLoading){
  return (<html><div>
    Loading...
    </div></html>
  )}else if (isAuthenticated){
  return (<html><div>
      <Logout />
      </div></html>
    )
  }else{
  return (<html><div>
      <Login />
      </div></html>
    )
  }
  ;
}

export default App;
