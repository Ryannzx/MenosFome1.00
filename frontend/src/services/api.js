import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000' //'http://localhost:5000/campanhas'
})

export default api