import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {classes}  from './styles.js';

const Header = ({setCoordinates, setBounds}) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => { setAutocomplete(autoC);
    }

    const onPlaceChanged = () =>{
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        const bl_lat = lat-0.036;
        const tr_lat = lat+0.036;
        const bl_long = lng-0.036;
        const tr_long = lng+0.036;
        
        setCoordinates({lat, lng});
        setBounds({bl_lat, tr_lat, bl_long, tr_long});
    }

    return(
        <AppBar position="static">
            <Toolbar style={classes.toolbar}>
                <Typography variant="h5" style={classes.journey}>
                    <i>Journey</i>
                </Typography>
                <Box display="flex">
                    <Typography variant='h6' >
                        Exploring
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div style= {classes.search}>
                            <div style={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..."  />
                        </div>
                    </Autocomplete>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Header;