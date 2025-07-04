import API from "./api";

export const getCows = () => API.get('/api/cows');
export const createCow = (formData) => API.post('/api/cows', formData);
export const updateCow = () => API.put('/api/cows/:tagId');
export const deleteCow = () => API.delete('/api/cows/:tagId');