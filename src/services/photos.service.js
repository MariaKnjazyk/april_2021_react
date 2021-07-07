import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums',
    headers: {}
});

const getAlbums = () => axiosInstance('');

export {getAlbums};