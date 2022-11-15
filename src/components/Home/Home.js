import logo from './../../logo.svg';
import './Home.css'
import { loginUrl } from './../../App'

function Home() {
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Log into Spotify
            </a>
            <div>
            </div>
            </header>
        </div>
      );
}
    
    export default Home;
