import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => 
            console.log("MongoDB connection ready")
        );

        mongoose.connection.on("error", (err) => 
            console.error("MongoDB connection error:", err)
        );

        await mongoose.connect(process.env.MONGODB_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit with failure code
    }
};

export default connectDB;
