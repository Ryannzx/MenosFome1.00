import axios from 'axios'

const api = axios.create({
    baseURL: 'https://menosfome1-00.onrender.com'
})

export default api