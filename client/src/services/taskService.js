import App from "../App";
import API from "./api";

export const getTasks = () => API.get('/api/tasks');
export const createTask = (formData) => API.post('/api/tasks', formData);
export const updateTask = (taskStatus) => API.put('/api/tasks/:title', taskStatus);
export const deleteTask = () => API.delete('/api/tasks/:title');