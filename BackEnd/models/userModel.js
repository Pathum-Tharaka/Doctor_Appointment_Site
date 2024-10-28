import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String, default: "https://cdn-icons-png.flaticon.com/512/149/149072.png"},
    address: {type: String, default: {line1: "", line2: ""}},
    gebder: {type: String, default: "Not Selected"},
    dob: {type: String, default: "Not Selected"},
    phone: {type: String, default: "000-000-0000"}
   
},)

export default mongoose.models.user || mongoose.model('user', userSchema)