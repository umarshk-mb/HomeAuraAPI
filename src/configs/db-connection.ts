import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://imumar944:Sawumar%40944@home-aura.ykhy2.mongodb.net/home_aura_db?retryWrites=true&w=majority&appName=home-aura');
        console.log('Data base connected!');
    }
    catch (err) {
        console.log('MongoDb connection error', err);
        process.exit(1);
    }
}

export default connectDB;