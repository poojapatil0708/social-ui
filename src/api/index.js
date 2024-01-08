import axios from "axios";

export const api = (method, url, data) => {
    return axios({
        method: method, url: `http://localhost:8000${url}`, data: data
    })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
};