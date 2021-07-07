import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos',
    headers: {}
});

const getPhotos = () => axiosInstance('');

export {getPhotos};