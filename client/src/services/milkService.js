import API from "./api";

export const getMilk = () => API.get('/api/milk');
export const createMilk = (formData) => API.post('/api/milk', formData);