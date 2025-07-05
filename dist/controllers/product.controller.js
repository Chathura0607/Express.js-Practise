"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.saveProduct = exports.getAllProducts = void 0;
const productService = __importStar(require("../services/products.services"));
// Controller function to handle get all products
const getAllProducts = (req, res) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!'
        });
    }
};
exports.getAllProducts = getAllProducts;
const saveProduct = (req, res) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);
        if (validationError) {
            res.status(400).json({ error: validationError });
        }
        const savedProduct = productService.saveProduct(newProduct);
        res.status(201);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!'
        });
    }
};
exports.saveProduct = saveProduct;
const getProduct = (req, res) => {
};
exports.getProduct = getProduct;
const updateProduct = (req, res) => {
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
};
exports.deleteProduct = deleteProduct;
