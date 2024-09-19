import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    ratings: {
        type: Number,
    },
    count: {
        type: Number,
    },
});

const products = mongoose.model('Products', ProductSchema, 'decor_products');
export { products }