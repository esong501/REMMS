import logo from './../../logo.svg';
import './Home.css';
import { useEffect, useState } from 'react';

function Home() {
    const [message, setMessage] = useState("");
    const [connected, setConnected] = useState(false);
    const [url, setUrl] = useState("");
    const [lpost, setLpost] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/post", { method: 'post' })
        .then((res) => setConnected(true));
    },[])

    useEffect(() => {
        fetch("http://localhost:8080/spotify")
        .then((res) => res.json())
        .then((data) => setUrl(data.message));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/locations", { 
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({type:"a", params: "b"}) })
        .then((res) => res.json())
        .then((data) => setLpost(data.message));
    },[])

    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                {connected === false ? <p>Searching for server...</p> : <p>Connected!</p>}
            </div>
            <a
                className="App-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {message}
            </a>
            <button onClick={() => {console.log(lpost)}}/>
            <div>
            </div>
            </header>
        </div>
      );
}
    
    export default Home;
