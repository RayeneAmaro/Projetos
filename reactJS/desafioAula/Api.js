import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://ranekapi.origamid.dev/json/api/produto'
})

export default Api