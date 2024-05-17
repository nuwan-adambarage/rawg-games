import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1bd14b65230442cb935be353726ec9aa'
    }
})