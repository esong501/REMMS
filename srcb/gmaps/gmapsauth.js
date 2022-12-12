require('dotenv').config({ path:__dirname+'./../../.env' })

const key = process.env.GOOGLE_MAPS_API_KEY;

module.exports = {
    maps: key
};