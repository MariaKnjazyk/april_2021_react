import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {}
});

const getPosts = () => axiosInstance('');
const getPostComments = (id) => axiosInstance('/' + id + '/comments');

export {getPosts, getPostComments};