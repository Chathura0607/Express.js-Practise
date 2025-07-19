/*
export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}*/

import mongoose from "mongoose";

// Define the schema
const ProductModel = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

// Create and export the model
const Product = mongoose.model("Product", ProductModel);
export default Product;
