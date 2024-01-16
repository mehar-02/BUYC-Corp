import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your server's URL
});

export default instance;