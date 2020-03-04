// JavaScript logic to connect to the backend API.

import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        // This JWT auth header should match the one in 'settings.py' on the
        // backend
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});
