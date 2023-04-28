import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

let refresh = false;

axios.interceptors.response.use(res => res, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;

        const response = await axios.post('refresh', {}, {
            withCredentials: true
        });
        console.log("response: ", response)
        
        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            console.log("acac");
            

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});