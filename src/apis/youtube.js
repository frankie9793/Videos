import axios from 'axios';

const KEY = 'AIzaSyA_448M6S95atMFAtS7WP5g8vQ9FvEfwSc';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});