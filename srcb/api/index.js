import { EventNote } from '@mui/icons-material';
import axios from 'axios';

//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(type, bl_lat, tr_lat,bl_long,tr_long) =>{
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: bl_lat,
              tr_latitude: tr_lat,
              bl_longitude: bl_long,
              tr_longitude: tr_long,
              limit: '8',
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (error){
        console.log(error)
    }
}