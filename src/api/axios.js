import axios from "axios";

const instance= axios.create({
    baseURL: 'https://quejup.onrender.com/api',
    withCredentials:true
})

export default instance