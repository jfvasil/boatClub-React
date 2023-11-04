import axios from 'axios'

const BASE_URL = 'https://lake-wickaboag-backend-da96a41ce10c.herokuapp.com/'

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})