"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = exports.updateProduct = exports.getProductById = exports.saveProduct = exports.getAllProducts = void 0;
const db_1 = require("../db/db");
const getAllProducts = () => {
    return db_1.productList;
};
exports.getAllProducts = getAllProducts;
const saveProduct = (product) => {
    db_1.productList.push(product);
    return product;
};
exports.saveProduct = saveProduct;
const getProductById = (id) => {
    return db_1.productList.find(product => product.id === id);
};
exports.getProductById = getProductById;
const updateProduct = (id, data) => {
    const product = db_1.productList.find(product => product.id === id);
    if (!product) {
        return null;
    }
    Object.assign(product, data);
    return product;
};
exports.updateProduct = updateProduct;
const deleteProduct = (id) => {
    const index = db_1.productList.findIndex(product => product.id === id);
    if (index === -1) {
        return false;
    }
    db_1.productList.splice(index, 1);
    return true;
};
const validateProduct = (product) => {
    if (!product.id || !product.name || product.price || !product.currency || !product.image) {
        return 'All fields are required';
    }
    return null;
};
exports.validateProduct = validateProduct;
