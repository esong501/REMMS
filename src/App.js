import logo from './logo.svg';
import './App.css';
import { Buffer } from 'buffer';

function App() {

  var client_id = process.env.REACT_APP_CLIENT_ID;
  var client_secret = process.env.REACT_APP_CLIENT_SECRET;

  // var authOptions = {
  //   {
  //     grant_type: 'client_credentials'
  //   }
  // };

  // request.post(authOptions, function(error, response, body) {
  //   if (!error && response.statusCode === 200) {
  //     var token = body.access_token;
  //   }
  // });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + (Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    body: {
      grant_type: 'client_credentials'
    }
  };
  fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then(response => response.json())
      .then(data => console.log({ postId: data.id }));


  return (
    <div className="App">
      {/* {console.log(process.env.REACT_APP_TITLE)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
