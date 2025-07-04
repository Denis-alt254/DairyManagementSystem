import API from "./api";

export const getUsers = () => API.get('/api/auth/me');

export const createUser = () => API.post('/api/auth/register');