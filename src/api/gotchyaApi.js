import axios from 'axios';

const gotchya = axios.create({
  baseURL: 'http://localhost:8000/',
  //baseURL: 'ec2-3-28-221-246.me-central-1.compute.amazonaws.com/api',
});

export default gotchya;
