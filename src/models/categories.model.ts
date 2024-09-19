import mongoose, { Schema } from "mongoose";

const DecorCategories: Schema = new Schema({
    description: {
        type: String,
    },
    image_url: {
        type: String,
    },
    name: {
        type: String,
    },
    type: {
        type: String,
    }
})

const decorCategories = mongoose.model('decor_categories', DecorCategories);
export { decorCategories };