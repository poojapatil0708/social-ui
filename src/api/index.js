import axios from "axios";

export const api = (method, url, data) => {
    return axios({ method: method, url: `${url}`, data: data })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
};