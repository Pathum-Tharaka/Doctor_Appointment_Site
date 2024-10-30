import jwt from "jsonwebtoken";

//admin auth middleware
const authAdmin = async (req, res, next) => {
    try{

        const {atoken} = req.headers

        

        if(!atoken){
            return res.status(401).json({error: "Unauthorized"});
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
             return res.status(401).json({error: "Unauthorized"});
        }

        next();


    }catch(err){
        console.log(err);
        res.status(401).json({error: "Unauthorized"});
    }
}

export default authAdmin