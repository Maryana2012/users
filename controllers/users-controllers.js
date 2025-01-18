import User from '../db/models/userModel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();

const {SECRET_KEY} = process.env;

const signUp = async(req,res)=>{
    const {name, email, password, status} = req.body;
    console.log(req.body)

 try {
    const user =await User.findOne({email});
    console.log(user)
    if (user) {
        res.status(409).json({massage: 'Email in use'});
        return
    }
    const newUser = new User({name, email, password, status});
    await newUser.hashPassword(password);
    await newUser.save();
    
    const payload = { id: newUser._id};
    // console.log(payload)
    const token = jwt.sign(payload, SECRET_KEY);

    await User.findByIdAndUpdate(newUser._id,{token});

    res.status(201).json({
        token,
        user:{name, email, status}
    })
 }
 catch (error) {
    res.status(500).json({message: error.message})
 }
}

export default {
    signUp
}