import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gmalaga-159415.firebaseio.com/'
});

export default instance;
