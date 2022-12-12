import React, {useState, useEffect} from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles.js';

const Header = ({setCoordinates, setBounds}) => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);
    const [mUrl, setMUrl] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/maps")
        .then((res) => res.json())
        .then((data) => setMUrl(data.message));
    }, []);

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
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Journey
                </Typography>
                <Box display="flex">
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                    <LoadScript
                        googleMapsApiKey={mUrl}
                        libraries={["places"]}
                        >
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{root:classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                    </LoadScript>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Header;