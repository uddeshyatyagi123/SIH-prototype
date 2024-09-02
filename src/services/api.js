import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API endpoint

export default {
  getJobs: async () => {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
  },
  getJob: async (id) => {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
  },
  getJobDetails: async () => {
    const response = await axios.get(`${API_URL}/jobDetails`);
    return response.data;
  },
  getProfile: async () => {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
  },
  getMyJobs: async () => {
    const response = await axios.get(`${API_URL}/myJobs`);
    return response.data;
  },
  getEscrowTransactions: async () => {
    const response = await axios.get(`${API_URL}/escrow`);
    return response.data;
  },
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  },
  signup: async (name, email, password) => {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    return response.data;
  },
  getUser: async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  },
};
