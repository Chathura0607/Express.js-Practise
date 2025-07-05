import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter: Router = Router();

// Handle Requests
productRouter.get("/all", getAllProducts); // Get all products
productRouter.post("/save", saveProduct); // Save a product
productRouter.get("/:id", getProduct); // Get a product by ID
productRouter.put("/update/:id", updateProduct); // Update a product by ID
productRouter.delete("/delete/:id", deleteProduct); // Delete a product by ID

export default productRouter;