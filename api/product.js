import api from "./client";

const productById = "api/products";

const getProductByCategory = (categoryId) => {
    return api.get(productById+"?category="+categoryId);
}

export default {getProductByCategory};