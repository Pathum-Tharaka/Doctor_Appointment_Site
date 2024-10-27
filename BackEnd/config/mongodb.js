import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => 
        console.log("MongoDB connection ready"))

    await mongoose.connect('${process.env.MONGO_URI}/prescripto')
}

export default connectDB
