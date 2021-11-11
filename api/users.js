import api from "./client";

const endpoint = "users";

const getUsers = () => api.get(endpoint);

const addUser = (user, onUploadProgress) => {
    const data = {
        username: user.username,
        password: user.password,
        email: user.email
    }

    // const data = new FormData();
    // data.append('username', user.username);
    // data.append('password', user.password);
    // data.append('email', user.email);

    return api.post(endpoint, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
    });
}

export default {getUsers, addUser};