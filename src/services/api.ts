import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-ecoleta-nodejs.herokuapp.com/',
});

export default api;
