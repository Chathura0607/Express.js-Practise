import {Request, Response} from 'express';
import * as productService from '../services/products.services'

// Controller function to handle get all products
export const getAllProducts = (req: Request, res: Response) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!'
        })
    }
}

export const saveProduct = (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);
        if (validationError) {
            res.status(400).json({error: validationError});
        }

        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong!'
        })
    }
}

export const getProduct = (req: Request, res: Response) => {
}

export const updateProduct = (req: Request, res: Response) => {
}

export const deleteProduct = (req: Request, res: Response) => {
}