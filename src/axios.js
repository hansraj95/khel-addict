
import axios from 'axios'
const axiosinstance=axios.create(
    {
        baseURL:"https://newsapp-backened.herokuapp.com/"
    }
)
export default axiosinstance;