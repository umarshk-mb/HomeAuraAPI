import { Request, Response } from "express";
import { products } from "../models/products.model";

export const getProducts = async (req: Request, res: Response) => {
    const { type } = req.params;
    try {
        const result = await products.find({ type });
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ 'Falied to get products': err });
    }
}