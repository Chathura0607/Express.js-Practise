"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
// 1. Initialize the Express App
const app = (0, express_1.default)();
// 2. Define Middlewares
/*Instruct to parse the request
payload data to be converted to JSON format*/
app.use(express_1.default.json());
app.use("api/products", product_routes_1.default);
// 3. Define a simple HTTP request
/*app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});*/
exports.default = app;
