import axios from 'axios';
export default axios.create({
    baseURL: 'https://orientationday-2022-list-default-rtdb.firebaseio.com/'
});