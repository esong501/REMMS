import React, {useEffect, useState} from 'react'
import { getTokenFromUrl } from '../../App';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();



const LocationSearch = () => {

  const [spotifyToken, setSpotifyToken] = useState("")

  useEffect(()=>{
    // console.log("token derived: ", getTokenFromUrl())
    const _spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";

    // console.log("SPOTIFY TOKEN ", _spotifyToken)

    if (_spotifyToken){
      setSpotifyToken(_spotifyToken)

      spotify.setAccessToken(_spotifyToken)

      spotify.getMe().then((user)=>{
        console.log(user)
      });
    }
  })
  const [searchInput, setSearchInput] = useState("");

  const countries = [

      { name: "Belgium", continent: "Europe" },
      { name: "India", continent: "Asia" },
      { name: "Bolivia", continent: "South America" },
      { name: "Ghana", continent: "Africa" },
      { name: "Japan", continent: "Asia" },
      { name: "Canada", continent: "North America" },
      { name: "New Zealand", continent: "Australasia" },
      { name: "Italy", continent: "Europe" },
      { name: "South Africa", continent: "Africa" },
      { name: "China", continent: "Asia" },
      { name: "Paraguay", continent: "South America" },
      { name: "Usa", continent: "North America" },
      { name: "France", continent: "Europe" },
      { name: "Botswana", continent: "Africa" },
      { name: "Spain", continent: "Europe" },
      { name: "Senegal", continent: "Africa" },
      { name: "Brazil", continent: "South America" },
      { name: "Denmark", continent: "Europe" },
      { name: "Mexico", continent: "South America" },
      { name: "Australia", continent: "Australasia" },
      { name: "Tanzania", continent: "Africa" },
      { name: "Bangladesh", continent: "Asia" },
      { name: "Portugal", continent: "Europe" },
      { name: "Pakistan", continent:"Asia" } 
    ];
    
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    // const filteredData = countries.filter((el) => {
    //   //if no input the return the original
    //   if (searchInput === '') {
    //       return el;
    //   }
    //   //return the item which contains the user input
    //   else {
    //       return el.name.toLowerCase().includes(searchInput)
    //   }
    // })

    const data = () => {
      if (searchInput === ''){
        return spotify.getMyCurrentPlayingTrack().then((cplay) => {
          return [cplay.item];
        });
      }
      else{
        return spotify.search(searchInput, ["track"]).then((query)=>{
          return query.tracks.items;
        });
      }
    }

    const filteredData = [data]
    
    return (
    <div>
      <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} />
      {/* {console.log(spotify.getMe())} */}
      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
        </tr>
      
        {filteredData.map((item) => (
                <li key={item.name}>{item.name}</li>
            ))}
      </table>
    </div>
    )
      
      
};

export default LocationSearch;