import API from "./api";

export const getExpenses = () => API.get('/api/expenses');
export const createExpense = (formData) => API.post('/api/expenses', formData);
export const getSummary = () => API.get('/api/expenses/summary');