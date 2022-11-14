import logo from './logo.svg';
import './App.css';
import { Buffer } from 'buffer';
import { Routes, Route } from 'react-router-dom';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Home from './components/Home/Home';

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
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/location" element={<LocationSearch/>} />
    </Routes>
  );
}

export default App;
