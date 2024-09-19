import { Request, Response } from "express";
import { decorCategories } from "../models/categories.model";

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const DecorCategories = await decorCategories.find();
        res.status(200).json(DecorCategories);
    }
    catch (err) {
        res.status(500).json({ 'Failed to Get Categories': err })
    }
}