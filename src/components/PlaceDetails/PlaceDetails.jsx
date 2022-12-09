import React from 'react';
import{Box, Typography, Button, Card, CardMedia, CardActions, Chip, CardContent} from '@mui/material';



const PlaceDetails = ({place}) => {

    return(
        <Card elevation={6}>
            <CardMedia style={{height:350}}
            image =  {place.photo ? place.photo.images.large.url :'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title= {place.name}
        />
        <CardContent>
            <Typography gutterBottom variant='h5'>{place.name}</Typography>
        </CardContent>
        </Card>
    );
}

export default PlaceDetails;