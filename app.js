const express = require("express");
const cors = require("cors");
const app = express();

const { loginUrl } = require("./srcb/spotifyauth");

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/spotify', (req, res) => {
    res.json({ message: loginUrl });
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// console.log(sinfo.loginUrl)