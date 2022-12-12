import React, {useState, useEffect} from 'react';
import './App.css';
import {CssBaseline, Grid} from '@mui/material';

import Header from './components/Header/Header';
import List from './components/List/List';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Home from './components/Home/Home';

function App() {
  const [type, setType] = useState('attractions');
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  
  useEffect(() => {
    //  getPlacesData(type, bounds.bl_lat, bounds.tr_lat, bounds.bl_long, bounds.tr_long)
    //    .then((data) =>{
    //      console.log(data)
    //      setPlaces(data)
    //    })
    fetch("http://localhost:8080/locations", {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({type: type, params: bounds})})
    .then((res) => res.json())
    .then((data) => setPlaces(data.locations));
  }, [type, coordinates, bounds]);

  return (
    <>
    <CssBaseline />
    <Header 
      setCoordinates={setCoordinates} 
      setBounds={setBounds}
      />
    <Grid container spacing={3} style={{width :'100%'}}>
      <Grid item xs={12}>
        <List 
        places ={places}
        type = {type}
        setType={setType}/>
      </Grid>
    </Grid>
    </>
    // <div>
    //   <Home />
    // </div>
  );
}

export default App;
