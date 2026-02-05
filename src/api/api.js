import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Add token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const forgotPassword = (data) => API.post("/auth/forgot-password", data);
export const resetPassword = (token, data) => API.post(`/auth/reset-password/${token}`, data);

export const getExpenses = () => API.get("/expenses");
export const getExpenseById = (id) => API.get(`/expenses/${id}`);
export const addExpense = (data) => API.post("/expenses", data);
export const updateExpense = (id, data) => API.patch(`/expenses/${id}`, data);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
export const getMonthlySummary = (month, year) => API.get(`/expenses/summary?month=${month}&year=${year}`);
