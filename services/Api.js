import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://local:3000/'
    })
}