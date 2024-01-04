import { api } from ".";

export const createUser = (data) => api("post", "/user/create", data).then((res) => { return res.data; }).catch((err) => { throw err; });

export const logIn = (data) => api("post", "/user/login", data).then((res) => { return res.data; }).catch((err) => { throw err; });