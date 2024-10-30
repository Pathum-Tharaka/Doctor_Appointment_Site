import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from "jsonwebtoken"


//api for adding doctor
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, image, speciality, degree, experience, about, available, fees, address } = req.body
        const imageFile = req.file

        //check if all fields are filled
        if (!name || !email || !password || !imageFile || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(421).json({ error: "Please fill all the fields" })
        }

        //check if email is valid
        if (!validator.isEmail(email)) {
            return res.status(422).json({ error: "Invalid email address" })
        }

        //check if password is strong enough
        if (password.length < 6) {
            return res.status(423).json({ error: "Password is not strong enough" })
        }

        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //image to be uploaded to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: "image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now(),
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.status(201).json({ message: "Doctor added successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

//api for getting admin
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        }else{
             res.status(425).json({ error: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

export { addDoctor, loginAdmin }