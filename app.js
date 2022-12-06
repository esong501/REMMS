const express = require("express");
const app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.post("/locations", (req, res) => {
    console.log(req.body.type);
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));