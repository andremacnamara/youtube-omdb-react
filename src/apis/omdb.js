import axios from 'axios';

const KEY = process.env.REACT_APP_OMDB_KEY;
const ID = process.env.REACT_APP_OMDB_ID;

export default axios.create({
    baseURL: 'http://www.omdbapi.com',
    params: {
        i: ID,
        apikey: KEY
    }
});