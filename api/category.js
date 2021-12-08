import api from "./client";

const endpoint = "api/category";

const getCategory = () => {
    return api.get(endpoint);
}

export default {getCategory};