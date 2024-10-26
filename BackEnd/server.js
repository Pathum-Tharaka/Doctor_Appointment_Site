import express from "express";
import 'dotenv/config';
import cors from "cors";

import connectDB from "./config/mongodb.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

connectDB()

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

// //routes
// import authRoutes from './routes/auth.js';
// import userRoutes from './routes/users.js';
// import doctorRoutes from './routes/doctor.js';
// import bookingRoutes from './routes/booking.js';
// import messageRoutes from './routes/message.js';

// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/doctors', doctorRoutes);
// app.use('/api/v1/bookings', bookingRoutes);
// app.use('/api/v1/messages', messageRoutes);

// app.get('/', (req, res) => {