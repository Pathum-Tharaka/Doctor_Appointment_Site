import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.once('connected', () => console.log('MongoDB connected'));

    await mongoose.connect('${process.env.MONGO_URI}/prescripto') 
}

export default connectDB