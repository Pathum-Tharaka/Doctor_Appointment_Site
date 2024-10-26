import express from "express";
import 'dotenv/config';
import cors from "cors";

// import connectDB from "./config/mongodb.js";

//app config
const app = express();
const port = process.env.PORT || 4000;


//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
