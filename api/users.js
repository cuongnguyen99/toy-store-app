import api from "./client";

const signin = "user/login";
const userInfor = "user/infor";

const login = (email, password, onUploadProgress) => api.post(signin, {email, password});

const getUserInfor = (accessToken) => {
    return api.get(userInfor,"",{
        headers: {Authorization: accessToken}
    })
} 

const addUser = (user, onUploadProgress) => {
    const data = {
        username: user.username,
        password: user.password,
        email: user.email
    }

    return api.post(endpoint, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
    });
}

export default {login, addUser, getUserInfor};