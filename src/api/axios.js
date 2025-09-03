import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
    }
});

api.interceptors.request.use(config => {
    console.log("Request : ", config);
    return config;
},(error)=>Promise.reject(error));

api.interceptors.response.use(
    resp=>{console.log(resp.data.user);
        return resp;
    },
    error=>{
        console.error("Response Error : ", error.response?.data || error.message);
        return Promise.reject(error);
    });

export default api;