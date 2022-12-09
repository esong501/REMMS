require('dotenv').config({ path:__dirname+'./../.env' })

const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/location";

const clientId = process.env.CLIENT_ID;

const scopes = ["user-read-currently-playing"];

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

module.exports = {
    loginUrl: loginUrl
};