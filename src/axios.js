import axios from 'axios';
// initilze the axios
const instance = axios.create({
 baseURL: "https://api.themoviedb.org/3"
});
export default instance ;