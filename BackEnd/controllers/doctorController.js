



//api for adding doctor
export const addDoctor = async (req, res) => {
    const {
        name,
        email,
        password,
        image,
        speciality,
        degree,
        experience,
        about,
        available,
        fees,
        address,
        date,
        slots_booked
    } = req.body
    if (!name || !email || !password || !image || !speciality || !degree || !experience || !about || !available || !fees || !address || !date || !slots_booked) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
    try {
        const doctor = await doctorModel.create({
            name,
            email,
            password,
            image,
            speciality,
            degree,
            experience,
            about,
            available,
            fees,
            address,
            date,
            slots_booked
        })
        res.status(201).json({ doctor })
    } catch (error) {
        console.log(error)
    }

}