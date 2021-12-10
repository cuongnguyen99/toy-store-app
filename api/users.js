import api from "./client";

const signin = "user/login";
const userInfor = "user/infor";
const register = "user/register";
const addCart = "user/addcart";

const login = (email, password) => api.post(signin, {email, password});

const getUserInfor = (accessToken) => {
    return api.get(userInfor,"",{
        headers: {Authorization: accessToken}
    })
} 

const addUser = (user, onUploadProgress) => {
    const data = {
        name: user.username,
        email: user.email,
        password: user.password,
    }

    return api.post(register, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
    });
}

const addToCart = (cart, accessToken) => {
    return api.patch(addCart, {cart}, {
        headers: {Authorization: accessToken}
    })
}

export default {login, addUser, getUserInfor, addToCart};