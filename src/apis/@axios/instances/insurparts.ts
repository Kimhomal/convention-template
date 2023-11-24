import axios from 'axios';

const insurpartsInstance = axios.create({
  baseURL: 'https://api-dev.insurparts.com/api',
  headers: { 'Content-type': 'application/json' },
});

insurpartsInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('access-token');
    if (accessToken) {
      config.headers['Authorization'] = `JWT ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default insurpartsInstance;
