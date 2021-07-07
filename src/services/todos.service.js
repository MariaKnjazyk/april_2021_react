import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
    headers: {}
});

const getTodos = () => axiosInstance('');

export {getTodos};