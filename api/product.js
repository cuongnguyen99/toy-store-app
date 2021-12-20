import api from "./client";

const productById = "api/products";

const getProductByCategory = (categoryId) => {
    return api.get(productById+"?category="+categoryId);
}

const getProducts = () => {
    return api.get(productById);
}

export default {getProductByCategory, getProducts};