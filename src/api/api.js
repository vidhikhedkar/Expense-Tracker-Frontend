import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-backend-v6mv.onrender.com/api",
  withCredentials: true,
});

// Auth
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const logoutUser = () => API.post("/auth/logout");
export const getProfile = () => API.get("/auth/profile");

export const forgotPassword = (data) =>
  API.post("/auth/forgot-password", data);

export const resetPassword = (token, data) =>
  API.post(`/auth/reset-password/${token}`, data);


// Expenses
export const getExpenses = () => API.get("/expenses");
export const getExpenseById = (id) => API.get(`/expenses/${id}`);
export const addExpense = (data) => API.post("/expenses", data);
export const updateExpense = (id, data) => API.patch(`/expenses/${id}`, data);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
export const getMonthlySummary = (month, year) =>
  API.get(`/expenses/summary?month=${month}&year=${year}`);