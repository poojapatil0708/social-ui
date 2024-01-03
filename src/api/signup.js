import { api } from ".";

export const createUser = (data) => api("post", "/user/create", data).then((res) => { return res.data; }).catch((err) => { throw err; });