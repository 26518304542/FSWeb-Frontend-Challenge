import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {
    console.log("Request : ", config);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA0ODk0LCJ1c2VybmFtZSI6IsOWemfDvHIgScWfxLFrIMOHaW1lbiIsImVtYWlsIjoib3pndXJjaW1lbjFAZ21haWwuY29tIiwicm9sZSI6InN0dWRlbnQiLCJjb2hvcnRfaWQiOjc1NiwiY29ob3J0X25hbWUiOiJGU1dFQjA2MjUiLCJlZHVjYXRpb25fdHlwZSI6IkZVTExTVEFDSy1GVUxMIiwic3BlY2lhbCI6IsSwR8OWIiwic3RhdHVzIjoxLCJuZXdfY29ob3J0cyI6bnVsbCwiZXhwIjoxNzU2OTQwMjY1LCJpYXQiOjE3NTY4NDMwNjV9.QHdtEeP1DXiGYU7RtI-67FTxKIVdQ9hUx7e-isDaSWs";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},(error)=>Promise.reject(error));

api.interceptors.response.use(
    resp=>resp,
    error=>{
        console.error("Response Error : ", error.response?.data || error.message);
        return Promise.reject(error);
    });

export default api;