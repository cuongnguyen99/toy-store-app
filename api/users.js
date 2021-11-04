import api from "./client";

const endpoint = "users";

const getUsers = () => api.get(endpoint);

export default {getUsers,};