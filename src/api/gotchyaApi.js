import axios from 'axios';

const gotchya = axios.create({
  //baseURL: 'http://localhost:8000/',
  baseURL: 'https://gotchyabackend.onrender.com/api',
});

export default gotchya;
