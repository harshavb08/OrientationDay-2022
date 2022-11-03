import axios from 'axios';
export default axios.create({
    baseURL: 'https://orientationday-2022-mang-default-rtdb.firebaseio.com/'
});