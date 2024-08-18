import mongoose, { Document, Schema } from "mongoose";

interface ICategory extends Document {
    description: string;
    image_url: string;
    name: string;
    type: string;
}

const CategorySchema: Schema = new Schema({
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})

const decorCategories = mongoose.model<ICategory>('decor_categories', CategorySchema);

export default decorCategories;