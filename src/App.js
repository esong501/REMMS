import logo from './logo.svg';
import './App.css';
import { Buffer } from 'buffer';
import { Routes, Route } from 'react-router-dom';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Home from './components/Home/Home';

const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/location"

const clientId = process.env.REACT_APP_CLIENT_ID

const scopes = ["user-read-currently-playing"]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getTokenFromUrl = ()=>{
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}

function App() {

  // var title = process.env.REACT_APP_TITLE
  // var client_id = process.env.REACT_APP_CLIENT_ID;
  // var client_secret = process.env.REACT_APP_CLIENT_SECRET;
  // var url = process.env.REACT_APP_URL

  // var authOptions = {
  //   grant_type: "client_credentials"
  // };

  // // request.post(authOptions, function(error, response, body) {
  // //   if (!error && response.statusCode === 200) {
  // //     var token = body.access_token;
  // //   }
  // // });

  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     "Authorization": 'Basic ' + (Buffer(client_id + ':' + client_secret).toString('base64')),
  //     "Content-Type": title + '/' + (Buffer("http://localhost:3000").toString('base64'))
  //   },
  //   body: JSON.stringify(authOptions)
  // };

  // console.log(requestOptions)

  // fetch('https://accounts.spotify.com/api/token', requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log({ postId: data.id }));


  return (
    <div>
      <Routes>
        {/* {console.log(process.env.REACT_APP_TITLE)} */}
        <Route path="/" element={<Home/>}/>
        <Route path="/location" element={<LocationSearch/>} />
      </Routes>
    </div>
  );
}

export default App;
