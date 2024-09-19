import { Router } from "express";
import { getProducts } from "../controllers/products.controller";

const productsRouter = Router();
productsRouter.get('/:type', getProducts)

export { productsRouter }