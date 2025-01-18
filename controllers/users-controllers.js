import User from '../db/models/userModel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();

const {SECRET_KEY} = process.env;

export const signUp = async(req,res)=>{
    const {name, email, password, status} = req.body;

 try {
    const user = User.findOne({email});
    if (user) {
        res.status(409).json({massage: 'Email in use'})
    }
    const newUser = new User({name, email, password, status});
    await newUser.hashPassword(password);
    await newUser.save();
    const payload = { id: newUser._id};
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