"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const productsRouter = (0, express_1.Router)();
exports.productsRouter = productsRouter;
productsRouter.get('/:type', products_controller_1.getProducts);
