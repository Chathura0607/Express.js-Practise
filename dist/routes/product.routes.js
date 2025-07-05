"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
// Handle Requests
productRouter.get("/all", product_controller_1.getAllProducts); // Get all products
productRouter.post("/save", product_controller_1.saveProduct); // Save a product
productRouter.get("/:id", product_controller_1.getProduct); // Get a product by ID
productRouter.put("/update/:id", product_controller_1.updateProduct); // Update a product by ID
productRouter.delete("/delete/:id", product_controller_1.deleteProduct); // Delete a product by ID
exports.default = productRouter;
