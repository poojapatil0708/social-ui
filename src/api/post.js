import { api } from ".";

export const createPost = (data) => api("post", "/post/create", data).then((res) => { return res.data; }).catch((err) => { throw err; });

export const getFeed = (id) => api("get", `/post/getpost/${id}`, null).then((res) => { return res.data; }).catch((err) => { throw err; });

export const removePost = (id) => api("delete", `/post/${id}`, null).then((res) => { return res.data; }).catch((err) => { throw err; });

