import logo from './logo.svg';
import './App.css';
import LocationSearch from './components/LocationSearch/LocationSearch';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <form action="./../../../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
      <LocationSearch/>
    </div>
  );
}

export default App;