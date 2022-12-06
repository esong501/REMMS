import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select } from '@mui/material';
import { FormControl } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';


const List = ({places, type, setType}) => {
    const classes = useStyles();


    return(
        <div className={classes.container}>
            <Typography variant='h5'>
                Attractions & Restaurants around you
                <FormControl className={classes.fromControl}>
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={(event) => setType(event.target.value)}>
                        <MenuItem value = "attractions">Attractions</MenuItem>
                        <MenuItem value = "restaurants">Restaurants</MenuItem>
                        
                    </Select>
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place,i) => (
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place} />
                        </Grid>
                    ))}
                </Grid>
            </Typography>
        </div>
    );
}

export default List;