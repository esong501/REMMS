const express = require("express");
const cors = require("cors");
const app = express();

const { loginUrl } = require("./srcb/spotify/spotifyauth");

const { getPlacesData } = require("./srcb/api/index")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); // to support URL-encoded bodies

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

app.post("/locations", (req, res) => {
    const bounds = req.body.params;
    console.log(bounds)
    res.json({ locations: getPlacesData(req.body.type, bounds.bl_lat, bounds.tr_lat, bounds.bl_long, bounds.tr_long) });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// console.log(sinfo.loginUrl)