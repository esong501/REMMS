import React, {useState, useEffect} from 'react';
import '../../App.css';
import {CssBaseline, Grid} from '@mui/material';
import { getPlacesData } from '../../api';

import Header from '../Header/Header';
import List from '../List/List';
import Planner from '../Planner/Planner';

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

  return (
   <>
   <CssBaseline />
   <Header 
    setCoordinates={setCoordinates} 
    setBounds={setBounds}
    />
   <Grid container spacing={3} style={{width :'100%'}}>
    <Grid item xs={12} md = {5} >
      <List 
      places ={places}
      type = {type}
      setType={setType}/>
    </Grid>
    <Grid item xs={12} md= {7} style={{ display: 'flex'}}>
      <Planner/>
    </Grid>
   </Grid>
   </>
  );
}

export default App;
